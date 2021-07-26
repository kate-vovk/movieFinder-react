// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM, { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { App } from './app/App';
// import { store } from './src/store/store';

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('root'),
);
