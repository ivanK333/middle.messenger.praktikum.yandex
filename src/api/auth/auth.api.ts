import { BaseApi } from '../base';
import {
  GetUserRes,
  SignInReq,
  SignUpReq,
} from '.';

export class AuthApi extends BaseApi {
  public signIn(variables: SignInReq) {
    return this.http.post('auth/signin/', {
      data: variables,
      withCredentials: true,
    });
  }

  public signUp(variables: SignUpReq) {
    return this.http.post('auth/signup/', {
      data: variables,
    });
  }

  public getUser() {
    return this.http.get<void, GetUserRes>('auth/user', {
      withCredentials: true,
    });
  }

  public logout() {
    return this.http.post('auth/logout', {
      withCredentials: true,
    });
  }
}
