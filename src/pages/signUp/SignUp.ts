import {
  Input,
  Button,
  Link,
  Card,
} from '../../components';
import { ROUTES } from '../../appConstants';
import { Slide } from '../../layouts';

import styles from './styles.module.pcss';
import { Block } from '../../libs';
import { Props } from '.';

export class SignUp extends Block<Props> {
  constructor() {
    super({
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
    });
  }

  render() {
    const content = `
    ${this.props.email.render()}
    ${this.props.login.render()}
    ${this.props.firstName.render()}
    ${this.props.secondName.render()}
    ${this.props.phone.render()}
    ${this.props.password.render()}
    ${this.props.repeatPassword.render()}
    ${this.props.signUp.render()}
    ${this.props.signIn.render()}
    `;

    return new Slide({
      children: new Card({
        classNameForm: styles.card,
        children: content,
        title: 'Sign up',
      }).render(),
    }).render();
  }
}
