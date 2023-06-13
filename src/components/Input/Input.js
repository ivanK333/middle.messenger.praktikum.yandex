import template from './Input.hbs';
import styles from './styles.module.pcss';

export class Input  {
  constructor(props) {
    this.props = props;
  }
  render() {
    const {
      type = 'text',
      error = '',
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      type,
      className: `${styles.container} ${className}`,
      classNamePlaceholder: `${styles.placeholder} ${error ? styles.errorPlaceholder : ''}`,
      classNameError: `${styles.text} ${error ? styles.errorText : ''}`,
      classNameInput: `${styles.input} ${error ? styles.errorInput : ''}`,
      error,
    });
  }
}
