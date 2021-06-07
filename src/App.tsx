import SignupPage from 'pages/SignupPage';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import Footer from './components/common/Footer';
import LoginPage from './pages/LoginPage';
import TodosPage from './pages/TodosPage';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { getUserProfileAction } from 'modules/user/userReducer';
import HeaderContainer from 'containers/common/HeaderContainer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);
  return (
    <AppBlock>
      <ToastContainer />
      <HeaderContainer />
      <Switch>
        <Route path="/todos" component={TodosPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
      <Footer />
    </AppBlock>
  );
}

export default App;

const AppBlock = styled.div`
  width: 100%;
  min-width: 320px;
  height: 100vh;
  background: rgb(49, 52, 66);
  background: linear-gradient(
    142deg,
    rgba(49, 52, 66, 1) 0%,
    rgba(62, 62, 107, 1) 0%,
    rgba(40, 45, 63, 1) 100%
  );

  display: flex;
  flex-direction: column;
`;
