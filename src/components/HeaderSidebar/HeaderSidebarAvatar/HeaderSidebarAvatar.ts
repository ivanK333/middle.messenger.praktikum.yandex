import template from './HeaderSidebarAvatar.hbs';
import styles from './styles.module.pcss';
import { Block, BaseBlockProps } from '../../../libs/block';
import { Props } from './index';

export class HeaderSidebarAvatar extends Block<Props> {
  constructor(props: BaseBlockProps<Props>) {
    super(props, 'button');
  }

  render() {
    const {
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      classNameName: styles.name,
    });
  }
}
