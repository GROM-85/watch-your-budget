import React from 'react';
import ReactDOM from 'react-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { persistor, store } from 'redux/store';
import { App } from 'components/App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="watch-your-budget">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
