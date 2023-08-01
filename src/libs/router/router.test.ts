import { expect } from 'chai';
import Router from './Router';
import { Settings, SignIn, SignUp } from '../../pages';
import { ROUTES } from '../../appConstants';

describe('ROUTER', () => {
  let app: HTMLElement;
  let router: Router;

  before(() => {
    app = document.createElement('div');
    app.setAttribute('id', 'root');
    document.body.append(app);
    router = new Router('#root');
  });

  it('use', () => {
    router
      .use(ROUTES.settings, Settings)
      .use(ROUTES.signIn, SignIn)
      .use(ROUTES.signUp, SignUp);

    expect(router.routes).to.have.lengthOf(3);
  });

  it('router is singleton', () => {
    const a = new Router('#root');
    const b = new Router('#root');

    expect(a).to.equal(b);
  });
});
