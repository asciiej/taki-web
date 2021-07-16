import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Redirect to="/login" />
  </Switch>
);

export default Routes;
