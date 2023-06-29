export type Props<V> = {
  form: HTMLFormElement;
  onSubmit: (values: V) => void,
};

export type InputContainer = HTMLDivElement;
