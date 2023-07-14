import template from './AvatarUpload.hbs';
import uploadImg from '../../../static/img/upload_img.svg';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';

export class AvatarUpload extends Block<Props> {
  render() {
    const {
      className = '',
      src,
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: `${styles.container} ${className}`,
      classNameInput: styles.input,
      classNameLabel: styles.label,
      classNameImg: styles.img,
      classNameBaseImg: styles.imgBase,
      src,
      baseSrc: !src ? uploadImg : '',
    });
  }
}
