import React from 'react';
import { AppProvider } from '@shopify/polaris';
import Cookies from 'js-cookie';
import AppRoutes from './components/AppRoutes';

class App extends React.Component {
  state = {
    shopOrigin: Cookies.get('shopOrigin'),
  };

  render() {
    const { shopOrigin } = this.state;
    const { SHOPIFY_API_CLIENT_KEY } = process.env;

    return (
      // eslint-disable-next-line no-undef
      <AppProvider shopOrigin={shopOrigin} apiKey={SHOPIFY_API_CLIENT_KEY} forceRedirect>
        <AppRoutes />
      </AppProvider>
    );
  }
}

export default App;
