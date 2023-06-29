import template from './SignInForm.hbs';
import { Block, FormValidator } from '../../libs';
import { VALIDATION_RULES } from '../../appConstants';
import { Props, Values } from '.';

export class SignInForm extends Block<Props> {
  constructor(props: Props) {
    super(props, 'form');
  }

  componentDidMount() {
    // eslint-disable-next-line no-new
    new FormValidator<Values>({
      form: this.getContent() as HTMLFormElement,
      fields: {
        password: [VALIDATION_RULES.required, VALIDATION_RULES.password],
        login: [VALIDATION_RULES.required, VALIDATION_RULES.login],
      },
      onSubmit: (values) => console.log(values),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
