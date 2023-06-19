import {
  Input,
  Button,
  Link,
  Card,
} from "../../components";
import { ROUTES } from "../../appConstants";
import { Slide } from "../../layouts";

import styles from './styles.module.pcss';
import { Block } from "../../libs";
import { Props } from ".";

export class SignUp extends Block<Props> {
  constructor() {
    super({
      email: new Input({
        name: 'email',
        placeholder: 'email',
        value: '',
      }).render(),
      login: new Input({
        name: 'login',
        placeholder: 'Login',
        value: '',
      }).render(),
      firstName: new Input({
        name: 'first_name',
        placeholder: 'First name',
        value: '',
      }).render(),
      secondName: new Input({
        name: 'second_name',
        placeholder: 'Second name',
        value: '',
      }).render(),
      phone: new Input({
        name: 'phone',
        placeholder: 'Phone',
        value: '',
      }).render(),
      password: new Input({
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        value: '',
      }).render(),
      repeatPassword: new Input({
        type: 'password',
        name: 'repeat_password',
        placeholder: 'Repeat password',
        value: '',
      }).render(),
      signUp: new Button({
        type: 'submit',
        view: 'default',
        children: 'Sign up',
        name: 'sign_up',
      }).render(),
      signIn: new Link({
        children: 'Sign in',
        href: ROUTES.signIn,
      }).render(),
    })
  }

  render() {
    const content = `
    ${this.props.email}
    ${this.props.login}
    ${this.props.firstName}
    ${this.props.secondName}
    ${this.props.phone}
    ${this.props.password}
    ${this.props.repeatPassword}
    ${this.props.signUp}
    ${this.props.signIn}
    `

    return new Slide({
      children: new Card({
        classNameForm: styles.card,
        children: content,
        title: "Sign up",
      }).render(),
    }).render();
  }
}


