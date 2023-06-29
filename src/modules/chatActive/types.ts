import { HeaderChatActive, MessageConsole, Message } from '../../components';

export type Props = {
  classNameChat?: string;
  header?: HeaderChatActive;
  messageConsole?: MessageConsole;
  messages: Message[];
};
