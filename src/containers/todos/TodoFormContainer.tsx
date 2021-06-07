import React from 'react';
import TodoForm from 'components/todos/TodoForm';
import { IAddTodo } from 'modules/todos/types';
import { useDispatch } from 'react-redux';
import { addTodoAction } from 'modules/todos/todosReducer';

interface TodoFormContainerProps {}

const TodoFormContainer: React.FC<TodoFormContainerProps> = () => {
  const dispatch = useDispatch();

  const onAddTodo = (todo: IAddTodo) => {
    dispatch(addTodoAction(todo));
  };
  return <TodoForm onAddTodo={onAddTodo} />;
};

export default TodoFormContainer;
