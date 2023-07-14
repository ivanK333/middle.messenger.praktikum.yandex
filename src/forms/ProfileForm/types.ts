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
  avatarInput: AvatarUpload,
  emailInput: Input,
  loginInput: Input,
  firstNameInput: Input,
  secondNameInput: Input,
  phoneInput: Input,
  displayNameInput: Input,
  save: Button,
  changePasswordInput: Link,
  logOut: Link,
};
