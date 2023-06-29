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
import { ChangePasswordForm } from '../../forms';
import template from './ChangePassword.hbs';

export class ChangePassword extends Block<Props> {
  constructor() {
    super({
      slide: new Slide({
        buttonBack: new ButtonBack({}),
        card: new Card({
          title: 'Change password',
          children: new ChangePasswordForm({
            oldPassword: new Input({
              name: 'old_password',
              placeholder: 'Old password',
              type: 'password',
            }),
            newPassword: new Input({
              name: 'new_password',
              placeholder: 'New password',
              type: 'password',
            }),
            reEnterNewPassword: new Input({
              name: 're-enter_new_password',
              placeholder: 'Re-enter new password',
              type: 'password',
            }),
            save: new Button({
              view: 'default',
              children: 'Save',
              name: 'save',
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
