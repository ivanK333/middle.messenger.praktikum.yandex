import { HeaderChatActive, MessageConsole } from '../../components';
import { MESSAGES } from '../../appConstants';
import template from './ChatActive.hbs';
import styles from './styles.module.pcss';

export class ChatActive {
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
      className: `${styles.chatActive} ${className}`,
      classNameChat: styles.chat,
      header: new HeaderChatActive({ name: 'Vadim' }).render(),
      messageConsole: new MessageConsole({}).render(),
      messages: MESSAGES,
    });
  }
}
