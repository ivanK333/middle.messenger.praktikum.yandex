import { Block } from '../../../libs';
import { Props } from './index';
import template from './ChatSettingsModal.hbs';
import styles from './styles.module.pcss';
import { Input } from '../../../components';

export class ChatSettingsModal extends Block<Props> {
  protected render() {
    const userInputs = this.props.users?.map((user, index) => (
      new Input({
        name: `user-${index}`,
        placeholder: 'User id',
        value: `${user.id}`,
        disabled: true,
        className: styles.input,
      })
    ));

    return this.compile(template, {
      ...this.props,
      className: styles.modal,
      classNameTitle: styles.title,
      userInputs,
    });
  }
}
