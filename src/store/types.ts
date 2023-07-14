import { UserRes } from '../api/auth';
import { ChatsRes } from '../api/chat';

export type State = {
  user: UserRes | undefined,
  chats: ChatsRes | undefined,
};

export enum StorageEvent {
  UPDATE_STATE = 'update',
}
