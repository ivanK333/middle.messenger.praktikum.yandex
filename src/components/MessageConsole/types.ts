import { InputChat } from '../InputChat';
import { ButtonSend } from '../ButtonSend';

export type Values = {
  message: string,
};

export type Props = {
  className?: string,
  classNameForm?: string,
  classNameImg?: string,
  input?: InputChat,
  button?: ButtonSend,
  img?: string,
};
