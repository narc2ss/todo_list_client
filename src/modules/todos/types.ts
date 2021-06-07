import {
  addTodoAction,
  addTodoSuccessAction,
  deleteTodoAction,
  deleteTodoSuccessAction,
  getTodosAction,
  getTodosSuccessAction,
  toggleTodoAction,
  toggleTodoSuccessAction,
} from './todosReducer';

export type TodosState = Todo[];

export type TodosAction =
  | ReturnType<typeof addTodoAction>
  | ReturnType<typeof addTodoSuccessAction>
  | ReturnType<typeof getTodosAction>
  | ReturnType<typeof getTodosSuccessAction>
  | ReturnType<typeof deleteTodoAction>
  | ReturnType<typeof deleteTodoSuccessAction>
  | ReturnType<typeof toggleTodoAction>
  | ReturnType<typeof toggleTodoSuccessAction>;

export interface IAddTodo {
  content: string;
}

export interface Todo {
  id: number;
  content: string;
  active: boolean;
}
