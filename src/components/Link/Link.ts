import template from './Link.hbs';
import styles from './styles.module.pcss';
import { Props } from '.';
import { Block } from '../../libs';

export class Link extends Block<Props> {
  constructor(props) {
    super(props, 'a');
  }

  render() {
    const {
      color = 'blue',
      className = '',
      href,
      target = '_self',
      ...props
    } = this.props;

    this._element.setAttribute('href', href);
    this._element.setAttribute('target', target);

    return this.compile(template, {
      ...props,
      className: `${styles.link} ${styles[color]} ${className}`,
      href,
      target,
    });
  }
}
