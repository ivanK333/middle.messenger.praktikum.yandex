import { Sidebar, ChatActive } from '../../modules';
import { Dashboard } from '../../layouts';
import template from './Chat.hbs';
import { BlockWithStore, BaseBlockProps } from '../../libs/block';
import { Props } from '.';
import styles from './styles.module.pcss';
import { ChatController, AuthController } from '../../controllers';
import { State } from '../../store';
import {
  ChatPreview,
  HeaderChatActive,
  HeaderSidebar,
  MessageConsole,
  Avatar,
} from '../../components';

export class Chat extends BlockWithStore<Props> {
  private chatController: ChatController;

  private authController: AuthController;

  constructor(props: BaseBlockProps<Props>) {
    super(props, 'main');

    this.chatController = new ChatController();
    this.authController = new AuthController();

    this.chatController?.getChats();
    this.authController?.getUser();

    const mapStateToProps = (state: State) => {
      const currentChatAvatar = state.currentChat?.info?.avatar
        ? `https://ya-praktikum.tech/api/v2/resources${state.currentChat?.info?.avatar}` : '';

      return ({
        dashboard: new Dashboard({
          sidebar: new Sidebar({
            header: new HeaderSidebar({ name: '' }),
            chats: state.chats,
          }),
          activeChat: new ChatActive({
            messageConsole: new MessageConsole({
              onSubmit: (message) => this.handleSubmitMessage(message, state?.currentChat?.info?.id),
            }),
            users: state?.currentChat?.users,
            isEmpty: !state.currentChat?.info?.title,
            messages: state.currentChat.messages,
            header: new HeaderChatActive({
              name: state.currentChat?.info?.title || '',
              avatar: new Avatar({
                src: currentChatAvatar,
              }),
            }),
          }),
        }),
      });
    };
    this.withStore(mapStateToProps);
  }

  private handleSubmitMessage(message: string, id?: number) {
    if (id) {
      this.chatController.sendMessage(message, id);
    }
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

    const id = this.state?.currentChat?.info?.id;
    activeChat?.setProps({
      messageConsole: new MessageConsole({
        onSubmit: (message) => this.handleSubmitMessage(message, id),
      }),
    });

    const chatPreviews = this.state?.chats?.map((data) => new ChatPreview({
      ...data,
      isCurrentChat: data.id === this.state?.currentChat?.info?.id,
      events: {
        click: () => {
          if (data.id !== this.state?.currentChat?.info?.id) {
            this.chatController?.setCurrentChat(data.id);
          }
        },
      },
    }));

    sidebar?.setProps({
      chatPreviews,
    });
  }

  componentDidMount() {
    if (this.state) {
      this.setCurrentValueUser();
    }
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.main} ${className}` });
  }
}
