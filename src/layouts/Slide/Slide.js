import template from './Slide.hbs';
import styles from './styles.module.pcss';

export class Slide {
  constructor(props) {
    this.props = props;
  }

  render() {
    return template({
      ...this.props,
      classNameButtonBack: styles.buttonBack,
      className: styles.container,
    });
  }
}


