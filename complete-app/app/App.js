import React from 'react';
import { Page, Link } from '@shopify/polaris';
import * as PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import RoutePropagator from '@shopify/react-shopify-app-route-propagator';

class App extends React.Component {
  static contextTypes = {
    polaris: PropTypes.object,
  };

  render() {
    return (
      <React.Fragment>
        <RoutePropagator location={this.props.location} app={this.context.polaris.appBridge} />
        <Switch>
          <Route exact path="/" render={() => (
            <Page title="Hello" primaryAction={{
              content: 'Create new bar',
              onAction: () => console.log('WIN')
            }}>
              <div>
                <Link url="/test">Test</Link>
              </div>
            </Page>
          )} />
          <Route exact path="/test" render={() => (
            <Page title="Test" primaryAction={{
              content: 'Create new bar',
              onAction: () => console.log('WIN')
            }}>
              <Link url="/">Home</Link>
            </Page>
          )} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
