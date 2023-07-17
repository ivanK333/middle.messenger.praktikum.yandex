import { AddUserChatReq, ChatApi, CreateChatReq } from '../../api/chat';
import { Store } from '../../store';
import { router } from '../../router';
import { ROUTES } from '../../appConstants';

export class ChatController {
  public api: ChatApi;

  public store: Store;

  constructor() {
    this.api = new ChatApi();
    this.store = new Store();
  }

  public async addUserToChat(data: AddUserChatReq) {
    try {
      await this.api.addUserToChat(data);
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

  public async getChats() {
    try {
      const res = await this.api.getChats();

      this.store.setState('chats', res);
    } catch (err) {
      console.log(err);
    }
  }

  public async setCurrentChat(id: number) {
    try {
      const state = this.store?.getState();

      const targetChat = state?.chats?.find((chat) => chat.id === id);

      if (targetChat && state?.user) {
        const users = await this.api.getUsersForChat(id, { limit: 30 });

        this.store.setState('currentChat', {
          ...state?.currentChat,
          info: { ...targetChat },
          users,
        }, true);

        // console.log('state.currentChat', state.currentChat);
        return;
      }

      throw new Error('Chat not found');
    } catch (err) {
      console.log(err);
    }
  }
}
