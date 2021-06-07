import React, { useCallback, useEffect } from 'react';
import TodoList from 'components/todos/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodoAction,
  getTodosAction,
  toggleTodoAction,
} from 'modules/todos/todosReducer';
import { RootState } from 'modules';

interface TodoListContainerProps {}

const TodoListContainer: React.FC<TodoListContainerProps> = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    dispatch(getTodosAction());
  }, [dispatch]);

  const onDelete = useCallback(
    (todoId: number) => {
      dispatch(deleteTodoAction(todoId));
    },
    [dispatch]
  );

  const onToggle = useCallback(
    (todoId: number) => {
      dispatch(toggleTodoAction(todoId));
    },
    [dispatch]
  );

  return <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />;
};

export default TodoListContainer;
