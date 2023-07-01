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
            first_name: new Input({
              name: 'first_name',
              placeholder: 'First name',
            }),
            second_name: new Input({
              name: 'second_name',
              placeholder: 'Second name',
            }),
            phone: new Input({
              name: 'phone',
              placeholder: 'Phone',
            }),
            display_name: new Input({
              name: 'display_name',
              placeholder: 'Chat name',
            }),
            save: new Button({
              view: 'default',
              children: 'Save',
              name: 'save',
              type: 'submit',
            }),
            change_password: new Link({
              children: 'Change password',
              href: ROUTES.changePassword,
            }),
            log_out: new Link({
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
