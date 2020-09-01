import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { saveState } from './utils';
import throttle from 'lodash/throttle';

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
      username: store.getState().username,
    });
  }, 1000),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
