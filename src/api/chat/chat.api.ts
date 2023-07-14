import { BaseApi } from '../base';
import { ChatsRes, CreateChatReq } from '.';

export class ChatApi extends BaseApi {
  public createChat(variables: CreateChatReq) {
    return this.http.post('chats', {
      data: variables,
      withCredentials: true,
    });
  }

  public getChats(): Promise<ChatsRes> {
    return this.http.get('chats', {
      withCredentials: true,
    });
  }
}
