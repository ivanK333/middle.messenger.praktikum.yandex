import { renderBlockInRoot } from '../../utils';
import { Block, BlockConstructor } from '../block';
import { Props } from '.';

export class Route {
  private readonly _blockClass: BlockConstructor;

  public _pathname: string;

  public _block: Block | null;

  private _props: Props;

  constructor(pathname: string, view: BlockConstructor, props: Props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    this._block = new this._blockClass();
    if (this._block) {
      renderBlockInRoot(this._props.rootQuery, this._block);
    }
  }
}
