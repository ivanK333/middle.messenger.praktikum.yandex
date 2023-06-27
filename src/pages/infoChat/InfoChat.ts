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

export class InfoChat extends Block<Props> {
  constructor() {
    super({
      slide: new Slide({
        buttonBack: new ButtonBack({}),
        card: new Card({
          title: 'Info chat',
          children: new InfoChatForm({
            avatar: new AvatarUpload({ className: styles.avatar }),
            chatName: new Input({
              name: 'chat_name',
              placeholder: 'Chat name',
              className: styles.input,
              value: 'Chat name',
              disabled: true,
            }),
            change: new Button({
              view: 'default',
              children: 'Change data',
              name: 'change',
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
