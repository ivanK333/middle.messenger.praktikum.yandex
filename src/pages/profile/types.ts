import {
  Input,
  Button,
  Link,
  AvatarUpload,
  ButtonBack,
} from '../../components';

export type Props = {
  avatar: AvatarUpload,
  email: Input,
  login: Input,
  firstName: Input,
  secondName: Input,
  phone: Input,
  chatName: Input,
  changeData: Button,
  changePassword: Link,
  logOut: Link,
  buttonBack: ButtonBack,
};
