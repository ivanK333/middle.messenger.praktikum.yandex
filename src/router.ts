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

    default:
      window.location.replace(ROUTES.signIn);
      return new SignIn();
  }
};
