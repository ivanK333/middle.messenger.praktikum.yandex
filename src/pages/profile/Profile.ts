import {
  Input,
  Button,
  Link,
  Card,
  AvatarUpload,
  ButtonBack,
} from '../../components';
import { ROUTES } from '../../appConstants';
import { Slide } from '../../layouts';
import { Props } from '.';
import styles from './styles.module.pcss';
import { Block } from '../../libs';

export class Profile extends Block<Props> {
  constructor() {
    super({
      avatar: new AvatarUpload({}),
      email: new Input({
        name: 'email',
        placeholder: 'email',
        value: 'qwe@qwe.com',
        disabled: true,
      }),
      login: new Input({
        name: 'login',
        placeholder: 'Login',
        value: 'IvanIvanov',
        disabled: true,
      }),
      firstName: new Input({
        name: 'first_name',
        placeholder: 'First name',
        value: 'Ivan',
        disabled: true,
      }),
      secondName: new Input({
        name: 'second_name',
        placeholder: 'Second name',
        value: 'Ivanov',
        disabled: true,
      }),
      phone: new Input({
        name: 'phone',
        placeholder: 'Phone',
        value: '234342342342',
        disabled: true,
      }),
      chatName: new Input({
        name: 'chat_name',
        placeholder: 'Chat name',
        value: 'Ivan_chat_name',
        disabled: true,
      }),
      changeData: new Button({
        view: 'default',
        children: 'Change data',
        name: 'change_data',
      }),
      changePassword: new Link({
        children: 'Change password',
        href: '#',
      }),
      logOut: new Link({
        children: 'Log out',
        color: 'red',
        href: ROUTES.signIn,
      }),
      buttonBack: new ButtonBack({}),
    });
  }

  render() {
    const content = `
    ${this.props.avatar.render()}
    ${this.props.email.render()}
    ${this.props.login.render()}
    ${this.props.firstName.render()}
    ${this.props.secondName.render()}
    ${this.props.phone.render()}
    ${this.props.chatName.render()}
    ${this.props.changeData.render()}
    ${this.props.changePassword.render()}
    ${this.props.logOut.render()}
    `;

    return new Slide({
      children: new Card({
        children: content,
        classNameForm: styles.card,
      }).render(),
      buttonBack: this.props.buttonBack.render(),
    }).render();
  }
}
