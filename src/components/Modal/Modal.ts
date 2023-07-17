import { Block } from '../../libs';
import { Props } from '.';
import template from './Modal.hbs';

import styles from './styles.module.pcss';

export class Modal extends Block<Props> {
  componentDidMount() {
    this._toggleModal();
  }

  private _toggleModal() {
    const closeBtn = this._element.querySelector('[data-modal-close="true"]') as HTMLButtonElement;
    const modalBody = this._element.children[0] as HTMLElement;

    this._element.removeEventListener('click', () => this.hide());
    closeBtn.removeEventListener('click', () => this.hide());
    modalBody.removeEventListener('click', (e) => e.stopPropagation());

    this._element.addEventListener('click', () => this.hide());
    closeBtn.addEventListener('click', () => this.hide());
    modalBody.addEventListener('click', (e) => e.stopPropagation());
  }

  open() {
    this._element.style.display = 'flex';
  }

  hide() {
    this._element.style.display = 'none';
  }

  render() {
    const { className, classNameModal, ...props } = this.props;
    return this.compile(template, {
      ...props,
      className: styles.overlay,
      classNameTitle: styles.title,
      styles,
      classNameModal: `${styles.modal} ${classNameModal}`,
      classNameCloseBtn: styles.closeBtn,
    });
  }
}
