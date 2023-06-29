import {
  Button,
  Card,
  Input,
  Link,
} from '../../components';
import { SignInForm } from '../../forms';
import template from './SignIn.hbs';
import { ROUTES } from '../../appConstants';
import { Slide } from '../../layouts';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class SignIn extends Block<Props> {
  constructor() {
    super({
      slide: new Slide({
        card: new Card({
          title: 'Sign in',
          children: new SignInForm({
            login: new Input({
              type: 'text',
              name: 'login',
              placeholder: 'Login',
              className: styles.login,
            }),
            password: new Input({
              type: 'password',
              name: 'password',
              placeholder: 'Password',
              className: styles.password,
            }),
            signIn: new Button({
              type: 'submit',
              view: 'default',
              children: 'Sign in',
              name: 'sign_in',
              className: styles.signIn,
            }),
            signUp: new Link({
              children: 'Sign up',
              href: ROUTES.signUp,
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
