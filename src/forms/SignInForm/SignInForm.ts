import template from './SignInForm.hbs';
import { Block, FormValidator } from '../../libs';
import { Props } from '.';
// import styles from '../../components/Input/styles.module.pcss';

export class SignInForm extends Block<Props> {
  constructor(props) {
    super(props, 'form');
  }

  componentDidMount() {
    // eslint-disable-next-line no-new
    new FormValidator({
      form: this.getContent() as HTMLFormElement,
      onSubmit: (values) => console.log(values),
    });
  }

  render() {
    // const handleSubmit = (e: Event) => {
    //   e.preventDefault();
    //   const event = e.target as HTMLFormElement;
    //   const children = event.querySelectorAll('#input');
    //   const state: Record<string, string> = {};
    //
    //   children.forEach((child) => {
    //     const input = child.querySelector('input');
    //     state[input.name] = input.value;
    //     if (!input.value) {
    //       child.classList.add(styles.error);
    //     } else {
    //       child.classList.remove(styles.error);
    //     }
    //   });
    //
    //   console.log(state);
    // };
    return this.compile(template, this.props);
  }
}
