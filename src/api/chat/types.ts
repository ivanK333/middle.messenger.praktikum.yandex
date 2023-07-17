export type Chat = {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  last_message: {
    // user: {
    //   first_name: string,
    //   second_name: string,
    //   avatar: string,
    //   email: string,
    //   login: string,
    //   phone: string,
    // },
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
