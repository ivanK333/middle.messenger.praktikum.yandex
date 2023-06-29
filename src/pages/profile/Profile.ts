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
            }),
            login: new Input({
              name: 'login',
              placeholder: 'Login',
            }),
            firstName: new Input({
              name: 'firstName',
              placeholder: 'First name',
            }),
            secondName: new Input({
              name: 'secondName',
              placeholder: 'Second name',
            }),
            phone: new Input({
              name: 'phone',
              placeholder: 'Phone',
            }),
            chatName: new Input({
              name: 'chatName',
              placeholder: 'Chat name',
            }),
            save: new Button({
              view: 'default',
              children: 'Save',
              name: 'save',
              type: 'submit',
            }),
            changePassword: new Link({
              children: 'Change password',
              href: ROUTES.changePassword,
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
