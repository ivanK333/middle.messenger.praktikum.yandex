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
import { CreateChatForm } from '../../forms';
import { Props } from '.';
import template from './CreateChat.hbs';
import { router } from '../../router';

export class CreateChat extends Block<Props> {
  constructor() {
    super({
      slide: new Slide({
        // @ts-ignore
        buttonBack: new ButtonBack({ events: { click: () => router.back() } }),
        card: new Card({
          title: 'Create chat',
          children: new CreateChatForm({
            avatar: new AvatarUpload({ className: styles.avatar }),
            display_name: new Input({
              name: 'display_name',
              placeholder: 'Chat name',
              className: styles.input,
            }),
            create: new Button({
              view: 'default',
              type: 'submit',
              children: 'Create',
              name: 'create',
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
