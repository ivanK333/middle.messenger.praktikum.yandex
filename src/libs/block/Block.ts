import { v4 as makeUUID } from 'uuid';
import { EventBus } from '../event-bus';
import { BaseBlockProps, Meta, EVENTS } from './types';
import { useAccessCheck, isEqual, PlainObject } from '../../utils';

export class Block<P extends object = {}> {
  public props: BaseBlockProps<P>;

  public readonly eventBus: () => EventBus;

  private readonly _meta: Meta;

  public _element: HTMLElement;

  private readonly _id: string;

  public children: ChildNode | {};

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
      } else {
        if (Array.isArray(value)) {
          const childrenArr = [];

          value.forEach((el) => {
            if (el instanceof Block) {
              childrenArr.push(el);
            }
          });
          children[key] = childrenArr;
          props[key] = childrenArr;
          return;
        }
        props[key] = value;
      }
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
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);
    return element;
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

  private _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this.eventBus().emit(EVENTS.render);
    }
  }

  public componentDidUpdate(oldProps: P, newProps: P) {
    if (oldProps && newProps) {
      return !isEqual(oldProps as PlainObject, newProps as PlainObject);
    }

    return false;
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

    if (block) {
      this._removeEvents();
      this._element.innerHTML = '';
      this._element.appendChild(block);

      const { className } = this.props;
      if (className) {
        this._element.className = className;
      }
      this._addEvents();
    }
  }

  protected render(): DocumentFragment | void {}

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
        const childArr = [];

        component.forEach((child) => {
          if (child instanceof Block) {
            childArr.push(`<span data-id="${child.id}"></span>`);
          }
        });

        propsAndStubs[name] = childArr;
      }
      propsAndStubs[name] = `<span data-id="${component.id}"></span>`;
    });

    const fragment = document.createElement('template');

    const component = template(propsAndStubs);
    fragment.innerHTML = component;

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        console.log(this.props, this.children);
      }
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
      if (stub) {
        stub.replaceWith(child.getContent());
      }
    });

    return fragment.content;
  }
}
