import {
  Input,
  Button,
  Link,
  Card,
  AvatarUpload,
  ButtonBack,
} from '../../components';
import { ROUTES } from '../../appConstants';
import template from './Profile.hbs';
import { Slide } from '../../layouts';
import { ProfileForm } from '../../forms';
import { Props } from '.';
import styles from './styles.module.pcss';
import { Block } from '../../libs';

export class Profile extends Block<Props> {
  constructor() {
    super({
      slide: new Slide({
        buttonBack: new ButtonBack({}),
        card: new Card({
          children: new ProfileForm({
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
          }),
        }),
      }),
    }, 'main');
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.main} ${className}` });
  }
}
