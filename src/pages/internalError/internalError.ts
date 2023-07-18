import { Error } from '../../layouts';
import { Link } from '../../components';
import template from './InternalError.hbs';

import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';
import { router } from '../../router';

export class InternalError extends Block<Props> {
  constructor() {
    super({
      error: new Error({
        code: '500',
        title: 'We are already fixing',
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
