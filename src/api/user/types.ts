import { UserRes } from '../auth';

export type UserAvatarUploadReq = FormData;

export type ChangePasswordReq = {
  oldPassword: string,
  newPassword: string,
};

export type UserProfileChangeReq = {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string,
};

export type UserProfileChangeRes = UserRes;
