import { Input, Button, Link } from '../../components';

export type Props = {
  event: Record<keyof WindowEventMap, (e: any) => any>,
  login: Input,
  password: Input,
  signIn: Button,
  signUp: Link,
};
