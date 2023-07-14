import {
  AuthApi,
  SignInReq,
  SignUpReq,
} from '../../api/auth';
import { ROUTES, STORAGE_KEYS } from '../../appConstants';
import { Store } from '../../store';
import { router } from '../../router';

export class AuthController {
  public api: AuthApi;

  public store: Store;

  constructor() {
    this.api = new AuthApi();

    this.store = new Store();
  }

  public async signIn(variables: SignInReq) {
    try {
      await this.api.signIn(variables);
      localStorage.setItem(STORAGE_KEYS.isAuth, 'true');
      router.go(ROUTES.chat);
    } catch (err) {
      console.log(err.reason);
    }
  }

  public async signUp(variables: SignUpReq) {
    try {
      await this.api.signUp(variables);
      router.go(ROUTES.signIn);
    } catch (err) {
      console.log(err.reason);
    }
  }

  public async getUser() {
    try {
      const res = await this.api.getUser();
      const avatar = res.avatar
        ? `https://ya-praktikum.tech/api/v2/resources${res.avatar}` : undefined;

      this.store.setState('user', { ...res, avatar });
    } catch (err) {
      console.log(err.reason);
    }
  }

  public async logout() {
    try {
      await this.api.logout();
      localStorage.removeItem(STORAGE_KEYS.isAuth);
      this.store.setState('user', undefined);
      router.go(ROUTES.signIn);
    } catch (err) {
      console.log(err.reason);
    }
  }
}
