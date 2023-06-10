import template from './Sidebar.hbs';
import { CHATS } from '../../appConstants';
import styles from './styles.module.pcss';

export class Sidebar {
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
      className: `${styles.sidebar} ${className}`,
      classNameChats: `${styles.chats} ${className}`,
      chats: CHATS,
    });
  }
}
