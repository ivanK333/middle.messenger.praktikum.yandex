import {
  Input,
  Button,
  Link,
  AvatarUpload,
} from '../../components';

export type Values = {
  email: string,
  login: string,
  first_name: string,
  second_name: string,
  phone: string,
  display_name: string,
};

export type Props = {
  avatar: AvatarUpload,
  email: Input,
  login: Input,
  first_name: Input,
  second_name: Input,
  phone: Input,
  display_name: Input,
  save: Button,
  change_password: Link,
  log_out: Link,
};
