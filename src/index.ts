import { router } from './router';
import { ROUTES } from './appConstants';
import {
  SignIn,
  SignUp,
  CreateChat,
  Settings,
  Chat,
  NotFound,
  InternalError,
  Profile,
  ChangePassword,
} from './pages';

document.addEventListener('DOMContentLoaded', () => {
  router
    .use(ROUTES.signIn, SignIn)
    .use(ROUTES.signUp, SignUp)
    .use(ROUTES.createChat, CreateChat)
    .use(ROUTES.settings, Settings)
    .use(ROUTES.chat, Chat)
    .use(ROUTES.notFound, NotFound)
    .use(ROUTES.internalError, InternalError)
    .use(ROUTES.profile, Profile)
    .use(ROUTES.changePassword, ChangePassword)
    .start();
});
