import { Sidebar, ChatActive } from '../../modules';
import { Dashboard } from '../../layouts';
import template from './Chat.hbs';
import { MESSAGES } from '../../appConstants';
import { BlockWithStore } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';
import { ChatController, AuthController } from '../../controllers';
import { State } from '../../store';
import { ChatPreview, HeaderSidebar } from '../../components';

export class Chat extends BlockWithStore<Props> {
  private chatController: ChatController;

  private authController: AuthController;

  constructor(props: any) {
    super({
      ...props,
      dashboard: new Dashboard({
        sidebar: new Sidebar({
          header: new HeaderSidebar({ name: '' }),
        }),
        activeChat: new ChatActive({ messages: MESSAGES }),
      }),
    }, 'main');

    this.chatController = new ChatController();
    this.authController = new AuthController();

    this.chatController?.getChats();
    this.authController?.getUser();

    const mapStateToProps = (state: State) => ({ ...state.currentChat, ...state.chats });
    this.withStore(mapStateToProps, true);
  }

  public setCurrentValueUser() {
    const avatar = this.state?.user?.avatar;
    const header = this.props?.dashboard?.props?.sidebar?.props?.header;
    const sidebar = this.props?.dashboard?.props?.sidebar;
    const activeChat = this.props?.dashboard?.props?.activeChat;
    const headerAvatar = header?.props?.avatar?.props?.avatar;

    headerAvatar?.setProps({
      src: avatar || '',
    });

    activeChat?.props?.header?.setProps({
      name: this.state?.currentChat?.info?.title,
    });

    const chatPreviews = this.state?.chats?.map((data) => new ChatPreview({
      ...data,
      test: data.title,
      events: {
        click: () => this.chatController?.setCurrentChat(data.id),
        // click: () => console.log(id, data.id),
      },
    }));

    sidebar?.setProps({
      chatPreviews,
    });
  }

  componentDidMount() {
    console.log('componentDidMount');
    if (this.state) {
      this.setCurrentValueUser();
    }
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.main} ${className}` });
  }
}
