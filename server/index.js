import dotenv from 'dotenv';
import Koa from 'koa';
import session from 'koa-session';
import createShopifyAuth, { verifyRequest } from '@shopify/koa-shopify-auth';
import renderReactApp from './render-react-app';
import webpack from 'koa-webpack';

dotenv.config();
const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_CLIENT_KEY } = process.env;

const app = new Koa();

app.keys = [SHOPIFY_API_SECRET_KEY];

app
  .use(session(app))
  .use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_CLIENT_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['write_script_tags'],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.cookies.set('shopOrigin', shop, { httpOnly: false });

        console.log('We did it!', shop, accessToken);

        ctx.redirect('/');
      },
    })
  )
  .use(verifyRequest())
  .use(renderReactApp)
  .use(webpack());

export default app;
