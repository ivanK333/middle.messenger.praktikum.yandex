import { InputChat } from '../InputChat';
import { ButtonSend } from '../ButtonSend';
import staple from '../../../static/img/staple.svg';
import template from './MessageConsole.hbs';
import styles from './styles.module.pcss';
import { Props } from '.';
import { Block } from '../../libs';

export class MessageConsole extends Block<Props> {
  constructor(props) {
    super({
      ...props,
      input: new InputChat({
        placeholder: 'Message',
        className: styles.input,
        name: 'message',
      }),
      button: new ButtonSend({}),
    }, 'form');
  }

  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: `${styles.messageConsole} ${className}`,
      classNameImg: styles.img,
      img: staple,
    });
  }
}
