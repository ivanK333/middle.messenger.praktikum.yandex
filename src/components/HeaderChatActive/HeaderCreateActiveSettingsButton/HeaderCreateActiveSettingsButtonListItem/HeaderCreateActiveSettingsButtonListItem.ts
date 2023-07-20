import template from './HeaderCreateActiveSettingsButtonListItem.hbs';
import styles from './styles.module.pcss';
import { Block, BaseBlockProps } from '../../../../libs/block';
import { Props } from '.';

export class HeaderCreateActiveSettingsButtonListItem extends Block<Props> {
  constructor(props: BaseBlockProps<Props>) {
    super(props, 'button');
  }

  render() {
    const { name, ...props } = this.props;

    this.getContent().setAttribute('data-modal-open', name);

    return this.compile(template, {
      ...props,
      name,
      className: styles.button,
      classNameImg: styles.img,
    });
  }
}
