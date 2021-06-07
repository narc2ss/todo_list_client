import Button from 'components/common/Button';
import Input from 'components/common/Input';
import useInputs from 'hooks/useInputs';
import React from 'react';
import styled from 'styled-components';
import { ILoginForm } from 'modules/user/types';
import { Palette } from 'styles/palette';
import { Link } from 'react-router-dom';
import NotifyUtils from 'utils/NotifyUtils';

interface LoginFormProps {
  onLogin: (loginForm: ILoginForm) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [inputs, onChange] = useInputs<ILoginForm>({
    username: '',
    password: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputs.username === '')
      return NotifyUtils.error('User name field is empty');
    if (inputs.password === '')
      return NotifyUtils.error('Password field is empty');

    onLogin(inputs);
  };

  return (
    <LoginFormBlock>
      <h1>Sign in</h1>
      <form onSubmit={onSubmit}>
        <Input
          name="username"
          value={inputs.username}
          onChange={onChange}
          placeholder="User name"
        />
        <Input
          type="password"
          name="password"
          value={inputs.password}
          onChange={onChange}
          placeholder="Password"
        />
        <Button type="submit">GO!</Button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </LoginFormBlock>
  );
};

export default LoginForm;

export const LoginFormBlock = styled.div`
  background-color: ${Palette.secondary};
  width: 500px;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 1.5rem rgba(0, 0, 0, 0.3);
  h1 {
    margin: 0 0 2rem 0;
    text-align: center;
    color: ${Palette.primaryTextColor};
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 100%;
    }
    button {
      padding: 0.5rem 2rem;
      border-radius: 1.5rem;
    }
    & > * + * {
      margin-top: 2rem;
    }
  }

  p {
    text-align: center;
    margin: 2rem 0 0;
    a {
      font-weight: bold;
      color: ${Palette.primartTextHover};
    }
  }
`;
