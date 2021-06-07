import React from 'react';
import styled from 'styled-components';
import { IoMdRemoveCircle } from 'react-icons/io';

interface TodoItemProps {}

const TodoItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  h2 {
    flex: 1;
    margin: 0;
  }
  svg {
    font-size: 2rem;
  }
`;

const TodoItem: React.FC<TodoItemProps> = () => {
  return (
    <TodoItemBlock>
      <h2>todo item</h2>
      <IoMdRemoveCircle />
    </TodoItemBlock>
  );
};

export default TodoItem;
