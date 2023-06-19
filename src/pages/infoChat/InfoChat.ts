import {
  Input,
  Button,
  Card,
  AvatarUpload,
  ButtonBack,
} from "../../components";
import { Slide } from "../../layouts";
import styles from './styles.module.pcss';
import { Block } from "../../libs";
import { Props } from ".";

export class InfoChat extends Block<Props> {
  constructor() {
    super({
      avatar: new AvatarUpload({ className: styles.avatar }).render(),
      chatName: new Input({
        name: 'chat_name',
        placeholder: 'Chat name',
        className: styles.input,
        value: 'Chat name',
        disabled: true,
      }).render(),
      create: new Button({
        view: 'default',
        children: 'Change data',
        name: 'create',
      }).render(),
      buttonBack: new ButtonBack({}).render(),
    });
  }

  render() {
    const content = `
    ${this.props.avatar}
    ${this.props.chatName}
    ${this.props.create}
    `

    return new Slide({
      children: new Card({
        children: content,
        title: 'Info chat',
      }).render(),
      buttonBack: this.props.buttonBack,
    }).render();
  }
}


