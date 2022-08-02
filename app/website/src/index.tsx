// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import 'antd/dist/antd.min.css';

import App from './App';

import './mock/index'



// import request from '@wrq/apis';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
