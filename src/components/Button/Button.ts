import template from './Button.hbs';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class Button extends Block<Props> {
  render() {
    const {
      view = 'default',
      type = 'button',
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      type,
      className: `${styles.button} ${styles[view]} ${className}`,
    });
  }
}
