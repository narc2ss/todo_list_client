import React from 'react';
import TodoList from 'components/todos/TodoList';

interface TodoListContainerProps {}

const TodoListContainer: React.FC<TodoListContainerProps> = () => {
  return <TodoList />;
};

export default TodoListContainer;
