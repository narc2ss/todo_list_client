import React from 'react';
import styled from 'styled-components';
import { Palette } from 'styles/palette';
import TodoItem from './TodoItem';

interface TodoListProps {}

const TodoListBlock = styled.ul`
  flex: 1;
  margin: 0;
  padding: 0;
  overflow: auto;
  li + li {
    border-top: 1px solid ${Palette.primary};
  }
`;

const TodoList: React.FC<TodoListProps> = () => {
  return (
    <TodoListBlock>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoListBlock>
  );
};

export default TodoList;
