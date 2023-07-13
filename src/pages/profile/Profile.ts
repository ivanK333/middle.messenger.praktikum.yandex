import {
  Input,
  Button,
  Link,
  Card,
  AvatarUpload,
  ButtonBack,
} from '../../components';
import template from './Profile.hbs';
import { AuthController, UserController } from '../../controllers';
import { Slide } from '../../layouts';
import { ProfileForm, Props as ProfileFormProps } from '../../forms/ProfileForm';
import { Props } from '.';
import styles from './styles.module.pcss';
import { Block } from '../../libs';
import { withStore, Store, State } from '../../store';
import { router } from '../../router';
import { ROUTES } from '../../appConstants';
import { User } from '../../types';

class BaseProfile extends Block<Props> {
  public authController: AuthController;

  public userController: UserController;

  constructor() {
    super({
      slide: new Slide({
        // @ts-ignore
        buttonBack: new ButtonBack({ events: { click: () => router.back() } }),
        card: new Card({
          children: new ProfileForm({
            avatar: new AvatarUpload({
              // @ts-ignore
              events: {
                change: (event: Event) => {
                  const file = (event.target as HTMLInputElement)?.files?.[0];
                  this.userController.updateAvatar(file);
                },
              },
            }),
            email: new Input({
              name: 'email',
              placeholder: 'email',
            }),
            login: new Input({
              name: 'login',
              placeholder: 'Login',
            }),
            first_name: new Input({
              name: 'first_name',
              placeholder: 'First name',
            }),
            second_name: new Input({
              name: 'second_name',
              placeholder: 'Second name',
            }),
            phone: new Input({
              name: 'phone',
              placeholder: 'Phone',
            }),
            display_name: new Input({
              name: 'display_name',
              placeholder: 'Chat name',
            }),
            save: new Button({
              view: 'default',
              children: 'Save',
              name: 'save',
              type: 'submit',
            }),
            change_password: new Link({
              children: 'Change password',
              // @ts-ignore
              events: {
                click: () => { router.go(ROUTES.changePassword); },
              },
            }),
            log_out: new Link({
              children: 'Log out',
              color: 'red',
              // @ts-ignore
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
  }

  public setCurrentValueUser(form: ProfileFormProps, user: User) {
    const {
      email,
      login,
      first_name,
      second_name,
      phone,
      display_name,
      avatar,
    } = form;

    avatar.setProps({
      src: user.avatar ? user.avatar : '',
    });
    email.setProps({
      value: user.email ? user.email : '',
    });
    login.setProps({
      value: user.login ? user.login : '',
    });
    first_name.setProps({
      value: user.first_name ? user.first_name : '',
    });
    second_name.setProps({
      value: user.second_name ? user.second_name : '',
    });
    phone.setProps({
      value: user.phone ? user.phone : '',
    });
    display_name.setProps({
      value: user.display_name ? user.display_name : '',
    });
  }

  componentDidMount() {
    const store = new Store();

    const { user } = store.getState();
    if (user) {
      const { slide } = this.props;
      const { card } = slide.props;
      const form = card.props.children.props as ProfileFormProps;

      this.setCurrentValueUser(form, user);
    }
  }

  render() {
    const { className, ...props } = this.props;

    return this.compile(template, { ...props, className: `${styles.main} ${className}` });
  }
}

const mapStateToProps = (state: State) => ({ ...state.user });

export const Profile = withStore(mapStateToProps)(BaseProfile as typeof Block);
