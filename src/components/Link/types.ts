export enum Color {
  red = 'red',
  blue = 'blue',
}

export type Props = {
  className?: string,
  type?: HTMLButtonElement['type'],
  children?: string,
  color?: keyof typeof Color,
};
