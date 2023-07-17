import {
  Input,
  Button,
  Card,
  AvatarUpload,
  ButtonBack,
} from '../../components';
import { Slide } from '../../layouts';
import styles from './styles.module.pcss';
import { Block } from '../../libs';
import { SettingsForm } from '../../forms';
import { Props } from '.';
import template from './Settings.hbs';
import { router } from '../../router';

export class Settings extends Block<Props> {
  constructor() {
    super({
      slide: new Slide({
        buttonBack: new ButtonBack({ events: { click: () => router.back() } }),
        card: new Card({
          title: 'Settings',
          children: new SettingsForm({
            avatarInput: new AvatarUpload({ className: styles.avatar }),
            display_name: new Input({
              name: 'display_name',
              placeholder: 'Chat name',
              className: styles.input,
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
