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
import { router } from '../../router';

export class ChangePassword extends Block<Props> {
  constructor() {
    super({
      slide: new Slide({
        // @ts-ignore
        buttonBack: new ButtonBack({ events: { click: () => router.back() } }),
        card: new Card({
          title: 'Change password',
          children: new ChangePasswordForm({
            oldPassword: new Input({
              name: 'oldPassword',
              placeholder: 'Old password',
              type: 'password',
            }),
            newPassword: new Input({
              name: 'newPassword',
              placeholder: 'New password',
              type: 'password',
            }),
            reEnterNewPassword: new Input({
              name: 'reEnterNewPassword',
              placeholder: 'Re-enter new password',
              type: 'password',
            }),
            save: new Button({
              view: 'default',
              type: 'submit',
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
