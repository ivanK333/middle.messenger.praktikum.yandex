import { Avatar } from '../../components';
import vite from '../../../static/img/vite.svg';
import template from './HeaderChatActive.hbs';
import styles from './styles.module.pcss';

export class HeaderChatActive {
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
      classNameName: styles.name,
      avatar: new Avatar({ src: vite }).render(),
    });
  }
}
