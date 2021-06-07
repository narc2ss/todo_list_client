import SignupForm from 'components/auth/SignupForm';
import { ISignupForm } from 'modules/user/types';
import { postUserAction } from 'modules/user/userReducer';
import React from 'react';
import { useDispatch } from 'react-redux';

interface SignupFormContainerProps {}

const SignupFormContainer: React.FC<SignupFormContainerProps> = () => {
  const dispatch = useDispatch();

  const onSignup = (signupForm: ISignupForm) => {
    dispatch(postUserAction(signupForm));
  };
  return <SignupForm onSignup={onSignup} />;
};

export default SignupFormContainer;
