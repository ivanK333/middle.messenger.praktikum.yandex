import template from './ButtonSend.hbs';
import arrow from '../../../static/img/arrow.svg';
import styles from './styles.module.pcss';

export class ButtonSend {
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