import { Input, Button, AvatarUpload } from '../../components';

export type Values = {
  display_name: string,
};

export type Props = {
  avatarInput: AvatarUpload,
  display_name: Input,
  save: Button,
};
