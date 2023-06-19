import { Error } from '../../layouts';
import { Link } from '../../components';

import { ROUTES } from '../../appConstants';

export class InternalError {
  render() {
    return new Error({
      code: '500',
      title: 'We are already fixing',
      link: new Link({
        children: 'Back to Chats',
        href: ROUTES.chat,
      }).render(),
    }).render();
  }
}
