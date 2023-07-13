import template from './SignInForm.hbs';
import { Block, FormValidator } from '../../libs';
import { AuthController } from '../../controllers';
import { VALIDATION_RULES } from '../../appConstants';
import { Props, Values } from '.';

export class SignInForm extends Block<Props> {
  private controller: AuthController;

  constructor(props: Props) {
    super(props, 'form');

    this.controller = new AuthController();
  }

  componentDidMount() {
    // eslint-disable-next-line no-new
    new FormValidator<Values>({
      form: this.getContent() as HTMLFormElement,
      fields: {
        password: [VALIDATION_RULES.required, VALIDATION_RULES.password],
        login: [VALIDATION_RULES.required, VALIDATION_RULES.login],
      },
      onSubmit: (values) => {
        this.controller.signIn(values);
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
