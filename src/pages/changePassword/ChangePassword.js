import styles from './styles.module.pcss';
import {
  Input,
  Button,
  Card,
  ButtonBack,
} from "../../components";
import { Slide } from '../../layouts'

export class ChangePassword {
  constructor() {
    this.content = {
      oldPassword: new Input({
        name: 'old_password',
        placeholder: 'Old password',
      }).render(),
      newPassword: new Input({
        name: 'new_password',
        placeholder: 'New password',
      }).render(),
      reEnterNewPassword: new Input({
        name: 're-enter_new_password',
        placeholder: 'Re-enter new password',
      }).render(),
      save: new Button({
        view: 'default',
        children: 'Save',
        name: 'save',
      }).render(),
    };
    this.buttonBack = new ButtonBack({}).render();
  }

  render() {
    const content = `
    ${this.content.oldPassword}
    ${this.content.newPassword}
    ${this.content.reEnterNewPassword}
    ${this.content.save}
    `

    return new Slide({
      children: new Card({
        children: content,
        classNameForm: styles.card,
        title: 'Change password',
      }).render(),
      buttonBack: this.buttonBack,
    }).render();
  }
}


