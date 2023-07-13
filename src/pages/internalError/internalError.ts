import { Error } from '../../layouts';
import { Link } from '../../components';
import template from './InternalError.hbs';

import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class InternalError extends Block<Props> {
  constructor() {
    super({
      error: new Error({
        code: '500',
        title: 'We are already fixing',
        link: new Link({
          children: 'Back to Chats',
        }),
      }),
    });
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: styles.main });
  }
}
