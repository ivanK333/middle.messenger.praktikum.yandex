import { BaseApi } from '../base';
import {
  AddUserChatReq,
  ChatsRes,
  CreateChatReq,
  GetUsersForChatReq,
} from '.';

export class ChatApi extends BaseApi {
  public addUserToChat(variables: AddUserChatReq) {
    return this.http.put('chats/users', {
      data: variables,
      withCredentials: true,
    });
  }

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

  public getUsersForChat(chatId: number, variables: GetUsersForChatReq) {
    return this.http.get(`chats/${chatId}/users`, {
      data: variables,
      withCredentials: true,
    });
  }
}
