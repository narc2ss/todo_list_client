import React from 'react';
import styled from 'styled-components';
import { IoMdAdd } from 'react-icons/io';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

interface TodoFormProps {}

const TodoFormBlock = styled.div`
  form {
    display: flex;

    button,
    input {
      border: none;
      border-radius: 0;
    }
    input {
      flex: 1;
      border-radius: 1rem 0 0 0;
      font-size: 2rem;
      padding: 1rem 2rem;
      &:focus {
        border: none;
      }
    }
    button {
      border-radius: 0 1rem 0 0;
      padding: 0 2rem;
      svg {
        font-size: 2rem;
      }
    }
  }
`;

const TodoForm: React.FC<TodoFormProps> = () => {
  return (
    <TodoFormBlock>
      <form>
        <Input placeholder="Enter to do" />
        <Button>
          <IoMdAdd />
        </Button>
      </form>
    </TodoFormBlock>
  );
};

export default TodoForm;
