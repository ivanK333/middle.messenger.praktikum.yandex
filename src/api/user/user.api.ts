import { BaseApi } from '../base';
import { UserAvatarUploadReq } from '.';
import { User } from '../../types';

export class UserApi extends BaseApi {
  public updateAvatar(variables: UserAvatarUploadReq): Promise<User> {
    return this.http.put('/user/profile/avatar', {
      data: variables,
      withCredentials: true,
    });
  }
}
