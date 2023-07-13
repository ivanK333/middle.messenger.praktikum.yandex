import template from './Link.hbs';
import styles from './styles.module.pcss';
import { Props } from '.';
import { Block } from '../../libs';

export class Link extends Block<Props> {
  constructor(props: Props) {
    super(props, 'button');
  }

  render() {
    const {
      color = 'blue',
      type = 'button',
      className = '',
      ...props
    } = this.props;

    this._element.setAttribute('type', type);

    return this.compile(template, {
      ...props,
      type,
      className: `${styles.link} ${styles[color]} ${className}`,
    });
  }
}
