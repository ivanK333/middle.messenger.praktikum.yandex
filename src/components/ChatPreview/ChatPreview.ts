import template from './ChatPreview.hbs';
import { Avatar } from '../Avatar';
import { Block } from '../../libs';
import { Props } from '.';
import vite from '../../../static/img/vite.svg';
import styles from './styles.module.pcss';

export class ChatPreview extends Block<Props> {
  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      className: `${styles.container} ${className}`,
      classNameHeader: styles.header,
      classNameFooter: styles.footer,
      classNameDate: styles.date,
      classNameTitle: styles.title,
      classNameMessage: styles.message,
      classNameCount: styles.count,
      classNameWrapper: styles.wrapper,
      avatar: new Avatar({ src: vite }).render(),
    });
  }
}
