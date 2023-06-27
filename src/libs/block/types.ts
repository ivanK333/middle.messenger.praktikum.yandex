export type BaseBlockProps<P> = P & {
  events?: Record<keyof WindowEventMap, (e: any) => any>,
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
