import styles from './styles.module.pcss';
import {
  Input,
  Button,
  Card,
  ButtonBack,
} from '../../components';
import { Props } from '.';
import { Block } from '../../libs';
import { Slide } from '../../layouts';

export class ChangePassword extends Block<Props> {
  constructor() {
    super({
      oldPassword: new Input({
        name: 'old_password',
        placeholder: 'Old password',
        value: '',
      }),
      newPassword: new Input({
        name: 'new_password',
        placeholder: 'New password',
        value: '',
      }),
      reEnterNewPassword: new Input({
        name: 're-enter_new_password',
        placeholder: 'Re-enter new password',
        value: '',
      }),
      save: new Button({
        view: 'default',
        children: 'Save',
        name: 'save',
      }),
      buttonBack: new ButtonBack({}),
    });
  }

  render() {
    const content = `
    ${this.props.oldPassword.render()}
    ${this.props.newPassword.render()}
    ${this.props.reEnterNewPassword.render()}
    ${this.props.save.render()}
    `;

    return new Slide({
      children: new Card({
        children: content,
        classNameForm: styles.card,
        title: 'Change password',
      }).render(),
      buttonBack: this.props.buttonBack.render(),
    }).render();
  }
}
