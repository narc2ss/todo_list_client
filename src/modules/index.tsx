import { combineReducers } from 'redux';
import { userReducer as user, userSaga } from './user/userReducer';
import { all } from 'redux-saga/effects';
import { UserState } from './user/types';

interface RootState {
  user: UserState;
}
export const rootReducer = combineReducers<RootState>({ user });
// export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([userSaga()]);
}
