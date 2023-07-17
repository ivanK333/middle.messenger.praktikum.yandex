import { Block, BaseBlockProps } from '../../libs/block';
import { Input, Button } from '../../components';
import { Props, Values } from '.';
import template from './ModalForm.hbs';
import styles from './styles.module.pcss';
import { FormValidator } from '../../libs';
import { VALIDATION_RULES } from '../../appConstants';

export class ModalForm extends Block<Props> {
  constructor(props: BaseBlockProps<Props>) {
    super({
      ...props,
      userIdInput: new Input({ name: 'id', className: styles.input, placeholder: 'User id' }),
      button: new Button({ view: 'default', type: 'submit', children: 'Confirm' }),
    }, 'form');
  }

  componentDidMount() {
    // eslint-disable-next-line no-new
    new FormValidator<Values>({
      form: this.getContent() as HTMLFormElement,
      fields: {
        id: [VALIDATION_RULES.required, VALIDATION_RULES.userID],
      },
      onSubmit: (values) => {
        if (this.props.onSubmit) {
          this.props.onSubmit(values);
        }
      },
    });
  }

  protected render() {
    return this.compile(template, {
      ...this.props,
      className: styles.modal,
    });
  }
}
