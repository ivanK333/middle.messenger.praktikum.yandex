import template from './Link.hbs';
import styles from './styles.module.pcss';

export class Link {
  constructor(props) {
    this.props = props;
  }
  render() {
    const {
      color = 'blue',
      className = '',
      ...props
    } = this.props;

    return template({
      ...props,
      className: `${styles.link} ${styles[color]} ${className}`,
    });
  }
}