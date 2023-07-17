import { UserRes } from '../api/auth';
import { ChatsRes, Chat } from '../api/chat';

export type Message = {
  content: string,
  userAvatar: string | null,
  isIncoming: boolean,
};

export type State = {
  user: UserRes | undefined,
  chats: ChatsRes | undefined,
  currentChat: {
    users: UserRes[] | [],
    info: Chat | undefined,
    messages: Message[] | [],
  }
};

export enum StorageEvent {
  UPDATE_STATE = 'update',
}
