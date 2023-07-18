import template from './SettingsForm.hbs';
import { FormValidator, BlockWithStore } from '../../libs';
import { UserController } from '../../controllers';
import { Props, Values } from '.';
import styles from './styles.module.pcss';
import { VALIDATION_RULES } from '../../appConstants';
import { State } from '../../store';

export class SettingsForm extends BlockWithStore<Props> {
  private userController: UserController;

  constructor(props: Props) {
    super(props, 'form');

    this.userController = new UserController();

    const mapStateToProps = (state: State) => ({ ...state.user });
    this.withStore(mapStateToProps);
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
      onSubmit: (values) => {
        this.userController.updateProfile(values);
      },
    });
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.form} ${className}` });
  }
}
