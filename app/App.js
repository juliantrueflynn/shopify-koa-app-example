import React from 'react';
import { AppProvider, Page, Layout, Card, TextStyle } from '@shopify/polaris';
import { Route } from 'react-router-dom';
import Cookies from 'js-cookie';

class App extends React.Component {
  state = {
    shopOrigin: Cookies.get('shopOrigin'),
  };

  render() {
    const { shopOrigin } = this.state;
    const { SHOPIFY_API_CLIENT_KEY } = process.env;

    const pagePrimaryAction = {
      content: 'Create Widget',
    };

    return (
      <AppProvider shopOrigin={shopOrigin} apiKey={SHOPIFY_API_CLIENT_KEY} forceRedirect>
        <Route path="/" render={() => (
          <Page title="Home" primaryAction={pagePrimaryAction}>
            <Layout>
              <Layout.Section>
                <Card title="Home Card">
                  <div>
                    <TextStyle variation="positive">
                      “All you need to paint is a few tools, a little instruction, and a vision in your mind.” 
                    </TextStyle>
                  </div>
                </Card>
              </Layout.Section>
            </Layout>
          </Page>
        )} />
      </AppProvider>
    );
  }
}

export default App;
