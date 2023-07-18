import {
  Input,
  Button,
  Link,
  Card,
  AvatarUpload,
  ButtonBack,
} from '../../components';
import template from './Settings.hbs';
import { AuthController, UserController } from '../../controllers';
import { Slide } from '../../layouts';
import { SettingsForm } from '../../forms';
import { Props } from '.';
import styles from './styles.module.pcss';
import { BlockWithStore } from '../../libs';
import { State } from '../../store';
import { router } from '../../router';
import { ROUTES } from '../../appConstants';
import { UserRes } from '../../api/auth';

export class Settings extends BlockWithStore<Props> {
  public authController: AuthController;

  public userController: UserController;

  constructor() {
    super({
      slide: new Slide({
        buttonBack: new ButtonBack({
          events: {
            click: () => router.back(),
          },
        }),
        card: new Card({
          children: new SettingsForm({
            avatarInput: new AvatarUpload({
              events: {
                change: (event: Event) => {
                  const file = (event.target as HTMLInputElement)?.files?.[0];
                  this.userController.updateAvatar(file);
                },
              },
            }),
            emailInput: new Input({
              name: 'email',
              placeholder: 'email',
            }),
            loginInput: new Input({
              name: 'login',
              placeholder: 'Login',
            }),
            firstNameInput: new Input({
              name: 'first_name',
              placeholder: 'First name',
            }),
            secondNameInput: new Input({
              name: 'second_name',
              placeholder: 'Second name',
            }),
            phoneInput: new Input({
              name: 'phone',
              placeholder: 'Phone',
            }),
            displayNameInput: new Input({
              name: 'display_name',
              placeholder: 'Chat name',
            }),
            save: new Button({
              view: 'default',
              children: 'Save',
              name: 'save',
              type: 'submit',
            }),
            changePasswordInput: new Link({
              children: 'Change password',
              events: {
                click: () => { router.go(ROUTES.changePassword); },
              },
            }),
            logOut: new Link({
              children: 'Log out',
              color: 'red',
              events: {
                click: () => { this.authController.logout(); },
              },
            }),
          }),
        }),
      }),
    }, 'main');

    this.authController = new AuthController();
    this.userController = new UserController();

    this.authController.getUser();
    const mapStateToProps = (state: State) => ({ ...state.user });
    this.withStore(mapStateToProps);
  }

  private setCurrentValueUser(user: UserRes) {
    const { slide } = this.props;
    const { card } = slide.props;

    card.setProps({
      children: new SettingsForm({
        avatarInput: new AvatarUpload({
          src: user.avatar ? user.avatar : '',
          events: {
            change: (event: Event) => {
              const file = (event.target as HTMLInputElement)?.files?.[0];
              this.userController.updateAvatar(file);
            },
          },
        }),
        emailInput: new Input({
          name: 'email',
          placeholder: 'email',
          value: user.email ? user.email : '',
        }),
        loginInput: new Input({
          name: 'login',
          placeholder: 'Login',
          value: user.login ? user.login : '',
        }),
        firstNameInput: new Input({
          name: 'first_name',
          placeholder: 'First name',
          value: user.first_name ? user.first_name : '',
        }),
        secondNameInput: new Input({
          name: 'second_name',
          placeholder: 'Second name',
          value: user.second_name ? user.second_name : '',
        }),
        phoneInput: new Input({
          name: 'phone',
          placeholder: 'Phone',
          value: user.phone ? user.phone : '',
        }),
        displayNameInput: new Input({
          name: 'display_name',
          placeholder: 'Chat name',
          value: user.display_name ? user.display_name : '',
        }),
        save: new Button({
          view: 'default',
          children: 'Save',
          name: 'save',
          type: 'submit',
        }),
        changePasswordInput: new Link({
          children: 'Change password',
          events: {
            click: () => { router.go(ROUTES.changePassword); },
          },
        }),
        logOut: new Link({
          children: 'Log out',
          color: 'red',
          events: {
            click: () => { this.authController.logout(); },
          },
        }),
      }),
    });
  }

  componentDidMount() {
    const store = this?.store?.getState();

    if (store?.user) {
      this.setCurrentValueUser(store?.user);
    }
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.main} ${className}` });
  }
}
