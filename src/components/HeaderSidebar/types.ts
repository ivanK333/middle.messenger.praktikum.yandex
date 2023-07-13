import { InputChat } from '../InputChat';
import { HeaderSidebarAvatar } from '../HeaderSidebarAvatar';

export type Values = {
  search: string,
};

export type Props = {
  className?: string,
  classNameUserInfo?: string,
  classNameButton?: string,
  classNameAvatar?: string,
  classNameName?: string,
  avatar?: HeaderSidebarAvatar,
  img?: string,
  search?: InputChat,
  name: string,
};
