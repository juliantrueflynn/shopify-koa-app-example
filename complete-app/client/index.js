import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { showPage } from '@shopify/react-html';
import ShopifyAppProvider from '../app/components/ShopifyAppProvider';
import App from '../app/App';

ReactDOM.hydrate(
  <BrowserRouter>
    <ShopifyAppProvider>
      <App />
    </ShopifyAppProvider>
  </BrowserRouter>,
  document.getElementById('app')
);

showPage();
