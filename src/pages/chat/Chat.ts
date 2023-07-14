import { Sidebar, ChatActive } from '../../modules';
import { Dashboard } from '../../layouts';
import template from './Chat.hbs';
import { MESSAGES } from '../../appConstants';
import { BlockWithStore } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';
import { ChatController, AuthController } from '../../controllers';
import { State, Store } from '../../store';
import { ChatPreview, HeaderSidebar } from '../../components';
import { UserRes } from '../../api/auth';
import { ChatsRes } from '../../api/chat';

export class Chat extends BlockWithStore<Props> {
  private chatController: ChatController;

  private authController: AuthController;

  constructor() {
    super({
      dashboard: new Dashboard({
        sidebar: new Sidebar({
          chats: [],
          header: new HeaderSidebar({ name: '' }),
        }),
        activeChat: new ChatActive({ messages: MESSAGES }),
      }),
    }, 'main');

    const mapStateToProps = (state: State) => ({ ...state.user, ...state.chats });
    this.withStore(mapStateToProps);

    this.chatController = new ChatController();
    this.authController = new AuthController();

    this.chatController.getChats();
    this.authController.getUser();
  }

  public setCurrentValueUser(user: UserRes, chats: ChatsRes) {
    const {
      display_name,
      avatar,
    } = user;

    const header = this.props?.dashboard?.props?.sidebar?.props?.header;
    const headerAvatar = header?.props?.avatar?.props?.avatar;
    const sidebar = this.props?.dashboard?.props?.sidebar;

    const chatPreview = chats.map((data) => new ChatPreview({ ...data, events: { click: (e) => console.log(e.target) } }));

    sidebar?.setProps({
      chats: chatPreview || [],
    });

    headerAvatar?.setProps({
      src: avatar || '',
    });

    header?.setProps({
      name: display_name || '',
    });
  }

  componentDidMount() {
    const store = new Store();

    const { user, chats } = store.getState();
    if (user) {
      this.setCurrentValueUser(user, chats || []);
    }
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.main} ${className}` });
  }
}
