import template from './ButtonBack.hbs';
import arrow from '../../../static/img/arrow.svg';
import styles from './styles.module.pcss';

export class ButtonBack {
  constructor(props) {
    this.props = props;
  }
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