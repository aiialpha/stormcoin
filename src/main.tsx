import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import WebApp from '@twa-dev/sdk'
import { BrowserRouter } from 'react-router-dom'
import  {MyProvider}  from './Context';
import './index.css'
WebApp.ready();
WebApp.expand();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </MyProvider>
  </React.StrictMode>,
)
