import { Route } from '.';
import { BlockConstructor } from '../block';
import { ROUTES, STORAGE_KEYS } from '../../appConstants';

export class Router {
  private static __instance: Router | null;

  public history: History;

  private _rootQuery: string;

  public routes: Route[];

  constructor(rootQuery: string) {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: BlockConstructor, isPrivate: boolean = false) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery, isPrivate });
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event) => {
      if ((event.currentTarget as Window)?.location?.pathname) {
        this._onRoute((event.currentTarget as Window).location.pathname);
      }
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (route) {
      const isAuth = Router._checkIsAuth();

      if (ROUTES.notFound !== pathname) {
        if (route.isPrivate && !isAuth) {
          this.go(ROUTES.signIn);
          return;
        }

        if (!route.isPrivate && isAuth) {
          this.go(ROUTES.chat);
          return;
        }
      }

      if (route.match(window.location.pathname)) {
        route.render();
      }
      return;
    }
    this.go(ROUTES.notFound);
  }

  private static _checkIsAuth(): boolean {
    return localStorage.getItem(STORAGE_KEYS.isAuth) === 'true';
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back(num?: number) {
    if (!num) {
      this.history.back();
      return;
    }
    this.history.go(num);
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
