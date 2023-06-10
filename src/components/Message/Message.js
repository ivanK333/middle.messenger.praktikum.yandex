import template from './Message.hbs';
import check from '../../../static/img/check.svg';
import styles from './styles.module.pcss';

export class Message {
  constructor(props) {
    this.props = props;
  }

  render() {
    const {
      className = '',
      isOutgoing = false,
      ...props
    } = this.props;

    return template({
      ...props,
      className: `${isOutgoing ? styles.send : null} ${className}`,
      classNameWrap: styles.wrap,
      classNameMessage: styles.message,
      classNameDate: styles.date,
      classNameInfo: styles.info,
      date: '11:56',
      check,
    });
  }
}
