import template from './Button.hbs';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class Button extends Block<Props> {
  constructor(props) {
    super(props, 'button');
  }

  render() {
    const {
      view = 'default',
      type = 'button',
      className = '',
      ...props
    } = this.props;

    this._element.setAttribute('type', type);

    return this.compile(template, {
      ...props,
      view,
      type,
      className: `${styles.button} ${styles[view]} ${className}`,
    });
  }
}
