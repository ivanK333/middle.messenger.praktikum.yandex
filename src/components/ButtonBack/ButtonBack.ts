import template from './ButtonBack.hbs';
import arrow from '../../../static/img/arrow.svg';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class ButtonBack extends Block<Props> {
  render() {
    const {
      type = 'button',
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      type,
      className: `${styles.button} ${className}`,
      src: arrow,
    });
  }
}
