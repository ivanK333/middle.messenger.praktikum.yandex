import { Message } from '../../store';

export type Props = Message & {
  className?: string,
  classNameWrap?: string,
  classNameMessage?: string,
  classNameDate?: string,
  classNameInfo?: string,
  check?: string,
  date?: string,
};
