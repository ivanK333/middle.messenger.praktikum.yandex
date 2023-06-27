import { HeaderChatActive, MessageConsole } from '../../components';
import template from './ChatActive.hbs';
import styles from './styles.module.pcss';
import { Props } from '.';
import { Block } from '../../libs';

export class ChatActive extends Block<Props> {
  constructor(props) {
    super({
      ...props,
      header: new HeaderChatActive({ name: 'Vadim' }),
      messageConsole: new MessageConsole({}),
    });
  }

  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: `${styles.chatActive} ${className}`,
      classNameChat: styles.chat,
    });
  }
}
