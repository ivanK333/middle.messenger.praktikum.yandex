import { ChatApi, CreateChatReq } from '../../api/chat';
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
}
