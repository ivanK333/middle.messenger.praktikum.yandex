import template from './AvatarUpload.hbs';
import uploadImg from '../../../static/img/upload_img.svg';
import styles from './styles.module.pcss';

export class AvatarUpload {
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
      className: `${styles.container} ${className}`,
      classNameInput: styles.input,
      classNameLabel: styles.label,
      classNameImg: styles.img,
      src: uploadImg,
    });
  }
}
