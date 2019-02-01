import React from 'react';
import { renderToString } from 'react-dom/server';
import HTML from '@shopify/react-html';
import { StaticRouter } from 'react-router';
import ShopifyAppProvider from '../app/components/ShopifyAppProvider';
import App from '../app/App';

export default (ctx, next) => {
  ctx.body = renderToString(
    <HTML deferedScripts={[{ path: 'bundle.js' }]}>
      <StaticRouter location={ctx.url} context={{}}>
        <ShopifyAppProvider>
          <App />
        </ShopifyAppProvider>
      </StaticRouter>
    </HTML>
  );

  next();
};