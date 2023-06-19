import template from './Sidebar.hbs';
import styles from './styles.module.pcss';
import { Props } from '.';
import { Block } from '../../libs';
import { HeaderSidebar } from '../../components';

export class Sidebar extends Block<Props> {
  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      className: `${styles.sidebar} ${className}`,
      classNameChats: `${styles.chats} ${className}`,
      header: new HeaderSidebar({ name: 'ivan' }).render(),
    });
  }
}
