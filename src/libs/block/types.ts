import { Block } from '.';

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type BaseBlockProps<P extends Record<string, unknown>> = P & {
  events?: PartialRecord<keyof WindowEventMap, (e: unknown) => void>,
  className?: string,
  styles?: Record<string, string>,
};

export type Meta<P extends object = {}> = {
  tagName: keyof HTMLElementTagNameMap,
  props: P,
};

export enum EVENTS {
  init = 'init',
  cdm = 'component-did-mount',
  cdu = 'component-did-update',
  render = 'render',
  mounted = 'mounted',
}

export interface BlockConstructor {
  new(...args: any[]): Block
}
