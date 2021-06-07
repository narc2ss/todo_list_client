import React from 'react';
import styled from 'styled-components';
import LoginFormContainer from 'containers/auth/LoginFormContainer';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <LoginPageBlock>
      <LoginFormContainer />
    </LoginPageBlock>
  );
};

export default LoginPage;

const LoginPageBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
