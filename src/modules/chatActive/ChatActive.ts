import {
  AvatarUpload,
  Message,
  Modal,
  Input,
} from '../../components';
import template from './ChatActive.hbs';
import styles from './styles.module.pcss';
import { Props, ModalNames } from '.';
import { BlockWithStore } from '../../libs';
import { ModalForm } from '../../forms';
import { DelChatModal, ChatSettingsModal } from '../modals';
import { ChatController } from '../../controllers';
import { AddUserChatReq } from '../../api/chat';

export class ChatActive extends BlockWithStore<Props> {
  constructor(props: Props) {
    const chatController = new ChatController();
    super({
      ...props,
      addUser: new Modal({
        name: 'addUserToChat',
        title: 'Add user',
        children: new ModalForm({
          onSubmit: (values) => {
            const id = +values.id;
            const users = this.state?.currentChat?.users.map((user) => user.id);
            const isPresent = users.includes(id);
            if (!isPresent) {
              const data = {
                users: [...users, id],
                chatId: this.state?.currentChat?.info?.id,
              };

              chatController.addUserToChat(data as AddUserChatReq);
            }
          },
        }),
      }),
      deleteUser: new Modal({
        name: 'deleteUser',
        title: 'Delete user',
        children: new ModalForm({
          onSubmit: (values) => {
            const id = +values.id;
            const users = this.state?.currentChat?.users.map((user) => user.id);
            const isPresent = users.includes(id);
            if (isPresent && this.state?.currentChat?.info?.id) {
              chatController.deleteUserFromChat(this.state?.currentChat?.info?.id, id);
            }
          },
        }),
      }),
      deleteChat: new Modal({
        name: 'deleteChat',
        title: 'Delete chat',
        children: new DelChatModal({
          text: 'Are you sure you want to delete the chat room?',
          onSubmit: () => {
            const id = this.state?.currentChat?.info?.id;

            if (id) {
              chatController.deleteChat(id);
            }
          },
        }),
      }),
      chatSettings: new Modal({
        name: 'chatSettings',
        title: 'Chat settings',
        children: new ChatSettingsModal({
          avatar: new AvatarUpload({
            src: props.header?.props.avatar?.props.src ? props.header?.props.avatar?.props.src : '',
            events: {
              change: (event: Event) => {
                if (this.state?.currentChat?.info?.id) {
                  const file = (event.target as HTMLInputElement)?.files?.[0];
                  chatController.updateAvatar(file, this.state?.currentChat?.info?.id);
                }
              },
            },
            className: styles.avatarUpload,
          }),
          users: props.users,
          chatNameInput: new Input({
            placeholder: 'Chat name',
            name: 'chatName',
            disabled: true,
            value: props.header?.props.name || '',
          }),
        }),
      }),
    });
  }

  componentDidMount() {
    this.modalButtons();
  }

  modalButtons() {
    const mapper: Record<keyof typeof ModalNames, Modal> = {
      addUser: this.props.addUser as Modal,
      deleteUser: this.props.deleteUser as Modal,
      deleteChat: this.props.deleteChat as Modal,
      chatSettings: this.props.chatSettings as Modal,
    };

    function handleOpen(e: Event) {
      e.preventDefault();
      const anchor = e.target as HTMLElement;
      const name = anchor.getAttribute('data-modal-open') as keyof typeof ModalNames;
      if (mapper[name]) {
        mapper[name].open();
      }
    }

    const buttons = this._element.querySelectorAll('[data-modal-open]');

    buttons.forEach((btn) => btn.removeEventListener(
      'click',
      (e) => handleOpen(e),
    ));
    buttons.forEach((btn) => btn.addEventListener(
      'click',
      (e) => handleOpen(e),
    ));
  }

  render() {
    const {
      className = '',
      messages,
      messageConsole,
      header,
      isEmpty,
      ...props
    } = this.props;

    const messageComponents = messages?.map((data) => new Message(data));

    return this.compile(template, {
      ...props,
      isEmpty,
      className: `${styles.chatActive} ${className}`,
      classNameChat: `${!isEmpty ? styles.chat : styles.chatHide}`,
      classNameEmpty: styles.titleEmpty,
      messageComponents,
      header: this.props?.header?.props.name ? header : undefined,
      messageConsole: this.props?.header?.props.name ? messageConsole : undefined,
    });
  }
}
