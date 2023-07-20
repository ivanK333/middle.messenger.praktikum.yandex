import { Button } from '../../../components';

export type Values = {
  id: string,
};

export type Props = {
  className?: string;
  classNameText?: string;
  text?: string;
  onSubmit?: (value: Values) => void;
  button?: Button;
};
