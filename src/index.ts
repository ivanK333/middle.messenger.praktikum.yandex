import { router } from './router';
import { ROUTES } from './appConstants';
import {
  SignIn,
  SignUp,
  CreateChat,
  Chat,
  NotFound,
  InternalError,
  Settings,
  ChangePassword,
} from './pages';

document.addEventListener('DOMContentLoaded', () => {
  router
    .use(ROUTES.notFound, NotFound)
    .use(ROUTES.internalError, InternalError)
    .use(ROUTES.signIn, SignIn)
    .use(ROUTES.signUp, SignUp)
    .use(ROUTES.createChat, CreateChat, true)
    .use(ROUTES.chat, Chat, true)
    .use(ROUTES.settings, Settings, true)
    .use(ROUTES.changePassword, ChangePassword, true)
    .start();
});
