import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from '../../../../components';
import { HomePage } from '../../../home/pages';
import { PATHS } from '../../services';

export const MainNavigator: FunctionComponent = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={PATHS.ROOT_PAGE.ROUTE}>
            <HomePage />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
