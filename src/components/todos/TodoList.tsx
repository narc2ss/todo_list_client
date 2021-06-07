import { Todo } from 'modules/todos/types';
import React from 'react';
import styled from 'styled-components';
import { Palette } from 'styles/palette';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onDelete: (todoId: number) => void;
  onToggle: (todoId: number) => void;
}

const TodoListBlock = styled.ul`
  flex: 1;
  margin: 0;
  padding: 0;
  overflow: auto;
  li + li {
    border-top: 1px solid ${Palette.primary};
  }
  h1 {
    margin: 4rem 0;
    text-align: center;
  }
`;

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
      {todos.length === 0 && <h1>Empty</h1>}
    </TodoListBlock>
  );
};

export default TodoList;
