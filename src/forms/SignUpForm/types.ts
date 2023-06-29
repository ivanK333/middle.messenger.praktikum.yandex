import { Input, Button, Link } from '../../components';

export type Values = {
  email: string,
  login: string,
  firstName: string,
  secondName: string,
  phone: string,
  password: string,
  repeatPassword: string,
};

export type Props = {
  email: Input,
  login: Input,
  firstName: Input,
  secondName: Input,
  phone: Input,
  password: Input,
  repeatPassword: Input,
  signUp: Button,
  signIn: Link,
};
