import styles from './styles.module.pcss';
import {
  Input,
  Button,
  Link,
  Card,
} from "../../components";
import { ROUTES } from "../../appConstants";
import { Slide } from "../../layouts";
import { Block } from "../../libs";
import { Props } from ".";

export class SignIn extends Block<Props> {
  constructor() {
    super({
      login: new Input({
        type: 'text',
        name: 'login',
        placeholder: 'Login',
        className: styles.login,
        value: '',
      }).render(),
      password: new Input({
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        className: styles.password,
        value: '',
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
    })
  }

  render() {
    const content = `
    ${this.props.login}
    ${this.props.password}
    ${this.props.signIn}
    ${this.props.signUp}
    `

    return new Slide({
      children: new Card({
        children: content,
        title: "Sign in",
      }).render(),
    }).render();
  }
}


