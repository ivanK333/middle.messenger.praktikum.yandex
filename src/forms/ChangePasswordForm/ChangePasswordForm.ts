import template from './ChangePasswordForm.hbs';
import { Block, FormValidator } from '../../libs';
import { Props, Values } from '.';
import styles from './styles.module.pcss';
import { VALIDATION_RULES } from '../../appConstants';

export class ChangePasswordForm extends Block<Props> {
  constructor(props: Props) {
    super(props, 'form');
  }

  componentDidMount() {
    // eslint-disable-next-line no-new
    new FormValidator<Values>({
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
      onSubmit: (values) => console.log(values),
    });
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.form} ${className}` });
  }
}
