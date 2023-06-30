import { InputChat } from '../InputChat';
import { Avatar } from '../Avatar';

export type Values = {
  search: string,
};

export type Props = {
  className?: string,
  classNameUserInfo?: string,
  classNameButton?: string,
  classNameAvatar?: string,
  classNameName?: string,
  avatar?: Avatar,
  img?: string,
  search?: InputChat,
  name: string,
};
