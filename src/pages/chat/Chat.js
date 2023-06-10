import { Sidebar, ChatActive } from "../../modules";
import { Dashboard } from "../../layouts";
import { HeaderSidebar } from "../../components";

export class Chat {
  constructor(props) {
    this.props = props
  }

  render() {

    return new Dashboard({
      sidebar: new Sidebar({
        header: new HeaderSidebar({ name: 'ivan' }).render(),
      }).render(),
      activeChat: new ChatActive({}).render(),
    }).render();
  }
}


