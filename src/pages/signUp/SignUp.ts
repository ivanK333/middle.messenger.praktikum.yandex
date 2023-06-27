import {
  Input,
  Button,
  Link,
  Card,
} from '../../components';
import { ROUTES } from '../../appConstants';
import { Slide } from '../../layouts';
import { SignUpForm } from '../../forms';
import template from './SignUp.hbs';
import { Block } from '../../libs';
import { Props } from '.';

import styles from './styles.module.pcss';

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
              value: '',
            }),
            login: new Input({
              name: 'login',
              placeholder: 'Login',
              value: '',
            }),
            firstName: new Input({
              name: 'first_name',
              placeholder: 'First name',
              value: '',
            }),
            secondName: new Input({
              name: 'second_name',
              placeholder: 'Second name',
              value: '',
            }),
            phone: new Input({
              name: 'phone',
              placeholder: 'Phone',
              value: '',
            }),
            password: new Input({
              type: 'password',
              name: 'password',
              placeholder: 'Password',
              value: '',
            }),
            repeatPassword: new Input({
              type: 'password',
              name: 'repeat_password',
              placeholder: 'Repeat password',
              value: '',
            }),
            signUp: new Button({
              type: 'submit',
              view: 'default',
              children: 'Sign up',
              name: 'sign_up',
            }),
            signIn: new Link({
              children: 'Sign in',
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
