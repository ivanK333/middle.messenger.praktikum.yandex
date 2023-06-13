import template from './Error.hbs';
import styles from './styles.module.pcss';

export class Error {
  constructor(props) {
    this.props = props;
  }

  render() {
    return template({
      ...this.props,
      className: styles.container,
      classNameCode: styles.code,
      classNameTitle: styles.title,
    });
  }
}


