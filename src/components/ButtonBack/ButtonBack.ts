import template from './ButtonBack.hbs';
import arrow from '../../../static/img/arrow.svg';
import { Block, BaseBlockProps } from '../../libs/block';
import { Props } from '.';
import styles from './styles.module.pcss';

export class ButtonBack extends Block<Props> {
  constructor(props: BaseBlockProps<Props>) {
    super(props, 'button');
  }

  render() {
    const {
      type = 'button',
      className = '',
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      type,
      className: `${styles.button} ${className}`,
      src: arrow,
    });
  }
}
