import {
  Input,
  Button,
  Link,
  AvatarUpload,
} from '../../components';

export type Values = {
  email: string,
  login: string,
  firstName: string,
  secondName: string,
  phone: string,
  chatName: string,
};

export type Props = {
  avatar: AvatarUpload,
  email: Input,
  login: Input,
  firstName: Input,
  secondName: Input,
  phone: Input,
  chatName: Input,
  save: Button,
  changePassword: Link,
  logOut: Link,
};
