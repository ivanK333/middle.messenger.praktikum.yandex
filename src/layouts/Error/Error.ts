import template from './Error.hbs';
import styles from './styles.module.pcss';
import { Props } from '.';
import { Block } from '../../libs';

export class Error extends Block<Props> {
  render() {
    return template({
      ...this.props,
      className: styles.container,
      classNameCode: styles.code,
      classNameTitle: styles.title,
    });
  }
}
