import { Block } from '../../libs';

export type Props = {
  isReset?: boolean,
  classNameModal?: string,
  classNameTitle?: string,
  classNameCloseBtn?: string,
  children: Block,
  name: string,
  title: string,
};
