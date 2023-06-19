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

export class CreateChat extends Block<Props> {
  constructor() {
    super({
      avatar: new AvatarUpload({ className: styles.avatar }).render(),
      chatName: new Input({
        name: 'chat_name',
        placeholder: 'Chat name',
        className: styles.input,
        value: '',
      }).render(),
      create: new Button({
        view: 'default',
        children: 'Create',
        name: 'create',
      }).render(),
      buttonBack: new ButtonBack({}).render(),
    })
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
        title: 'Create chat',
      }).render(),
      buttonBack: this.props.buttonBack,
    }).render();
  }
}


