import { Input, Button, Link } from '../../components';

export type Values = {
  email: string,
  login: string,
  first_name: string,
  second_name: string,
  phone: string,
  password: string,
  repeat_password: string,
};

export type Props = {
  email: Input,
  login: Input,
  first_name: Input,
  second_name: Input,
  phone: Input,
  password: Input,
  repeat_password: Input,
  sign_up: Button,
  sign_in: Link,
};
