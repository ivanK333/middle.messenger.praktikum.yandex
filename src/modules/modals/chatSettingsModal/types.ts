import { Input, AvatarUpload } from '../../../components';
import { UserRes } from '../../../api/auth';

export type Props = {
  className?: string;
  classNameTitle?: string;
  avatar?: AvatarUpload;
  chatNameInput?: Input;
  users?: UserRes[] | [];
  userInputs?: Input[];
};
