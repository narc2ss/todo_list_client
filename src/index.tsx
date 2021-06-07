import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import { rootReducer, rootSaga } from './modules';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/GlobalStyle';
import dotenv from 'dotenv';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import history from 'utils/HistoryUtils';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;

let store;
const sagaMiddleware = createSagaMiddleware();
if (NODE_ENV === 'development') {
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
