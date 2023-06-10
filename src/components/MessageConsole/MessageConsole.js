import { InputChat, ButtonSend } from '../../components';
import staple from '../../../static/img/staple.svg';
import template from './MessageConsole.hbs';
import styles from './styles.module.pcss';

export class MessageConsole {
  constructor(props) {
    this.props = props;
  }

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
      }).render(),
      img: staple,
      button: new ButtonSend({}).render(),
    });
  }
}
