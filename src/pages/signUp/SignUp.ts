import {
  Input,
  Button,
  Link,
  Card,
} from '../../components';
import { Slide } from '../../layouts';
import { SignUpForm } from '../../forms';
import template from './SignUp.hbs';
import { Block } from '../../libs';
import { Props } from '.';

import styles from './styles.module.pcss';
import { router } from '../../router';
import { ROUTES } from '../../appConstants';

export class SignUp extends Block<Props> {
  constructor() {
    super({
      slide: new Slide({
        card: new Card({
          title: 'Sign up',
          children: new SignUpForm({
            email: new Input({
              name: 'email',
              placeholder: 'email',
              value: 'user@ivan.com',
            }),
            login: new Input({
              name: 'login',
              placeholder: 'Login',
              value: 'Ivan77',
            }),
            first_name: new Input({
              name: 'first_name',
              placeholder: 'First name',
              value: 'Ivan',
            }),
            second_name: new Input({
              name: 'second_name',
              placeholder: 'Second name',
              value: 'Ivanov',
            }),
            phone: new Input({
              name: 'phone',
              placeholder: 'Phone',
              value: '+71231232332',
            }),
            password: new Input({
              type: 'password',
              name: 'password',
              placeholder: 'Password',
              value: 'Qwerty123',
            }),
            repeat_password: new Input({
              type: 'password',
              name: 'repeat_password',
              placeholder: 'Repeat password',
              value: 'Qwerty123',
            }),
            sign_up: new Button({
              type: 'submit',
              view: 'default',
              children: 'Sign up',
              name: 'sign_up',
            }),
            sign_in: new Link({
              children: 'Sign in',
              // @ts-ignore
              events: {
                click: () => { router.go(ROUTES.signIn); },
              },
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
