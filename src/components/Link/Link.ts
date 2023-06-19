import template from './Link.hbs';
import styles from './styles.module.pcss';
import { Props } from '.';
import { Block } from '../../libs';

export class Link extends Block<Props> {
  render() {
    const {
      color = 'blue',
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      className: `${styles.link} ${styles[color]} ${className}`,
    });
  }
}
