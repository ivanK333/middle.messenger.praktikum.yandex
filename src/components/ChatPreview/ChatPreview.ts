import template from './ChatPreview.hbs';
import { Avatar } from '../Avatar';
import { Block, BaseBlockProps } from '../../libs/block';
import { truncateStringWithColon } from '../../utils';
import { Props } from '.';
import styles from './styles.module.pcss';

export class ChatPreview extends Block<Props> {
  constructor(props: BaseBlockProps<Props>) {
    super({
      ...props,
    }, 'button');
  }

  render() {
    const {
      className = '',
      last_message,
      isCurrentChat,
      ...props
    } = this.props;

    const time = last_message?.time
      ? new Date(last_message.time || '').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : undefined;

    const currentChatAvatar = props.avatar ? `https://ya-praktikum.tech/api/v2/resources${props.avatar}` : '';

    return this.compile(template, {
      ...props,
      last_message: {
        ...last_message,
        content: truncateStringWithColon(last_message?.content || '', 60),
      },
      className: `${styles.container} ${className} ${isCurrentChat ? styles.active : ''}`,
      classNameHeader: styles.header,
      classNameFooter: styles.footer,
      classNameDate: styles.date,
      classNameTitle: styles.title,
      classNameMessage: styles.message,
      classNameCount: styles.count,
      classNameWrapper: styles.wrapper,
      avatarInput: new Avatar({ src: currentChatAvatar }),
      time,
    });
  }
}
