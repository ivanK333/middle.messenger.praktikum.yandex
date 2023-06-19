import { Avatar } from '../Avatar';
import { InputChat } from '../InputChat';
import newChat from '../../../static/img/new_chat.svg';
import search from '../../../static/img/search.svg';
import template from './HeaderSidebar.hbs';
import styles from './styles.module.pcss';
import { Block } from '../../libs';
import { Props } from '.';

export class HeaderSidebar extends Block<Props> {
  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      className: `${styles.header} ${className}`,
      classNameUserInfo: styles.userInfo,
      classNameButton: styles.button,
      classNameAvatar: styles.avatar,
      classNameName: styles.name,
      avatar: new Avatar({ src: '' }).render(),
      img: newChat,
      search: new InputChat({ img: search, name: 'search', value: '' }).render(),
    });
  }
}
