import { Avatar } from '../Avatar';

export type Props = {
  isCurrentChat?: boolean,
  test?: string,
  className?: string,
  classNameHeader?: string,
  classNameFooter?: string,
  classNameDate?: string,
  classNameTitle?: string,
  classNameMessage?: string,
  classNameCount?: string,
  classNameWrapper?: string,
  avatarInput?: Avatar,

  'time'?: string,
  'id'?: number,
  'title'?: string,
  'avatar'?: string,
  'unread_count'?: number,
  'last_message'?: {
    'user'?: {
      'first_name'?: string,
      'second_name'?: string,
      'avatar'?: string,
      'email'?: string,
      'login'?: string,
      'phone'?: string,
    },
    'time'?: string,
    'content'?: string,
  }
};
