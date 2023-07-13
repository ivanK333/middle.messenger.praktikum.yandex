import { User } from '../types';

export type State = {
  user: User | undefined,
};

export enum StorageEvent {
  UPDATE_STATE = 'update',
}
