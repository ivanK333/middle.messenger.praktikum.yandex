import {
  Input,
  Button,
  Link,
  Card,
} from "../../components";
import { ROUTES } from "../../appConstants";
import { Slide } from "../../layouts";

import styles from './styles.module.pcss';

export class SignUp {
  constructor() {
    this.content = {
      email: new Input({
        name: 'email',
        placeholder: 'email',
      }).render(),
      login: new Input({
        name: 'login',
        placeholder: 'Login',
      }).render(),
      firstName: new Input({
        name: 'first_name',
        placeholder: 'First name',
      }).render(),
      secondName: new Input({
        name: 'second_name',
        placeholder: 'Second name',
      }).render(),
      phone: new Input({
        name: 'phone',
        placeholder: 'Phone',
      }).render(),
      password: new Input({
        type: 'password',
        name: 'password',
        placeholder: 'Password',
      }).render(),
      repeatPassword: new Input({
        type: 'password',
        name: 'repeat_password',
        placeholder: 'Repeat password',
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
    }
  }

  render() {
    const content = `
    ${this.content.email}
    ${this.content.login}
    ${this.content.firstName}
    ${this.content.secondName}
    ${this.content.phone}
    ${this.content.password}
    ${this.content.repeatPassword}
    ${this.content.signUp}
    ${this.content.signIn}
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


