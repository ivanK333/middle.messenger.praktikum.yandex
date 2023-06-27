import { Avatar } from '../Avatar';

export type Props = {
  className?: string,
  classNameHeader?: string,
  classNameFooter?: string,
  classNameDate?: string,
  classNameTitle?: string,
  classNameMessage?: string,
  classNameCount?: string,
  classNameWrapper?: string,
  title: string,
  date: string,
  message: string,
  count?: number,
  avatar?: Avatar,
};
