import { Avatar } from '../Avatar';
import { InputChat } from '../InputChat';
import search from '../../../static/img/search.svg';
import template from './HeaderSidebar.hbs';
import styles from './styles.module.pcss';
import { Block, FormValidator } from '../../libs';
import {
  Props,
  Values,
  HeaderSidebarAvatar,
  HeaderSidebarCreateChatButton,
} from '.';
import { ROUTES, VALIDATION_RULES } from '../../appConstants';
import { router } from '../../router';
import { Store } from '../../store';

export class HeaderSidebar extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      search: new InputChat({ img: search, name: 'search' }),
      avatar: new HeaderSidebarAvatar({
        avatar: new Avatar({ src: '' }),
        className: styles.avatar,
        events: {
          click: () => {
            router.go(ROUTES.profile);
          },
        },
      }),
      button: new HeaderSidebarCreateChatButton({
        events: {
          click: () => {
            router.go(ROUTES.createChat);
          },
        },
      }),
    });
  }

  componentDidMount() {
    const store = new Store();
    const { user } = store.getState();

    this.props.avatar?.props?.avatar?.setProps({
      src: user?.avatar ? user.avatar : '',
    });
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
      classNameAvatar: styles.avatar,
      classNameName: styles.name,
    });
  }
}
