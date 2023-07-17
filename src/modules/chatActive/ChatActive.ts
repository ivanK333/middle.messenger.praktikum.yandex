import {
  HeaderChatActive,
  MessageConsole,
  Modal,
} from '../../components';
import template from './ChatActive.hbs';
import styles from './styles.module.pcss';
import { Props, ModalNames } from '.';
import { BlockWithStore } from '../../libs';
import { ModalForm } from '../../forms';
import { DelChatModal } from '../modals';
import { State } from '../../store';

export class ChatActive extends BlockWithStore<Props> {
  constructor(props: Props) {
    super({
      ...props,
      header: new HeaderChatActive({ name: 'Vadim' }),
      messageConsole: new MessageConsole({}),
      addUser: new Modal({
        name: 'addChat',
        title: 'Add user',
        children: new ModalForm({}),
      }),
      deleteUser: new Modal({
        name: 'deleteUser',
        title: 'Delete user',
        children: new ModalForm({}),
      }),
      deleteChat: new Modal({
        name: 'deleteChat',
        title: 'Delete chat',
        children: new DelChatModal({
          text: 'Are you sure you want to delete the chat room?',
        }),
      }),
    });

    const mapStateToProps = (state: State) => (state);
    this.withStore(mapStateToProps);
  }

  componentDidMount() {
    this.modalButtons();
  }

  modalButtons() {
    const mapper: Record<keyof typeof ModalNames, Modal> = {
      addUser: this.props.addUser as Modal,
      deleteUser: this.props.deleteUser as Modal,
      deleteChat: this.props.deleteChat as Modal,
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
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: `${styles.chatActive} ${className}`,
      classNameChat: styles.chat,
    });
  }
}
