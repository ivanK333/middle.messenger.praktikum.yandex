import template from './Avatar.hbs';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class Avatar extends Block<Props> {
  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: `${styles.avatar} ${className}`,
      classNameImg: styles.img,
    });
  }
}
