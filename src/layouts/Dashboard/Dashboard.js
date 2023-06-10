import template from './Dashboard.hbs';
import styles from './styles.module.pcss';

export class Dashboard {
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
      className: `${styles.dashboard} ${className}`,
    });
  }
}
