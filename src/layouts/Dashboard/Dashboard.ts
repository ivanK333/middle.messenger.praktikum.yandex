import template from './Dashboard.hbs';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class Dashboard extends Block<Props> {
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
