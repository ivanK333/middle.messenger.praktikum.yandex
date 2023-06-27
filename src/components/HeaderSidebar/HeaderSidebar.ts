import { Avatar } from '../Avatar';
import { InputChat } from '../InputChat';
import newChat from '../../../static/img/new_chat.svg';
import search from '../../../static/img/search.svg';
import template from './HeaderSidebar.hbs';
import styles from './styles.module.pcss';
import { Block } from '../../libs';
import { Props } from '.';

export class HeaderSidebar extends Block<Props> {
  constructor(props) {
    super({
      ...props,
      search: new InputChat({ img: search, name: 'search', value: '' }),
      avatar: new Avatar({ src: '' }),
    });
  }

  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: `${styles.header} ${className}`,
      classNameUserInfo: styles.userInfo,
      classNameButton: styles.button,
      classNameAvatar: styles.avatar,
      classNameName: styles.name,
      img: newChat,
    });
  }
}
