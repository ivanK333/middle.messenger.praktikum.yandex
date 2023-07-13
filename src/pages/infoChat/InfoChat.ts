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
import { InfoChatForm } from '../../forms';
import { Props } from '.';
import template from './InfoChat.hbs';
import { router } from '../../router';

export class InfoChat extends Block<Props> {
  public isChangeData: boolean;

  constructor() {
    super({
      slide: new Slide({
        // @ts-ignore
        buttonBack: new ButtonBack({ events: { click: () => router.back() } }),
        card: new Card({
          title: 'Info chat',
          children: new InfoChatForm({
            avatar: new AvatarUpload({ className: styles.avatar }),
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
