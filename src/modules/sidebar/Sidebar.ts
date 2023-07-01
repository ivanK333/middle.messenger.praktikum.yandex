import template from './Sidebar.hbs';
import styles from './styles.module.pcss';
import { Props } from '.';
import { Block } from '../../libs';
import { HeaderSidebar } from '../../components';

export class Sidebar extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      header: new HeaderSidebar({ name: 'ivan' }),
    });
  }

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
