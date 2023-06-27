import template from './ProfileForm.hbs';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class ProfileForm extends Block<Props> {
  constructor(props) {
    super(props, 'form');
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.form} ${className}` });
  }
}
