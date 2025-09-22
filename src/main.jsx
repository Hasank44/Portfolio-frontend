
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import MessageContext from './Context/MessageContext';
import DataProvider from './Context/DataProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MessageContext>
        <DataProvider>
          <App />
        </DataProvider>
      </MessageContext>
    </BrowserRouter>
  </React.StrictMode>
);