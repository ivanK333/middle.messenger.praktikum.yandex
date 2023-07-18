import { Input, Button } from '../../components';

export type Values = {
  id: string,
};

export type Props = {
  className?: string;
  userIdInput?: Input;
  onSubmit?: (value: Values) => void;
  button?: Button;
};
