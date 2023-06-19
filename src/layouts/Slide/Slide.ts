import template from './Slide.hbs';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class Slide extends Block<Props> {

  render() {
    return template({
      ...this.props,
      classNameButtonBack: styles.buttonBack,
      className: styles.container,
    });
  }
}


