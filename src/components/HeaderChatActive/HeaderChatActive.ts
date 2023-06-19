import { Avatar } from '../Avatar';
import vite from '../../../static/img/vite.svg';
import template from './HeaderChatActive.hbs';
import { Props } from '.';
import styles from './styles.module.pcss';
import { Block } from "../../libs";

export class HeaderChatActive extends Block<Props> {

  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      className: `${styles.header} ${className}`,
      classNameName: styles.name,
      avatar: new Avatar({ src: vite }).render(),
    });
  }
}
