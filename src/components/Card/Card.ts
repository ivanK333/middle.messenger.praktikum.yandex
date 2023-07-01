import template from './Card.hbs';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class Card extends Block<Props> {
  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: `${styles.container} ${className}`,
      classNameTitle: `${styles.title}`,
    });
  }
}
