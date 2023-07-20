import { InputChat } from '../InputChat';
import { ButtonSend } from '../ButtonSend';

export type Values = {
  message: string,
};

export type Props = {
  onSubmit?: (message: string) => void,
  chatId?: number,
  className?: string,
  classNameForm?: string,
  classNameImg?: string,
  input?: InputChat,
  button?: ButtonSend,
  img?: string,
};
