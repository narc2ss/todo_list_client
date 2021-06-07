import React from 'react';
import Header from 'components/common/Header';
import { useDispatch } from 'react-redux';
import { logoutAction } from 'modules/user/userReducer';

interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutAction());
  };

  return <Header onLogout={onLogout} />;
};

export default HeaderContainer;
