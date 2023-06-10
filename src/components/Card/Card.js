import template from './Card.hbs';
import styles from './styles.module.pcss';

export class Card {
  constructor(props) {
    this.props = props;
  }
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