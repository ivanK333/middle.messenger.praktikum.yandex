import { BaseApi } from '../base';
import { UserAvatarUploadReq, ChangePasswordReq, UserProfileChangeReq } from '.';
import { UserRes } from '../auth';

export class UserApi extends BaseApi {
  public updateAvatar(variables: UserAvatarUploadReq): Promise<UserRes> {
    return this.http.put('/user/profile/avatar', {
      data: variables,
      withCredentials: true,
    });
  }

  public changePassword(variables: ChangePasswordReq): Promise<UserRes> {
    return this.http.put('/user/password', {
      data: variables,
      withCredentials: true,
    });
  }

  public updateProfile(variables: UserProfileChangeReq) {
    return this.http.put('user/profile', {
      data: variables,
      withCredentials: true,
    });
  }
}
