import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);