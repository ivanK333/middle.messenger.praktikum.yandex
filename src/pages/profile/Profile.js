import {
  Input,
  Button,
  Link,
  Card,
  AvatarUpload,
  ButtonBack,
} from "../../components";
import { ROUTES } from "../../appConstants";
import { Slide } from "../../layouts";
import styles from './styles.module.pcss';

export class Profile {
  constructor() {
    this.content = {
      avatar: new AvatarUpload({}).render(),
      email: new Input({
        name: 'email',
        placeholder: 'email',
        value: 'qwe@qwe.com',
        disabled: true,
      }).render(),
      login: new Input({
        name: 'login',
        placeholder: 'Login',
        value: 'IvanIvanov',
        disabled: true,
      }).render(),
      firstName: new Input({
        name: 'first_name',
        placeholder: 'First name',
        value: 'Ivan',
        disabled: true,
      }).render(),
      secondName: new Input({
        name: 'second_name',
        placeholder: 'Second name',
        value: 'Ivanov',
        disabled: true,
      }).render(),
      phone: new Input({
        name: 'phone',
        placeholder: 'Phone',
        value: '234342342342',
        disabled: true,
      }).render(),
      chatName: new Input({
        name: 'chat_name',
        placeholder: 'Chat name',
        value: 'Ivan_chat_name',
        disabled: true,
      }).render(),
      changeData: new Button({
        view: 'default',
        children: 'Change data',
        name: 'change_data',
      }).render(),
      changePassword: new Link({
        children: 'Change password',
        href: '#',
      }).render(),
      logOut: new Link({
        children: 'Log out',
        color: 'red',
        href: ROUTES.signIn,
      }).render(),
    }
    this.buttonBack = new ButtonBack({}).render();
  }

  render() {
    const content = `
    ${this.content.avatar}
    ${this.content.email}
    ${this.content.login}
    ${this.content.firstName}
    ${this.content.secondName}
    ${this.content.phone}
    ${this.content.chatName}
    ${this.content.changeData}
    ${this.content.changePassword}
    ${this.content.logOut}
    `

    return new Slide({
      children: new Card({
        children: content,
        classNameForm: styles.card,
        buttonBack: this.buttonBack,
      }).render(),
      buttonBack: this.buttonBack,
    }).render();
  }
}


