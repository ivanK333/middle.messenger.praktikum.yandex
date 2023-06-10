import styles from './styles.module.pcss';
import {
  Input,
  Button,
  Link,
  Card,
} from "../../components";
import { ROUTES } from "../../appConstants";
import { Slide } from "../../layouts";

export class SignIn {
  constructor() {
    this.content = {
      login: new Input({
        type: 'text',
        name: 'login',
        placeholder: 'Login',
        className: styles.login,
      }).render(),
      password: new Input({
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        className: styles.password,
      }).render(),
      signIn: new Button({
        type: 'submit',
        view: 'default',
        children: 'Sign in',
        name: 'sign_in',
        className: styles.signIn,
      }).render(),
      signUp: new Link({
        children: 'Sign up',
        href: ROUTES.signUp,
      }).render(),
    }
  }

  render() {
    const content = `
    ${this.content.login}
    ${this.content.password}
    ${this.content.signIn}
    ${this.content.signUp}
    `

    return new Slide({
      children: new Card({
        children: content,
        title: "Sign in",
      }).render(),
    }).render();
  }
}


