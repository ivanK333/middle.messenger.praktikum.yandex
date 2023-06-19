export enum Color {
  red = 'red',
  blue = 'blue',
}

export type Props = {
  className?: string,
  children?: string,
  color?: keyof typeof Color,
  href: HTMLLinkElement['href'],
  target?: HTMLLinkElement['target'],
};
