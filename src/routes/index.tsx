import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/home';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routes;
