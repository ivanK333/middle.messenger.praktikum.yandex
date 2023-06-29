import {
  ChangePassword,
  Profile,
  SignIn,
  SignUp,
  CreateChat,
  InfoChat,
  Chat,
  NotFound,
  InternalError,
} from '../../pages';

export type Link = {
  href: string,
  title: string,
};

export type Children = ChangePassword | Profile | SignIn | SignUp | CreateChat | InfoChat | Chat | NotFound | InternalError;

export type Props = {
  children: Children,
  links?: Link[],
  classNameHeader?: string,
  classNameNavList?: string,
  classNameNav?: string,
};
