import { UserApi, ChangePasswordReq, UserProfileChangeReq } from '../../api/user';
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

      const avatarLink = resUpdateAvatar.avatar
        ? `https://ya-praktikum.tech/api/v2/resources/${resUpdateAvatar.avatar}` : undefined;

      this.store.setState('user', { ...resUpdateAvatar, avatar: avatarLink });
    } catch (err) {
      console.log(err);
    }
  }

  public async changePassword(data: ChangePasswordReq, cb?: () => void) {
    try {
      await this.api.changePassword(data);

      if (cb) {
        cb();
      }
    } catch (err) {
      console.log(err);
    }
  }

  public async updateProfile(data: UserProfileChangeReq) {
    try {
      await this.api.updateProfile(data);
    } catch (err) {
      console.log(err);
    }
  }
}
