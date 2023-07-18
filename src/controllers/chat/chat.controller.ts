import { AddUserChatReq, ChatApi, CreateChatReq } from '../../api/chat';
import { Store } from '../../store';
import { router } from '../../router';
import { ROUTES } from '../../appConstants';
import { UserRes } from '../../api/auth';
import { WsMessage } from '../../types';

export class ChatController {
  private static _instance: ChatController | null;

  public api: ChatApi;

  public store: Store;

  public wsListeners: Record<number, WebSocket>;

  constructor() {
    this.api = new ChatApi();
    this.store = new Store();
    this.wsListeners = {};

    if (ChatController._instance) {
      return ChatController._instance;
    }

    ChatController._instance = this;
  }

  public async addUserToChat(data: AddUserChatReq) {
    try {
      await this.api.addUserToChat(data);

      await this.getChats();
    } catch (err) {
      console.log(err);
    }
  }

  public async createChat(data: CreateChatReq) {
    try {
      await this.api.createChat(data);
      router.go(ROUTES.chat);
    } catch (err) {
      console.log(err);
    }
  }

  public async deleteChat(id: number) {
    try {
      await this.api.deleteChatById(id);
      this.store.setState('currentChat', {
        users: [],
        info: null,
        messages: [],
      });
      this.store.setState('chats', this.store?.getState()?.chats?.filter((chat) => chat.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  public async deleteUserFromChat(chatId: number, userId: number) {
    try {
      await this.api.deleteUsersFromChat({ chatId, users: [userId] });

      const { currentChat } = this.store.getState();
      const usersToDispatch = currentChat.users.filter((user: UserRes) => user.id !== userId);

      this.store.setState('currentChat', {
        ...currentChat,
        users: usersToDispatch,
        info: usersToDispatch.length ? currentChat.info : null,
      });

      await this.getChats();
    } catch (err) {
      console.log(err);
    }
  }

  public async getChats() {
    try {
      const res = await this.api.getChats();

      this.store.setState('chats', res);
    } catch (err) {
      console.log(err);
    }
  }

  public async updateAvatar(avatar: File | undefined, chatId: number) {
    try {
      if (!avatar) {
        throw Error('Upload a photo');
      }

      const formData = new FormData();
      await formData.append('avatar', avatar);
      await formData.append('chatId', `${chatId}`);

      const res = await this.api.updateAvatar(formData);
      const state = this?.store.getState();

      this.store.setState('currentChat', {
        ...state?.currentChat,
        info: {
          ...state?.currentChat?.info,
          avatar: res.avatar,
        },
      });

      this.getChats();
    } catch (err) {
      console.log(err);
    }
  }

  public async setCurrentChat(id: number) {
    try {
      const state = this.store?.getState();

      const currentChat = {
        info: null,
        users: [],
        messages: [],
      };

      this.store.setState('currentChat', currentChat);

      const targetChat = state?.chats?.find((chat) => chat.id === id);

      if (targetChat && state?.user?.id) {
        const users = await this.api.getUsersForChat(id, { limit: 30 });

        await this.initializeSocket(id, state?.user?.id);

        this.store.setState('currentChat', {
          ...state?.currentChat,
          info: { ...targetChat },
          users,
        });

        this.getMessages(id, 0);
        return;
      }

      throw new Error('Chat not found');
    } catch (err) {
      console.log(err);
    }
  }

  public async connectToChat(chatId: number): Promise<string | undefined> {
    try {
      const { token } = await this.api.requestTokenForChat(chatId);
      return token;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  public async initializeSocket(chatId: number, userId: number) {
    if (!this.wsListeners[chatId]) {
      const token = await this.connectToChat(chatId);

      if (token) {
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);

        socket.addEventListener('open', () => {
          this.wsListeners[chatId] = socket;
          this.getMessages(chatId, 0);
        });

        setInterval(() => {
          socket.send(JSON.stringify({
            type: 'ping',
          }));
        }, 5000);

        socket.addEventListener('message', (e) => {
          const parsedMessage = JSON.parse(e.data);

          if (Array.isArray(parsedMessage)) {
            this.handleMessages(parsedMessage);
            return;
          }

          if (parsedMessage.type === 'message' && parsedMessage.content) {
            this.handleSingleMessage(parsedMessage, chatId);
          }
        });
      }
    }
  }

  public getMessages(chatId: number, offset: number) {
    if (this.wsListeners[chatId]) {
      const stringifyMessage = JSON.stringify({
        type: 'get old',
        content: offset,
      });
      this.wsListeners[chatId].send(stringifyMessage);
    }
  }

  public handleMessages(messages: WsMessage[]) {
    const { currentChat, user } = this.store.getState();

    if (user) {
      const messagesToPushStore = messages.reverse().map((message: WsMessage) => ({
        content: message.content,
        userAvatar: currentChat.users.find((user: UserRes) => user.id === message.user_id)?.avatar || null,
        isIncoming: user.id !== message.user_id,
      }));

      if (messagesToPushStore.length) {
        this.store.setState('currentChat', {
          ...currentChat,
          messages: messagesToPushStore.concat(currentChat.messages),
        });
      }
    }
  }

  public handleSingleMessage(message: WsMessage, chatId: number) {
    const { currentChat, user } = this.store.getState();

    if (user && currentChat?.info?.id === chatId) {
      this.store.setState('currentChat', {
        ...currentChat,
        messages: [...currentChat.messages, {
          content: message.content,
          userAvatar: currentChat.users.find((user: UserRes) => user.id === message.user_id)?.avatar || null,
          isIncoming: user.id !== message.user_id,
        }],
      });
    }
  }

  public sendMessage(message: string, chatId: number) {
    if (this.wsListeners[chatId]) {
      const stringifyMessage = JSON.stringify({
        content: message,
        type: 'message',
      });
      this.wsListeners[chatId].send(stringifyMessage);
    }
  }
}
