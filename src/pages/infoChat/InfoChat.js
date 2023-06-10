import {
  Input,
  Button,
  Card,
  AvatarUpload,
  ButtonBack,
} from "../../components";
import { Slide } from "../../layouts";
import styles from './styles.module.pcss';

export class InfoChat {
  constructor() {
    this.content = {
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
    }
    this.buttonBack = new ButtonBack({}).render();
  }

  render() {
    const content = `
    ${this.content.avatar}
    ${this.content.chatName}
    ${this.content.create}
    `

    return new Slide({
      children: new Card({
        children: content,
        buttonBack: this.buttonBack,
        title: 'Info chat',
      }).render(),
      buttonBack: this.buttonBack,
    }).render();
  }
}


