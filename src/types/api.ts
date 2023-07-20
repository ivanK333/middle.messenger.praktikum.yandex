export type WsMessage = {
  chat_id: number,
  content: string,
  id: number,
  is_read: boolean,
  time: string,
  user_id: number,
};
