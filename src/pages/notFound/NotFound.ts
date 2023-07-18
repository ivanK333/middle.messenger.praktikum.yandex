import { Error } from '../../layouts';
import { Link } from '../../components';
import template from './NotFound.hbs';
import { Props } from '.';

import { Block } from '../../libs';
import styles from './styles.module.pcss';
import { router } from '../../router';

export class NotFound extends Block<Props> {
  constructor() {
    super({
      error: new Error({
        code: '404',
        title: 'Wrong place',
        link: new Link({
          children: 'Back to Chats',
          events: {
            click: () => router.back(-2),
          },
        }),
      }),
    });
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: styles.main });
  }
}
