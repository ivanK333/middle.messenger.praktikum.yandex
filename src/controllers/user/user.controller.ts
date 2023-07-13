import { UserApi } from '../../api';
import { Store } from '../../store';

export class UserController {
  public api: UserApi;

  public store: Store;

  constructor() {
    this.api = new UserApi();

    this.store = new Store();
  }

  public async updateAvatar(avatar: File | undefined) {
    try {
      if (!avatar) {
        throw Error('Загрузите фотографию');
      }

      const formData = new FormData();
      formData.append('avatar', avatar);

      const resUpdateAvatar = await this.api.updateAvatar(formData);

      this.store.setState('user', resUpdateAvatar);
    } catch (err) {
      console.log(err);
    }
  }
}
