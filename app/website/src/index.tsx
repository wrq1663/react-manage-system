// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import 'antd/dist/antd.min.css';

import App from './App';
import store from 'store';

import './mock/index'


// import request from '@wrq/apis';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
