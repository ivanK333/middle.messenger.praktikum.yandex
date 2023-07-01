import { Input, Button, Link } from '../../components';

export type Values = {
  password: string,
  login: string
};

export type Props = {
  login: Input,
  password: Input,
  signIn: Button,
  signUp: Link,
};
