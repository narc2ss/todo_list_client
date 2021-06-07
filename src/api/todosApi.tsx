import axios from 'api/defaultClient';
import { IAddTodo } from 'modules/todos/types';

export const addTodo = (todo: IAddTodo) => {
  return axios.post('/todos', todo);
};

export const getTodos = () => {
  return axios.get('/todos');
};

export const deleteTodo = (todoId: number) => {
  return axios.delete(`/todos/${todoId}`);
};

export const toggleTodo = (todoId: number) => {
  return axios.patch(`/todos/${todoId}`);
};
