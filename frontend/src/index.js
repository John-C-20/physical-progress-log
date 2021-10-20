import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root.jsx';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store; 
  store = configureStore();

  window.dispatchEvent = store.dispatch
  window.getState = store.getState

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root'))
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
