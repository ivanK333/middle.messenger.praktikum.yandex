import template from './Card.hbs';
import { Block } from "../../libs";
import { Props } from ".";
import styles from './styles.module.pcss';

export class Card extends Block<Props> {
  render() {
    const {
      className = '',
      classNameForm = '',
      ...props
    } = this.props;

    return template({
      ...props,
      className: `${styles.container} ${className}`,
      classNameTitle: `${styles.title}`,
      classNameForm: `${styles.form} ${classNameForm}`,
    });
  }
}
