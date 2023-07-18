import { EventBus } from '../libs';
import { State, StorageEvent, INITIAL_STATE } from '.';
import { set } from '../utils';

export class Store extends EventBus {
  private static _instance: Store | null;

  private _state: State = INITIAL_STATE;

  constructor() {
    super();
    if (Store._instance) {
      return Store._instance;
    }

    Store._instance = this;
  }

  getState() {
    return this._state;
  }

  setState(path: string, value: unknown) {
    set(this._state, path, value);
    this.emit(StorageEvent.UPDATE_STATE, this._state);
  }
}
