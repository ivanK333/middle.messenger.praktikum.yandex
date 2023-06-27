import template from './Main.hbs';
import { Block } from '../../libs';
import { Props } from '.';
import styles from './styles.module.pcss';
import { LINKS } from '../../appConstants';

export class Main extends Block<Props> {
  constructor(props) {
    super(props, 'main');
  }

  render() {
    return this.compile(template, {
      ...this.props,
      classNameHeader: styles.header,
      classNameNavList: styles.navList,
      classNameNav: styles.nav,
      links: LINKS,
    });
  }
}
