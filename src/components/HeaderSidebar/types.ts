import { InputChat } from '../InputChat';
import { HeaderSidebarAvatar, HeaderSidebarCreateChatButton } from '.';

export type Values = {
  search: string,
};

export type Props = {
  className?: string,
  classNameUserInfo?: string,
  classNameAvatar?: string,
  classNameName?: string,
  avatar?: HeaderSidebarAvatar,
  button?: HeaderSidebarCreateChatButton,
  search?: InputChat,
  name: string,
};
