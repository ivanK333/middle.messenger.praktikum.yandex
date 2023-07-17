import {
  ChangePasswordForm,
  CreateChatForm,
  SignInForm,
  SignUpForm,
  SettingsForm,
  ProfileForm,
} from '../../forms';

export type Props = {
  className?: string,
  classNameTitle?: string,
  title?: string,
  children: ChangePasswordForm | CreateChatForm | SignInForm | SignUpForm | SettingsForm | ProfileForm,
};
