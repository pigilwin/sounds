import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './store/store';
import { Context } from './lib/Context';
import { database } from './lib/database';
import { Audio } from './audio/audio';


(async () => {
  Context.load(await database(), new Audio(new AudioContext()));
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
