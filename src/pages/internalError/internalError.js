import { Error } from "../../layouts";
import { Link } from "../../components";

import { ROUTES } from "../../appConstants/index.js";

export class InternalError {
  constructor(props) {
    this.props = props;
  }

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


