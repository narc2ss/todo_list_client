import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { ILoginForm, ISignupForm, UserAction, UserState } from './types';
import * as userApi from 'api/userApi';
import NotifyUtils from 'utils/NotifyUtils';
import history from 'utils/HistoryUtils';

const POST_USER = 'POST_USER' as const;

const USER_LOGIN = 'USER_LOGIN' as const;
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS' as const;

const GET_USER_PROFILE = 'GET_USER_PROFILE' as const;
const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS' as const;
const GET_USER_PROFILE_ERROR = 'GET_USER_PROFILE_ERROR' as const;

const LOG_OUT = 'LOG_OUT' as const;
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS' as const;

export const postUserAction = (signupform: ISignupForm) => ({
  type: POST_USER,
  signupform,
});

export const loginAction = (loginForm: ILoginForm) => ({
  type: USER_LOGIN,
  loginForm,
});
export const loginSuccessAction = () => ({
  type: USER_LOGIN_SUCCESS,
});

export const getUserProfileAction = () => ({ type: GET_USER_PROFILE });
export const getUserProfileSuccessAction = (profile: any) => ({
  type: GET_USER_PROFILE_SUCCESS,
  profile,
});
export const getUserProfileErrorAction = () => ({
  type: GET_USER_PROFILE_ERROR,
});

export const logoutAction = () => ({ type: LOG_OUT });
export const logoutSuccessAction = () => ({ type: LOG_OUT_SUCCESS });

function* postUserSaga(action: ReturnType<typeof postUserAction>) {
  console.log(action.signupform);
  try {
    const res: AxiosResponse = yield call(userApi.postUser, action.signupform);
    if (res.status !== 201) return NotifyUtils.error('Error Occurred.');
    NotifyUtils.success('User creation succeeded.');
    history.push('/');
  } catch (error) {
    NotifyUtils.error(error.response.data.message);
  }
}

function* loginSaga(action: ReturnType<typeof loginAction>) {
  try {
    const { status }: AxiosResponse = yield call(
      userApi.login,
      action.loginForm
    );
    if (status !== 200) return NotifyUtils.error('Error Occurred.');

    yield put(loginSuccessAction());
    history.push('/todos');
  } catch (error) {
    NotifyUtils.error(error.response.data.message);
    // TODO: call refresh token api
  }
}

function* getUserProfileSaga() {
  try {
    const res: AxiosResponse = yield call(userApi.getUserProfile);
    yield put(getUserProfileSuccessAction(res.data));
  } catch (error) {
    // NotifyUtils.error(error.response.data.message);
    console.error(error);
    yield put(getUserProfileErrorAction());
  }
}

function* logoutSaga() {
  try {
    const res: AxiosResponse = yield call(userApi.logout);

    if (res.status !== 201) return NotifyUtils.error(res.statusText);

    yield put(logoutSuccessAction());
    history.push('/');
  } catch (error) {
    NotifyUtils.error(error.response.data.message);
  }
}

export function* userSaga() {
  yield takeEvery(POST_USER, postUserSaga);
  yield takeEvery(USER_LOGIN, loginSaga);
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
  yield takeEvery(LOG_OUT, logoutSaga);
}

const initialState: UserState = {
  profile: null,
};

export function userReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { ...state };
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, profile: action.profile };
    case LOG_OUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
