import React from 'react';
import { AppProvider } from '@shopify/polaris';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import AppRoutes from './components/AppRoutes';
import ShopifyLinkRouter from './components/ShopifyLinkRouter';

class App extends React.Component {
  state = {
    shopOrigin: Cookies.get('shopOrigin'),
  };

  render() {
    const { history } = this.props;
    const { shopOrigin } = this.state;
    const { SHOPIFY_API_CLIENT_KEY } = process.env;

    return (
      <AppProvider
        // eslint-disable-next-line no-undef
        apiKey={SHOPIFY_API_CLIENT_KEY}
        shopOrigin={shopOrigin}
        linkComponent={(urlProps) => <ShopifyLinkRouter history={history} {...urlProps} />}
        forceRedirect
      >
        <AppRoutes />
      </AppProvider>
    );
  }
}

export default withRouter(App);
