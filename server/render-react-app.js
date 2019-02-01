import React from 'react';
import { render, Html } from '@shopify/react-html/server';
import { StaticRouter } from 'react-router';
import App from '../app/App';

const renderReactApp = (ctx, next) => {
  const stylesheet = (
    <link
      rel="stylesheet"
      href="https://sdks.shopifycdn.com/polaris/latest/polaris.css"
    />
  );

  ctx.body = render(
    <Html scripts={[{ path: 'bundle.js' }]} headMarkup={stylesheet}>
      <StaticRouter location={ctx.url} context={{}}>
        <App />
      </StaticRouter>
    </Html>
  );

  next();
};

export default renderReactApp;
