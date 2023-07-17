import { Avatar } from '../Avatar';
import vite from '../../../static/img/vite.svg';
import template from './HeaderChatActive.hbs';
import { Props, HeaderCreateActiveSettingsButton } from '.';
import styles from './styles.module.pcss';
import { Block } from '../../libs';
import { CHAT_ACTIONS } from '../../appConstants';

export class HeaderChatActive extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      avatar: new Avatar({ src: vite }),
      setting: new HeaderCreateActiveSettingsButton({ items: CHAT_ACTIONS }),
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
      classNameName: styles.name,
      classNameNameAvatar: styles.avatar,
    });
  }
}
