export class EventBus {
  public listeners: Record<string, Function[]>;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: Function) {
    if (!this.listeners[event]) {
      throw new Error(`Unknown event: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  /**
   arguments can be in any quantity and of any type
   */
  emit(event: string, ...arg: any[]) {
    if (!this.listeners[event]) {
      throw new Error(`Unknown event: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...arg);
    });
  }
}
