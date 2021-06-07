import React from 'react';
import LoginForm from 'components/auth/LoginForm';
import { useDispatch } from 'react-redux';
import { loginAction } from 'modules/user/userReducer';
import { ILoginForm } from 'modules/user/types';

interface LoginFormContainerProps {}

const LoginFormContainer: React.FC<LoginFormContainerProps> = () => {
  const dispatch = useDispatch();

  const onLogin = (loginForm: ILoginForm) => {
    dispatch(loginAction(loginForm));
  };
  return <LoginForm onLogin={onLogin} />;
};

export default LoginFormContainer;
