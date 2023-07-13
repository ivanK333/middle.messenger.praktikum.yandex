import template from './HeaderSidebarAvatar.hbs';
import styles from './styles.module.pcss';
import { Block, FormValidator } from '../../libs';
import { Props, Values } from '.';
import { VALIDATION_RULES } from '../../appConstants';

export class HeaderSidebarAvatar extends Block<Props> {
  constructor(props: Props) {
    super(props, 'button');
  }

  componentDidMount() {
    // eslint-disable-next-line no-new
    new FormValidator<Values>({
      form: this.getContent() as HTMLFormElement,
      fields: {
        search: [VALIDATION_RULES.required],
      },
      onSubmit: (values) => console.log(values),
    });
  }

  render() {
    const {
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      classNameName: styles.name,
    });
  }
}
