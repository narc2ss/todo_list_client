import {
  loginAction,
  postUserAction,
  loginSuccessAction,
  getUserProfileAction,
  getUserProfileSuccessAction,
} from './userReducer';

export interface UserState {}

export type UserAction =
  | ReturnType<typeof loginAction>
  | ReturnType<typeof postUserAction>
  | ReturnType<typeof loginSuccessAction>
  | ReturnType<typeof getUserProfileAction>
  | ReturnType<typeof getUserProfileSuccessAction>;

export interface ILoginForm {
  username: string;
  password: string;
}

export interface ISignupForm extends ILoginForm {
  passwordCheck?: string;
}

export interface IUserInfo {
  id: number;
  username: string;
}
