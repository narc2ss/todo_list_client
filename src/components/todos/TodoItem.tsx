import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { IoMdRemoveCircle } from 'react-icons/io';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { Todo } from 'modules/todos/types';

interface TodoItemProps {
  todo: Todo;
  onDelete: (todoId: number) => void;
  onToggle: (todoId: number) => void;
}
type TodoItemBlockProps = {
  active: boolean;
};
const TodoItemBlock = styled.li<TodoItemBlockProps>`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    svg {
      margin-right: 1rem;
    }
    h2 {
      margin: 0;
    }
  }
  svg {
    font-size: 2rem;
    cursor: pointer;
  }

  ${(props) =>
    props.active &&
    css`
      h2 {
        text-decoration: line-through;
        color: #666;
      }
    `}
`;

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <TodoItemBlock active={todo.active}>
      <div className="content">
        {todo.active ? (
          <ImCheckboxChecked onClick={() => onToggle(todo.id)} />
        ) : (
          <ImCheckboxUnchecked onClick={() => onToggle(todo.id)} />
        )}
        <h2>{todo.content}</h2>
      </div>
      <IoMdRemoveCircle onClick={() => onDelete(todo.id)} />
    </TodoItemBlock>
  );
};

export default memo(TodoItem);
