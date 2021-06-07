import SignupFormContainer from 'containers/auth/SignupFormContainer';
import React from 'react';
import styled from 'styled-components';

interface SignupPageProps {}

const SignupPageBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignupPage: React.FC<SignupPageProps> = () => {
  return (
    <SignupPageBlock>
      <SignupFormContainer />
    </SignupPageBlock>
  );
};

export default SignupPage;
