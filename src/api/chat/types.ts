export type Chat = {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  last_message: {
    time: string,
    content: string,
  }
};

export type AddUserChatReq = {
  users: number[],
  chatId: number,
};

export type CreateChatReq = {
  title: string,
};

export type ChatsRes = Chat[];

export type GetUsersForChatReq = {
  offset?: number,
  limit?: number,
};

export type RequestTokenForChatReq = {
  id: number,
};
export type RequestTokenForChatRes = {
  token: string,
};

export type DeleteUsersFromChatReq = {
  chatId: number,
  users: number[],
};
