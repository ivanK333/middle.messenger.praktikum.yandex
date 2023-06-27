import { HeaderChatActive, MessageConsole } from '../../components';

export type message = {
  id: string,
  message: string,
};

export type Props = {
  classNameChat?: string;
  header?: HeaderChatActive;
  messageConsole?: MessageConsole;
  messages: message[];
};
