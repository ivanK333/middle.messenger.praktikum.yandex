import { Input, Button } from '../../components';

export type Values = {
  oldPassword: string,
  newPassword: string,
  reEnterNewPassword: string,
};

export type Props = {
  oldPassword: Input,
  newPassword: Input,
  reEnterNewPassword: Input,
  save: Button,
};
