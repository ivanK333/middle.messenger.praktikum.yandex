import {
  Input,
  Button,
  Link,
  AvatarUpload,
} from '../../components';

export type Props = {
  avatar: AvatarUpload,
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
