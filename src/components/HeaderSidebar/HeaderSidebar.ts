import { Avatar } from '../Avatar';
import { InputChat } from '../InputChat';
import search from '../../../static/img/search.svg';
import template from './HeaderSidebar.hbs';
import styles from './styles.module.pcss';
import { BlockWithStore, FormValidator } from '../../libs';
import {
  Props,
  Values,
  HeaderSidebarAvatar,
  HeaderSidebarCreateChatButton,
} from '.';
import { ROUTES, VALIDATION_RULES } from '../../appConstants';
import { router } from '../../router';
import { State } from '../../store';

export class HeaderSidebar extends BlockWithStore<Props> {
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

    const mapStateToProps = (state: State) => state;
    this.withStore(mapStateToProps);
  }

  componentDidMount() {
    const store = this.store?.getState();

    this.props.avatar?.setProps({
      name: store?.user?.display_name ? store?.user.display_name : '',
    });
    this.props.avatar?.props?.avatar?.setProps({
      src: store?.user?.avatar ? store?.user.avatar : '',
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
