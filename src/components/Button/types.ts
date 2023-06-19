export enum View {
  ghost = 'ghost',
  default = 'default',
}

export type Props = {
  className?: string,
  view: keyof typeof View,
  children: string,
  type?: HTMLButtonElement['type'],
  name?: HTMLButtonElement['name'],
};
