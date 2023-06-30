import {
  ChangePasswordForm,
  CreateChatForm,
  SignInForm,
  SignUpForm,
  InfoChatForm,
  ProfileForm,
} from '../../forms';

export type Props = {
  className?: string,
  classNameTitle?: string,
  title?: string,
  children: ChangePasswordForm | CreateChatForm | SignInForm | SignUpForm | InfoChatForm | ProfileForm,
};
