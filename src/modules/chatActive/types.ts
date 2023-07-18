import {
  HeaderChatActive,
  MessageConsole,
  Message,
  Modal,
} from '../../components';
import { Message as TMessage } from '../../store';
import { UserRes } from '../../api/auth';

export enum ModalNames {
  addUser = 'addUser',
  deleteChat = 'deleteChat',
  deleteUser = 'deleteUser',
  chatSettings = 'chatSettings',
}

export type Props = {
  users?: UserRes[] | [];
  chatId?: number;
  isEmpty?: boolean;
  classNameEmpty?: string;
  classNameChat?: string;
  header?: HeaderChatActive;
  messageConsole?: MessageConsole;
  messages?: TMessage[] | [];
  messageComponents?: Message[];
  addUser?: Modal;
  deleteChat?: Modal;
  deleteUser?: Modal;
  chatSettings?: Modal;
};
