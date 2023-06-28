import { ROUTES } from './appConstants';
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
  Test,
} from './pages';

export const router = () => {
  switch (window.location.pathname) {
    case ROUTES.signIn:
      return new SignIn();
    case ROUTES.signUp:
      return new SignUp();
    case ROUTES.profile:
      return new Profile();
    case ROUTES.changePassword:
      return new ChangePassword();
    case ROUTES.createChat:
      return new CreateChat();
    case ROUTES.infoChat:
      return new InfoChat();
    case ROUTES.chat:
      return new Chat();
    case ROUTES.notFound:
      return new NotFound();
    case ROUTES.internalError:
      return new InternalError();
    case ROUTES.test:
      return new Test();

    default:
      window.location.replace(ROUTES.signIn);
      return null;
  }
};
