import React from 'react';
import { render, Html } from '@shopify/react-html/server';
import { StaticRouter } from 'react-router';
import ShopifyAppProvider from '../app/components/ShopifyAppProvider';
import App from '../app/App';

const renderReactApp = (ctx, next) => {
  ctx.body = render(
    <Html scripts={[{ path: 'bundle.js' }]}>
      <StaticRouter location={ctx.url} context={{}}>
        <ShopifyAppProvider>
          <App />
        </ShopifyAppProvider>
      </StaticRouter>
    </Html>
  );

  next();
};

export default renderReactApp;
