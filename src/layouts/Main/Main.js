import template from "./Main.hbs";
import styles from './styles.module.pcss';
import { LINKS } from "../../appConstants";

export class Main {
  constructor(props) {
    this.props = props
  }

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


