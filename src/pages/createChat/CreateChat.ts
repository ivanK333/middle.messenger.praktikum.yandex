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

export class CreateChat extends Block<Props> {
  constructor() {
    super({
      slide: new Slide({
        buttonBack: new ButtonBack({}),
        card: new Card({
          title: 'Create chat',
          children: new CreateChatForm({
            avatar: new AvatarUpload({ className: styles.avatar }),
            chatName: new Input({
              name: 'chat_name',
              placeholder: 'Chat name',
              className: styles.input,
            }),
            create: new Button({
              view: 'default',
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
