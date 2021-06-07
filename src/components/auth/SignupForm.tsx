import Button from 'components/common/Button';
import Input from 'components/common/Input';
import useInputs from 'hooks/useInputs';
import { ISignupForm } from 'modules/user/types';
import React from 'react';
import { Link } from 'react-router-dom';
import NotifyUtils from 'utils/NotifyUtils';
import { LoginFormBlock } from './LoginForm';

interface SignupFormProps {
  onSignup: (signupForm: ISignupForm) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [inputs, onChange] = useInputs<ISignupForm>({
    username: '',
    password: '',
    passwordCheck: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputs.username === '')
      return NotifyUtils.error('Username field is empty');
    if (inputs.password === '' && inputs.passwordCheck === '')
      return NotifyUtils.error('Password field is empty');
    if (inputs.password !== inputs.passwordCheck)
      return NotifyUtils.error('password is not same.');

    delete inputs.passwordCheck;

    onSignup(inputs);
  };
  return (
    <LoginFormBlock>
      <h1>Create account</h1>
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
          placeholder="password"
        />
        <Input
          type="password"
          name="passwordCheck"
          value={inputs.passwordCheck}
          onChange={onChange}
          placeholder="password check"
        />
        <Button type="submit">Submit</Button>
      </form>
      <p>
        Do you already have an account? <Link to="/">Sign in</Link>
      </p>
    </LoginFormBlock>
  );
};

export default SignupForm;
