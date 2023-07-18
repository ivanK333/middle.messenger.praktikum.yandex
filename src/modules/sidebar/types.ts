import { HeaderSidebar, ChatPreview } from '../../components';
import { ChatsRes } from '../../api/chat';

export type Props = {
  classNameChats?: string,
  header?: HeaderSidebar,
  chatPreviews?: ChatPreview[],
  chats?: ChatsRes;
};
