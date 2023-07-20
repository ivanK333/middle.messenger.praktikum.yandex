import { BaseApi } from '../base';
import {
  AddUserChatReq,
  ChatsRes,
  CreateChatReq,
  GetUsersForChatReq,
  RequestTokenForChatReq,
  RequestTokenForChatRes,
  DeleteUsersFromChatReq, Chat,
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

  public requestTokenForChat(chatId: number) {
    return this.http.post<RequestTokenForChatReq, RequestTokenForChatRes>(`chats/token/${chatId}/`, {
      data: { id: chatId },
      withCredentials: true,
    });
  }

  public deleteChatById(chatId: number) {
    return this.http.delete('chats/', {
      data: { chatId },
      withCredentials: true,
    });
  }

  public deleteUsersFromChat(variables: DeleteUsersFromChatReq) {
    return this.http.delete<DeleteUsersFromChatReq, void>('chats/users/', {
      data: variables,
      withCredentials: true,
    });
  }

  public updateAvatar(formData: FormData): Promise<Chat> {
    return this.http.put('chats/avatar', {
      data: formData,
      withCredentials: true,
    });
  }
}
