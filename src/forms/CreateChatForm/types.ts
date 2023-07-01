import { Input, Button, AvatarUpload } from '../../components';

export type Values = {
  display_name: string
};

export type Props = {
  avatar: AvatarUpload,
  display_name: Input,
  create: Button,
};
