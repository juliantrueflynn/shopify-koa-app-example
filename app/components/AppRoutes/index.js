import React from 'react';
import * as PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import RoutePropagator from '@shopify/react-shopify-app-route-propagator';
import Home from '../Home';
import Settings from '../Settings';

class AppRoutes extends React.Component {
  static contextTypes = {
    polaris: PropTypes.object,
  };

  render() {
    return (
      <React.Fragment>
        <RoutePropagator location={this.props.location} app={this.context.polaris.appBridge} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" render={Settings} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(AppRoutes);
