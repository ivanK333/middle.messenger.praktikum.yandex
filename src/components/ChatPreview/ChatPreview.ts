import template from './ChatPreview.hbs';
import { Avatar } from '../Avatar';
import { Block, BaseBlockProps } from '../../libs/block';
import { Props } from '.';
import vite from '../../../static/img/vite.svg';
import styles from './styles.module.pcss';

export class ChatPreview extends Block<Props> {
  constructor(props: BaseBlockProps<Props>) {
    super({
      ...props,
    }, 'button');
  }

  componentDidMount() {
    if (this.props.test === 'Test20') {
      // console.log(this?.state?.currentChat?.info?.id);
    }
  }

  render() {
    const {
      className = '',
      last_message,
      isCurrentChat,
      id,
      ...props
    } = this.props;

    const time = last_message?.time
      ? new Date(last_message.time || '').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : undefined;

    return this.compile(template, {
      ...props,
      last_message,
      className: `${styles.container} ${className}`,
      classNameHeader: styles.header,
      classNameFooter: styles.footer,
      classNameDate: styles.date,
      classNameTitle: styles.title,
      classNameMessage: styles.message,
      classNameCount: styles.count,
      classNameWrapper: styles.wrapper,
      avatarInput: new Avatar({ src: vite }),
      time,
    });
  }
}
