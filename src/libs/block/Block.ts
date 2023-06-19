import { BaseBlockProps } from './types';

export class Block<P extends object = {}> {
  public props: BaseBlockProps<P>;

  constructor(props: BaseBlockProps<P>) {
    this.props = props;
  }
}
