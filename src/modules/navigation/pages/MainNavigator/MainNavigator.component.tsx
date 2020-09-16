import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../../../home/pages';
import { PATHS } from '../../services';

export const MainNavigator: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={PATHS.ROOT_PAGE.ROUTE}>
          <HomePage />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
};
