import template from './Test.hbs';
import { Block } from '../../libs';
import { Props } from '.';

import styles from './styles.module.pcss';
import { Button } from '../../components';

export class Test extends Block<Props> {
  constructor() {
    super({
      button: new Button({
        type: 'button',
        children: 'fetch',
        events: {
          // eslint-disable-next-line consistent-return
          click: async () => {},
        },
      }),
    });
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.main} ${className}` });
  }
}
