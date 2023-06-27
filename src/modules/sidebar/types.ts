import { HeaderSidebar, ChatPreview } from '../../components';

export type chat = {
  id: string,
  chat: () => string,
};

export type Props = {
  classNameChats?: string,
  header?: HeaderSidebar,
  chats: ChatPreview[];
};
