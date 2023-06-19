import { Error } from "../../layouts";
import { Link } from "../../components";

import { ROUTES } from "../../appConstants";

export class NotFound {
  render() {

    return new Error({
      code: '404',
      title: 'Wrong place',
      link: new Link({
        children: 'Back to Chats',
        href: ROUTES.chat,
      }).render(),
    }).render();
  }
}


