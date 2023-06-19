import { Sidebar, ChatActive } from "../../modules";
import { Dashboard } from "../../layouts";
import { CHATS, MESSAGES } from "../../appConstants";
import { Block } from "../../libs";
import { Props } from ".";

export class Chat extends Block<Props> {
  constructor() {
    super({
      sidebar: new Sidebar({ chats: CHATS }).render(),
      activeChat: new ChatActive({ messages: MESSAGES }).render(),
    });
  }
  render() {
    const { sidebar, activeChat } = this.props;

    return new Dashboard({
      sidebar,
      activeChat,
    }).render();
  }
}


