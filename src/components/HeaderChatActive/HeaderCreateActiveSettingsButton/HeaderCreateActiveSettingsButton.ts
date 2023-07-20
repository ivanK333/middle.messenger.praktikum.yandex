import template from './HeaderCreateActiveSettingsButton.hbs';
import styles from './styles.module.pcss';
import { Block, BaseBlockProps } from '../../../libs/block';
import { Props } from '.';
import menu from '../../../../static/img/menu.svg';

export class HeaderCreateActiveSettingsButton extends Block<Props> {
  constructor(props: BaseBlockProps<Props>) {
    super(props, 'button');
  }

  handlerShow() {
    const list = document.querySelector('#settings-button') as HTMLDivElement;
    if (list?.style) {
      if (list.style?.display) {
        list.style.display = '';
      } else {
        list.style.display = 'block';
      }
    }
  }

  render() {
    const {
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: styles.button,
      classNameList: styles.list,
      img: menu,
      events: {
        click: () => {
          this.handlerShow();
        },
      },
    });
  }
}
