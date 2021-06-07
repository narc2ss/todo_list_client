import { combineReducers } from 'redux';
import { userReducer as user, userSaga } from './user/userReducer';
import { todosReducer as todos, todosSaga } from './todos/todosReducer';
import { all } from 'redux-saga/effects';
import { UserState } from './user/types';
import { Todo } from './todos/types';

export interface RootState {
  user: UserState;
  todos: Todo[];
}
export const rootReducer = combineReducers<RootState>({ user, todos });
// export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([userSaga(), todosSaga()]);
}
