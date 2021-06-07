import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { IAddTodo, Todo, TodosAction, TodosState } from './types';
import * as todosApi from 'api/todosApi';
import NotifyUtils from 'utils/NotifyUtils';
import history from 'utils/HistoryUtils';

const GET_TODOS = 'GET_TODOS' as const;
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS' as const;

const ADD_TODO = 'ADD_TODO' as const;
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS' as const;

const DELETE_TODO = 'DELETE_TODO' as const;
const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS' as const;

const TOGGLE_TODO = 'TOGGLE_TODO' as const;
const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS' as const;

export const getTodosAction = () => ({ type: GET_TODOS });
export const getTodosSuccessAction = (todos: Todo[]) => ({
  type: GET_TODOS_SUCCESS,
  todos,
});

export const addTodoAction = (todo: IAddTodo) => ({ type: ADD_TODO, todo });
export const addTodoSuccessAction = (todos: Todo[]) => ({
  type: ADD_TODO_SUCCESS,
  todos,
});

export const deleteTodoAction = (todoId: number) => ({
  type: DELETE_TODO,
  todoId,
});
export const deleteTodoSuccessAction = (todos: Todo[]) => ({
  type: DELETE_TODO_SUCCESS,
  todos,
});

export const toggleTodoAction = (todoId: number) => ({
  type: TOGGLE_TODO,
  todoId,
});
export const toggleTodoSuccessAction = (todos: Todo[]) => ({
  type: TOGGLE_TODO_SUCCESS,
  todos,
});

function* getTodosSaga() {
  try {
    const res: AxiosResponse = yield call(todosApi.getTodos);

    if (res.status !== 200) return NotifyUtils.error('Server Error');

    yield put(getTodosSuccessAction(res.data as Todo[]));
  } catch (error) {
    NotifyUtils.error(error.response.data.message);
    history.push('/');
  }
}

function* addTodoSaga(action: ReturnType<typeof addTodoAction>) {
  try {
    const res: AxiosResponse = yield call(todosApi.addTodo, action.todo);

    if (res.status !== 201) return NotifyUtils.error(res.statusText);

    yield put(addTodoSuccessAction(res.data as Todo[]));
  } catch (error) {
    NotifyUtils.error(error.response.data.message);
  }
}

function* deleteTodoSaga(action: ReturnType<typeof deleteTodoAction>) {
  try {
    const res: AxiosResponse = yield call(todosApi.deleteTodo, action.todoId);

    if (res.status !== 200) return NotifyUtils.error(res.statusText);

    yield put(deleteTodoSuccessAction(res.data as Todo[]));
  } catch (error) {
    NotifyUtils.error(error.response.data.message);
  }
}

function* toggleTodoSaga(action: ReturnType<typeof toggleTodoAction>) {
  try {
    const res: AxiosResponse = yield call(todosApi.toggleTodo, action.todoId);

    if (res.status !== 200) return NotifyUtils.error(res.statusText);

    yield put(toggleTodoSuccessAction(res.data));
  } catch (error) {
    NotifyUtils.error(error.response.data.message);
  }
}

export function* todosSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga);
  yield takeEvery(ADD_TODO, addTodoSaga);
  yield takeEvery(DELETE_TODO, deleteTodoSaga);
  yield takeEvery(TOGGLE_TODO, toggleTodoSaga);
}

const initialState: TodosState = [];

export function todosReducer(state = initialState, action: TodosAction) {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
    case ADD_TODO_SUCCESS:
    case DELETE_TODO_SUCCESS:
    case TOGGLE_TODO_SUCCESS:
      return action.todos;
    default:
      return state;
  }
}
