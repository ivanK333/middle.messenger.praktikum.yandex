export type message = {
  id: string,
  message: Element,
}

export type Props = {
  messageConsole: Element;
  messages: message[];
}