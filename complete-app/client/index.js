import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ShopifyAppProvider from '../app/components/ShopifyAppProvider';
import App from '../app/App';

ReactDOM.hydrate(
  <BrowserRouter>
    <ShopifyAppProvider>
      <App />
    </ShopifyAppProvider>
  </BrowserRouter>,
document.getElementById('app'));