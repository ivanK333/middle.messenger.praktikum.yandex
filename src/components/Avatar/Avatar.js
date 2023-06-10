import template from './Avatar.hbs';
import styles from './styles.module.pcss';

export class Avatar {
  constructor(props) {
    this.props = props;
  }

  render() {
    const {
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      className: `${styles.avatar} ${className}`,
      classNameImg: styles.img,
    });
  }
}