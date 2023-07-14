import { v4 as makeUUID } from 'uuid';
import { EventBus } from '../event-bus';
import {
  BaseBlockProps,
  Meta,
  EVENTS,
} from './types';
import { useAccessCheck, isEqual, cloneDeep } from '../../utils';

export class Block<P extends Record<string, unknown> = {}> {
  public props: BaseBlockProps<P>;

  public readonly eventBus: () => EventBus;

  private readonly _meta: Meta;

  public _element: HTMLElement;

  private readonly _id: string;

  constructor(props: BaseBlockProps<P>, tagName: keyof HTMLElementTagNameMap = 'div') {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };

    this._id = makeUUID();

    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(EVENTS.init);
  }

  get id(): string | null {
    return this._id;
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

  private _createDocumentElement(tagName: keyof HTMLElementTagNameMap) {
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

  private _componentDidUpdate(prevProps: P, newProps: P) {
    const response = this.componentDidUpdate(prevProps, newProps);

    if (response) {
      this.eventBus().emit(EVENTS.render);
    }
  }

  public componentDidUpdate(prevProps: P, nextProps: P) {
    if (prevProps && nextProps) {
      return !isEqual(prevProps, nextProps);
    }

    return true;
  }

  public setProps = (nextProps: Partial<BaseBlockProps<P>>) => {
    if (!nextProps) {
      return;
    }

    const props = cloneDeep(this.props);
    const newProps = cloneDeep({ ...this.props, ...nextProps });
    Object.assign(this.props, nextProps);
    this.eventBus().emit(EVENTS.cdu, props, newProps);
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
    this.eventBus().emit(EVENTS.cdm);
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: BaseBlockProps<P>) {
    return new Proxy(props, {
      get(target, prop) {
        const isAccessGranted = useAccessCheck(prop);
        if (!isAccessGranted) {
          throw new Error('No access');
        }

        const value = target[prop as keyof BaseBlockProps<P>];

        return typeof value === 'function' ? value.bind(target) : value;
        return null;
      },

      set(target, prop, value) {
        const isAccessGranted = useAccessCheck(prop);

        if (!isAccessGranted) {
          throw new Error('No access');
        }
        // eslint-disable-next-line no-param-reassign
        target[prop as keyof P] = value;
        return true;
      },

      deleteProperty() {
        throw new Error('Property cannot be deleted');
      },
    });
  }

  private _removeEvents() {
    const { events } = this.props;
    if (!events) return;
    Object.keys(events).forEach((name) => {
      const eventListenerObject = events[name as keyof WindowEventMap] as EventListenerOrEventListenerObject;

      this._element.removeEventListener(name, eventListenerObject);
    });
  }

  private _addEvents() {
    const { events } = this.props;
    if (!events) return;
    Object.keys(events).forEach((name) => {
      const eventListenerObject = events[name as keyof WindowEventMap] as EventListenerOrEventListenerObject;

      this._element.addEventListener(name, eventListenerObject);
    });
  }

  protected compile(template: (p: Record<keyof BaseBlockProps<P>, unknown>) => string, p: BaseBlockProps<P>) {
    Object.assign(this.props, p);

    const children: Block<P>[] | HTMLSpanElement = [];
    const props: Record<keyof BaseBlockProps<P>, unknown> = p;

    Object.keys(props).forEach((key) => {
      if (props[key] instanceof Block) {
        children.push(props[key] as Block<P>);
        props[key as keyof P] = `<span data-id="${(props[key] as Block<P>).id}"></span>`;
      }

      if (Array.isArray(props[key])) {
        const propsArr = props[key] as Block<P>[] | string[];
        propsArr.forEach((el, index) => {
          if (el instanceof Block) {
            children.push(el);
            propsArr[index] = `<span data-id="${((propsArr[index]) as Block<P>).id}"></span>`;
          }
        });
      }
    });

    const fragment = document.createElement('template');

    fragment.innerHTML = template(props);

    children.forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`) as HTMLTemplateElement;

      if (stub) {
        stub.replaceWith(child.getContent());
      }
    });

    return fragment.content;
  }
}
