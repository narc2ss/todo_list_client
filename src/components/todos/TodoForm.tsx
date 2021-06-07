import React from 'react';
import styled from 'styled-components';
import { IoMdAdd } from 'react-icons/io';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { IAddTodo } from 'modules/todos/types';
import useInputs from 'hooks/useInputs';
import NotifyUtils from 'utils/NotifyUtils';

interface TodoFormProps {
  onAddTodo: (todo: IAddTodo) => void;
}

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

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [inputs, onChange, onReset] = useInputs({ content: '' });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputs.content === '') return NotifyUtils.error('content is empty');

    onAddTodo(inputs);

    onReset();
  };
  return (
    <TodoFormBlock>
      <form onSubmit={onSubmit}>
        <Input
          name="content"
          value={inputs.content}
          onChange={onChange}
          placeholder="Enter to do"
        />
        <Button>
          <IoMdAdd />
        </Button>
      </form>
    </TodoFormBlock>
  );
};

export default TodoForm;
