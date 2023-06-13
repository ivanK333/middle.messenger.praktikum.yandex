import { Avatar, InputChat } from '../../components';
import newChat from '../../../static/img/new_chat.svg';
import search from '../../../static/img/search.svg';
import template from './HeaderSidebar.hbs';
import styles from './styles.module.pcss';

export class HeaderSidebar {
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
      className: `${styles.header} ${className}`,
      classNameUserInfo: styles.userInfo,
      classNameButton: styles.button,
      classNameAvatar: styles.avatar,
      classNameName: styles.name,
      avatar: new Avatar({}).render(),
      img: newChat,
      search: new InputChat({ img: search, name: 'search' }).render(),
    });
  }
}
