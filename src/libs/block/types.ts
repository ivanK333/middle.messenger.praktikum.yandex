export type BaseBlockProps<P> = P & {
  className?: string,
  styles?: Record<string, string>,
};

export type Meta<P extends object = {}> = {
  tagName: keyof HTMLElementTagNameMap,
  props: P,
};
