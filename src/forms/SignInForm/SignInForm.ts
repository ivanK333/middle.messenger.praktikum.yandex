import template from './SignInForm.hbs';
import { Block } from '../../libs';
import { Props } from '.';

export class SignInForm extends Block<Props> {
  constructor(props) {
    super(props, 'form');
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
