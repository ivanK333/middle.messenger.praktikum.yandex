import template from './InputChat.hbs';
import { Props } from '.';
import styles from './styles.module.pcss';
import { Block } from '../../libs';

export class InputChat extends Block<Props> {
  render() {
    const {
      type = 'text',
      className = '',
      ...props
    } = this.props;

    this.getContent().setAttribute('id', 'input');

    return this.compile(template, {
      ...props,
      type,
      className: `${styles.container} ${className}`,
      classNameInput: styles.input,
      classNameImg: styles.img,
    });
  }
}
