import {
  loginAction,
  postUserAction,
  loginSuccessAction,
  getUserProfileAction,
  getUserProfileSuccessAction,
  logoutAction,
  logoutSuccessAction,
} from './userReducer';

export interface UserState {
  profile: IUserProfile | null;
}

interface IUserProfile {
  id: number;
  username: string;
}

export type UserAction =
  | ReturnType<typeof loginAction>
  | ReturnType<typeof postUserAction>
  | ReturnType<typeof loginSuccessAction>
  | ReturnType<typeof getUserProfileAction>
  | ReturnType<typeof getUserProfileSuccessAction>
  | ReturnType<typeof logoutAction>
  | ReturnType<typeof logoutSuccessAction>;

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
