import template from './CreateChatForm.hbs';
import { Block, FormValidator } from '../../libs';
import { Props, Values } from '.';
import styles from './styles.module.pcss';
import { VALIDATION_RULES } from '../../appConstants';
import { ChatController } from '../../controllers';

export class CreateChatForm extends Block<Props> {
  private controller: ChatController;

  constructor(props: Props) {
    super(props, 'form');

    this.controller = new ChatController();
  }

  componentDidMount() {
    // eslint-disable-next-line no-new
    new FormValidator<Values>({
      form: this.getContent() as HTMLFormElement,
      fields: {
        display_name: [VALIDATION_RULES.required],
      },
      onSubmit: (values) => {
        this.controller.createChat({ title: values.display_name });
      },
    });
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.form} ${className}` });
  }
}
