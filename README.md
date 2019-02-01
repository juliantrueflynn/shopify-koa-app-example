# Polaris Page Title Issue

Demo repo for fixing Polaris page header/title error (maybe bug).

## Steps to recreate issue

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

You are now able to see issue with HTML element `Polaris-Page-Header` swallowing up all page content. For more information [see this GitHub ticket](https://github.com/Shopify/polaris-react/issues/824#issuecomment-454571430).