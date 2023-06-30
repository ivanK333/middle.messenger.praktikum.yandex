import { Input, Button, AvatarUpload } from '../../components';

export type Values = {
  chatName: string,
};

export type Props = {
  avatar: AvatarUpload,
  chatName: Input,
  save: Button,
};
