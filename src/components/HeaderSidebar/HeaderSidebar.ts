import { Avatar } from '../Avatar';
import { InputChat } from '../InputChat';
import newChat from '../../../static/img/new_chat.svg';
import search from '../../../static/img/search.svg';
import template from './HeaderSidebar.hbs';
import styles from './styles.module.pcss';
import { Block, FormValidator } from '../../libs';
import { Props, Values } from '.';
import { VALIDATION_RULES } from '../../appConstants';

export class HeaderSidebar extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      search: new InputChat({ img: search, name: 'search' }),
      avatar: new Avatar({ src: '' }),
    });
  }

  componentDidMount() {
    // eslint-disable-next-line no-new
    new FormValidator<Values>({
      form: this.getContent() as HTMLFormElement,
      fields: {
        search: [VALIDATION_RULES.required],
      },
      onSubmit: (values) => console.log(values),
    });
  }

  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: `${styles.header} ${className}`,
      classNameUserInfo: styles.userInfo,
      classNameButton: styles.button,
      classNameAvatar: styles.avatar,
      classNameName: styles.name,
      img: newChat,
    });
  }
}
