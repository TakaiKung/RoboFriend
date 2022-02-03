import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { searchRobots, requestRobots } from './stateManage/reducer';
import thunk from 'redux-thunk';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots}) 
const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
