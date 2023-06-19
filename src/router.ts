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
      return new SignIn().render();
    case ROUTES.signUp:
      return new SignUp().render();
    case ROUTES.profile:
      return new Profile().render();
    case ROUTES.changePassword:
      return new ChangePassword().render();
    case ROUTES.createChat:
      return new CreateChat().render();
    case ROUTES.infoChat:
      return new InfoChat().render();
    case ROUTES.chat:
      return new Chat().render();
    case ROUTES.notFound:
      return new NotFound().render();
    case ROUTES.internalError:
      return new InternalError().render();

    default:
      window.location.replace(ROUTES.signIn);
      return null;
  }
};
