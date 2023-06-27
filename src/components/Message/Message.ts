import template from './Message.hbs';
import check from '../../../static/img/check.svg';
import { Props } from '.';
import styles from './styles.module.pcss';
import { Block } from '../../libs';

export class Message extends Block<Props> {
  constructor(props) {
    super(props, 'li');
  }

  render() {
    const {
      className = '',
      isOutgoing = false,
      ...props
    } = this.props;

    return this.compile(template, {
      ...props,
      className: `${isOutgoing ? styles.send : null} ${className}`,
      classNameWrap: styles.wrap,
      classNameMessage: styles.message,
      classNameDate: styles.date,
      classNameInfo: styles.info,
      check,
    });
  }
}
