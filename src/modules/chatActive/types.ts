import {
  HeaderChatActive,
  MessageConsole,
  Message,
  Modal,
} from '../../components';

export enum ModalNames {
  addUser = 'addUser',
  deleteChat = 'deleteChat',
  deleteUser = 'deleteUser',
}

export type Props = {
  chatId?: number;
  classNameChat?: string;
  header?: HeaderChatActive;
  messageConsole?: MessageConsole;
  messages: Message[];
  addUser?: Modal;
  deleteChat?: Modal;
  deleteUser?: Modal;
};
