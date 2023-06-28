import { v4 as makeUUID } from 'uuid';
import { EventBus } from '../event-bus';
import { BaseBlockProps, Meta, EVENTS } from './types';
import { useAccessCheck } from '../../utils';

export class Block<P extends object = {}> {
  public props: BaseBlockProps<P>;

  public readonly eventBus: () => EventBus;

  private readonly _meta: Meta;

  public _element: HTMLElement;

  private readonly _id: string;

  public children: Record<string, Block | Block[]>;

  constructor(propsAndChildren: BaseBlockProps<P>, tagName: keyof HTMLElementTagNameMap = 'div') {
    const eventBus = new EventBus();
    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;

    this._meta = {
      tagName,
      props,
    };

    this._id = makeUUID();

    // @ts-ignore
    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(EVENTS.init);
  }

  get id(): string | null {
    return this._id;
  }

  private _getChildren(propsAndChildren: BaseBlockProps<P>) {
    const children = {};
    const props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      }

      if (Array.isArray(value)) {
        const childArr = [];
        value.forEach((child) => {
          if (child instanceof Block) {
            childArr.push(child);
          }
        });

        children[key] = childArr;
      }

      props[key] = value;
    });

    return { children, props };
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.init, this._init.bind(this));
    eventBus.on(EVENTS.cdm, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.cdu, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.render, this._render.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _createDocumentElement(tagName) {
    return document.createElement(tagName);
  }

  public init() {}

  private _init() {
    this._createResources();

    this.init();
    this.eventBus().emit(EVENTS.render);
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  public componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(EVENTS.cdm);
  }

  private _componentDidUpdate() {
    const response = this.componentDidUpdate();

    if (response) {
      this.eventBus().emit(EVENTS.render);
    }
  }

  public componentDidUpdate() {
    return true;
  }

  public setProps = (nextProps: Partial<BaseBlockProps<P>>) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    this.eventBus().emit(EVENTS.cdu, this.props, nextProps);
  };

  get element(): HTMLElement {
    return this._element;
  }

  private _render() {
    const block = this.render();

    this._removeEvents();
    this._element.innerHTML = '';
    this._element.appendChild(block);

    const { className } = this.props;
    if (className) {
      this._element.className = className;
    }
    this._addEvents();
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: BaseBlockProps<P> | {}) {
    return new Proxy(props, {
      get(target, prop) {
        const isAccessGranted = useAccessCheck(prop);
        if (!isAccessGranted) {
          throw new Error('No access');
        }

        const value = target[prop];

        return typeof value === 'function' ? value.bind(target) : value;
      },

      set(target, prop, value) {
        const isAccessGranted = useAccessCheck(prop);

        if (!isAccessGranted) {
          throw new Error('No access');
        }
        // eslint-disable-next-line no-param-reassign
        target[prop] = value;
        return true;
      },

      deleteProperty() {
        throw new Error('Property cannot be deleted');
      },
    });
  }

  private _removeEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((name) => {
      this._element.removeEventListener(name, events[name]);
    });
  }

  private _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((name) => {
      this._element.addEventListener(name, events[name]);
    });
  }

  protected compile(template: (p: BaseBlockProps<P>) => string, props: BaseBlockProps<P>) {
    Object.assign(this.props, props);
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        const componentArr = [];
        component.forEach((child) => {
          componentArr.push(`<div data-id="${child.id}"></div>`);
        });

        propsAndStubs[name] = componentArr;
      } else {
        propsAndStubs[name] = `<div data-id="${component.id}"></div>`;
      }
    });

    const fragment = document.createElement('template');

    fragment.innerHTML = template(propsAndStubs);

    Object.values(this.children).forEach((component) => {
      if (Array.isArray(component)) {
        component.forEach((child) => {
          const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

          console.log(stub);
          console.log(child);
          if (stub) {
            stub.replaceWith(child.getContent());
          }
        });
        console.log(0, component);
      } else {
        console.log(1, component);
        const stub = fragment.content.querySelector(`[data-id="${component.id}"]`);

        if (stub) {
          stub.replaceWith(component.getContent());
        }
      }
    });

    return fragment.content;
  }
}
