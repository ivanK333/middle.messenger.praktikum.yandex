import template from './ChangePasswordForm.hbs';
import { Block, FormValidator } from '../../libs';
import { UserController } from '../../controllers';
import { Props, Values } from '.';
import styles from './styles.module.pcss';
import { VALIDATION_RULES } from '../../appConstants';

export class ChangePasswordForm extends Block<Props> {
  private controller: UserController;

  constructor(props: Props) {
    super(props, 'form');

    this.controller = new UserController();
  }

  componentDidMount() {
    // eslint-disable-next-line no-new
    const formValidator = new FormValidator<Values>({
      form: this.getContent() as HTMLFormElement,
      fields: {
        oldPassword: [VALIDATION_RULES.required, VALIDATION_RULES.password],
        newPassword: [VALIDATION_RULES.required, VALIDATION_RULES.password],
        reEnterNewPassword: [
          VALIDATION_RULES.required,
          {
            rule: VALIDATION_RULES.password.rule,
            message: 'Must match the new Password field',
            isEqualBy: 'newPassword',
          },
        ],
      },
      onSubmit: (values) => {
        const { reEnterNewPassword, ...variables } = values;
        this.controller.changePassword(variables, () => {
          formValidator.resetForm();
        });
      },
    });
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.form} ${className}` });
  }
}
