import { InputChat } from '../InputChat';
import { ButtonSend } from '../ButtonSend';
import staple from '../../../static/img/staple.svg';
import template from './MessageConsole.hbs';
import styles from './styles.module.pcss';
import { Props, Values } from '.';
import { Block, FormValidator } from '../../libs';
import { VALIDATION_RULES } from '../../appConstants';

export class MessageConsole extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      input: new InputChat({
        placeholder: 'Message',
        className: styles.input,
        name: 'message',
      }),
      button: new ButtonSend({}),
    }, 'form');
  }

  componentDidMount() {
    // eslint-disable-next-line no-new
    new FormValidator<Values>({
      form: this.getContent().querySelector('form') as HTMLFormElement,
      fields: {
        message: [VALIDATION_RULES.required],
      },
      onSubmit: (values) => console.log(values),
    });
  }

  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: `${styles.messageConsole} ${className}`,
      classNameForm: styles.form,
      classNameImg: styles.img,
      img: staple,
    });
  }
}
