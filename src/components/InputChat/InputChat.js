import template from './InputChat.hbs';
import styles from './styles.module.pcss';

export class InputChat {
  constructor(props) {
    this.props = props;
  }
  render() {
    const {
      type = 'text',
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      type,
      className: `${styles.container} ${className}`,
      classNameInput: `${styles.input} ${className}`,
      classNameImg: styles.img,
    });
  }
}