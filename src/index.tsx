import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './App';
import reducer from './reducers/hello.reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, {}, devToolsEnhancer({}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
