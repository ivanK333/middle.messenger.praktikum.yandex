import { InputChat } from '../InputChat';
import { ButtonSend } from '../ButtonSend';
import staple from '../../../static/img/staple.svg';
import template from './MessageConsole.hbs';
import styles from './styles.module.pcss';
import { Props } from ".";
import { Block } from "../../libs";

export class MessageConsole extends Block<Props> {
  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      className: `${styles.messageConsole} ${className}`,
      classNameImg: styles.img,
      input: new InputChat({
        placeholder: 'Message',
        className: styles.input,
        name: 'message',
        value: ''
      }).render(),
      img: staple,
      button: new ButtonSend({}).render(),
    });
  }
}
