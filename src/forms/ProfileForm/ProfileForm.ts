import template from './ProfileForm.hbs';
import { Block, FormValidator } from '../../libs';
import { Props, Values } from '.';
import styles from './styles.module.pcss';
import { VALIDATION_RULES } from '../../appConstants';

export class ProfileForm extends Block<Props> {
  constructor(props: Props) {
    super(props, 'form');
  }

  componentDidMount() {
    // eslint-disable-next-line no-new
    new FormValidator<Values>({
      form: this.getContent() as HTMLFormElement,
      fields: {
        email: [VALIDATION_RULES.required, VALIDATION_RULES.email],
        login: [VALIDATION_RULES.required, VALIDATION_RULES.login],
        first_name: [VALIDATION_RULES.required, VALIDATION_RULES.name],
        second_name: [VALIDATION_RULES.required, VALIDATION_RULES.name],
        phone: [VALIDATION_RULES.required, VALIDATION_RULES.phone],
        display_name: [VALIDATION_RULES.required],
      },
      onSubmit: (values) => console.log(values),
    });
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.form} ${className}` });
  }
}
