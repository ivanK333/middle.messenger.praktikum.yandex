import styles from './styles.module.pcss';
import {
  Input,
  Button,
  Card,
  ButtonBack,
} from "../../components";
import { Props } from '.'
import { Block } from '../../libs'
import { Slide } from '../../layouts'

export class ChangePassword extends Block<Props> {
  constructor() {
    super({
      oldPassword: new Input({
        name: 'old_password',
        placeholder: 'Old password',
        value: '',
      }).render(),
      newPassword: new Input({
        name: 'new_password',
        placeholder: 'New password',
        value: '',
      }).render(),
      reEnterNewPassword: new Input({
        name: 're-enter_new_password',
        placeholder: 'Re-enter new password',
        value: '',
      }).render(),
      save: new Button({
        view: 'default',
        children: 'Save',
        name: 'save',
      }).render(),
      buttonBack: new ButtonBack({}).render(),
    })
  }

  render() {
    const content = `
    ${this.props.oldPassword}
    ${this.props.newPassword}
    ${this.props.reEnterNewPassword}
    ${this.props.save}
    `

    return new Slide({
      children: new Card({
        children: content,
        classNameForm: styles.card,
        title: 'Change password',
      }).render(),
      buttonBack: this.props.buttonBack,
    }).render();
  }
}


