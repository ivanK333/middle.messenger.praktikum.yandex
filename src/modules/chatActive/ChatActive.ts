import { HeaderChatActive, MessageConsole } from '../../components';
import template from './ChatActive.hbs';
import styles from './styles.module.pcss';
import { Props } from '.';
import { Block } from '../../libs';

export class ChatActive extends Block<Props> {
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
    });
  }
}
