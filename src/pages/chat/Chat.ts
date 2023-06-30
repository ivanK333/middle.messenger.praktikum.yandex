import { Sidebar, ChatActive } from '../../modules';
import { Dashboard } from '../../layouts';
import template from './Chat.hbs';
import { CHATS, MESSAGES } from '../../appConstants';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class Chat extends Block<Props> {
  constructor() {
    super({
      dashboard: new Dashboard({
        sidebar: new Sidebar({ chats: CHATS }),
        activeChat: new ChatActive({ messages: MESSAGES }),
      }),
    }, 'main');
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.main} ${className}` });
  }
}
