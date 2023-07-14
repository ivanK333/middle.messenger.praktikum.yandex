import template from './Sidebar.hbs';
import styles from './styles.module.pcss';
import { Props } from '.';
import { Block } from '../../libs';

export class Sidebar extends Block<Props> {
  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: `${styles.sidebar} ${className}`,
      classNameChats: `${styles.chats} ${className}`,
    });
  }
}
