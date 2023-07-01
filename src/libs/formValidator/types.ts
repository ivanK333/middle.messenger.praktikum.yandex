import { Rule } from '../../appConstants/validation';

export type Props<V> = {
  form: HTMLFormElement;
  fields: Record<keyof V, Rule[]>,
  onSubmit: (values: V) => void,
};

export type InputContainer = HTMLDivElement;
