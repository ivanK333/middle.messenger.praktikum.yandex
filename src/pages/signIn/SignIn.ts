import styles from './styles.module.pcss';
import {
  Input,
  Button,
  Link,
  Card,
} from '../../components';
import { ROUTES } from '../../appConstants';
import { Slide } from '../../layouts';
import { Block } from '../../libs';
import { Props } from '.';

export class SignIn extends Block<Props> {
  constructor() {
    super({
      login: new Input({
        type: 'text',
        name: 'login',
        placeholder: 'Login',
        className: styles.login,
        value: '',
      }),
      password: new Input({
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        className: styles.password,
        value: '',
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
    });
  }

  render() {
    const content = `
    ${this.props.login.render()}
    ${this.props.password.render()}
    ${this.props.signIn.render()}
    ${this.props.signUp.render()}
    `;

    return new Slide({
      children: new Card({
        children: content,
        title: 'Sign in',
      }).render(),
    }).render();
  }
}
