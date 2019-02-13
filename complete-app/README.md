# Boilerplate Koa Shopify App

This is an updated example of Shopify's repo for the Unite 2018 app walkthrough. I found the tutorial very helpful, but some of the instructions were outdated and or not working. This repo will serve to be a revamped version of their demo Shopify app walkthrough. Also, it will be extended to include Polaris setup. Please note: I'm in no way affiliated with Shopify.

View the [original repo here](https://github.com/Shopify/unite-react-node-app-workshop).

## Setup

```bash
npm install
```

Start up Ngrok with port matching one set in `.env` and npm

```bash
./ngrok http 3000
npm start
```

Fill out `.env.example` with correct API information and rename to `.env`

Visit url with Shopify domain appended: `auth/inline?shop=your-shop-here.myshopi.com`. Which you are then redirected to Shopify to complete authorization. Clear cookies if there is a mistake on the way.
