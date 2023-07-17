import { Block } from '.';
import { Store, State, StorageEvent } from '../../store';

export class BlockWithStore<P extends Record<string, unknown> = {}> extends Block<P> {
  public store: Store;

  public state: State;

  constructor(props: P, tagName: keyof HTMLElementTagNameMap = 'div') {
    super(props, tagName);

    this.store = new Store();
    this.state = this.store.getState();
  }

  public withStore(mapStateToProps: (state: State) => Record<string, unknown>, isDebug?: boolean) {
    if (!this.store) return;
    this.store.on(StorageEvent.UPDATE_STATE, () => {
      const propsFormState = mapStateToProps(this.state);
      if (isDebug) {
        console.log('withStore', this.props, propsFormState);
      }
      this.setProps(propsFormState as Partial<unknown>, isDebug);
    });
  }
}
