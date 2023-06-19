import template from "./Main.hbs";
import { Block } from "../../libs";
import { Props } from ".";
import styles from './styles.module.pcss';
import { LINKS } from "../../appConstants";

export class Main extends Block<Props> {
  render() {

    return template({
      ...this.props,
      classNameHeader: styles.header,
      classNameMain: styles.main,
      classNameNavList: styles.navList,
      classNameNav: styles.nav,
      links: LINKS,
    });
  }
}


