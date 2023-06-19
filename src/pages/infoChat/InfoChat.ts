import {
  Input,
  Button,
  Card,
  AvatarUpload,
  ButtonBack,
} from '../../components';
import { Slide } from '../../layouts';
import styles from './styles.module.pcss';
import { Block } from '../../libs';
import { Props } from '.';

export class InfoChat extends Block<Props> {
  constructor() {
    super({
      avatar: new AvatarUpload({ className: styles.avatar }),
      chatName: new Input({
        name: 'chat_name',
        placeholder: 'Chat name',
        className: styles.input,
        value: 'Chat name',
        disabled: true,
      }),
      create: new Button({
        view: 'default',
        children: 'Change data',
        name: 'create',
      }),
      buttonBack: new ButtonBack({}),
    });
  }

  render() {
    const content = `
    ${this.props.avatar.render()}
    ${this.props.chatName.render()}
    ${this.props.create.render()}
    `;

    return new Slide({
      children: new Card({
        children: content,
        title: 'Info chat',
      }).render(),
      buttonBack: this.props.buttonBack.render(),
    }).render();
  }
}
