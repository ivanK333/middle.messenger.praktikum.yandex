import template from './Input.hbs';
import styles from './styles.module.pcss';
import { Block } from '../../libs';
import { Props } from '.';

export class Input extends Block<Props> {
  render() {
    const {
      type = 'text',
      error = '',
      className = '',
      ...props
    } = this.props;

    this.getContent().setAttribute('id', 'input');

    return this.compile(template, {
      ...props,
      type,
      className: `${styles.container} ${error ? styles.error : ''} ${className}`,
      classNamePlaceholder: styles.placeholder,
      classNameError: styles.text,
      classNameInput: styles.input,
      error,
    });
  }
}
