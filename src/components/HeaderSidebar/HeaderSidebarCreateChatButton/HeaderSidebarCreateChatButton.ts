import template from './HeaderSidebarCreateChatButton.hbs';
import styles from './styles.module.pcss';
import { Block, BaseBlockProps } from '../../../libs/block';
import { Props } from './index';
import newChat from '../../../../static/img/new_chat.svg';

export class HeaderSidebarCreateChatButton extends Block<Props> {
  constructor(props: BaseBlockProps<Props>) {
    super(props, 'button');
  }

  render() {
    const {
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: styles.button,
      img: newChat,
    });
  }
}
