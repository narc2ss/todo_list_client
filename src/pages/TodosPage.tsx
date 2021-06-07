import React from 'react';
import styled from 'styled-components';
import TodoFormContainer from 'containers/todos/TodoFormContainer';
import TodoListContainer from 'containers/todos/TodoListContainer';
import { Palette } from 'styles/palette';

interface TodosPageProps {}

const TodosPageBlock = styled.div`
  flex: 1;
  width: 70%;
  margin: 4rem auto;
  background-color: ${Palette.secondary};
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const TodosPage: React.FC<TodosPageProps> = () => {
  return (
    <TodosPageBlock>
      <TodoFormContainer />
      <TodoListContainer />
    </TodosPageBlock>
  );
};

export default TodosPage;
