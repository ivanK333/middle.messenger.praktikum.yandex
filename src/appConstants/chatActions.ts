import { ROUTES } from './routes';
import del_user from '../../static/img/del_user.svg';
import settings from '../../static/img/settings.svg';
import circle_plus from '../../static/img/circle_plus.svg';
import reject from '../../static/img/reject.svg';
import {
  HeaderCreateActiveSettingsButtonListItem,
} from '../components/HeaderChatActive/HeaderCreateActiveSettingsButton';
import { router } from '../router';

export const actions = [
  {
    src: circle_plus,
    name: 'addUser',
    children: 'Add user',
  },
  {
    src: del_user,
    name: 'deleteUser',
    children: 'Delete user',
  },
  {
    src: settings,
    name: 'settings',
    children: 'Settings',
    cb: () => router.go(ROUTES.settings),
  },
  {
    src: reject,
    name: 'deleteChat',
    children: 'Delete chat',
  },
];

export const CHAT_ACTIONS = actions.map(({
  children,
  src,
  cb,
  name,
}) => new HeaderCreateActiveSettingsButtonListItem({
  children,
  src,
  name,
  events: {
    click: cb,
  },
}));
