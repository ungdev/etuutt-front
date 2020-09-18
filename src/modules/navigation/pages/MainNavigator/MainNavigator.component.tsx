import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from '../../../../components';
import { EventPage } from '../../../Event/pages';
import { HomePage } from '../../../home/pages';
import { LifeStudentPage } from '../../../life_student/pages';
import { PATHS } from '../../services';

export const MainNavigator: FunctionComponent = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={PATHS.ROOT_PAGE.ROUTE}>
            <HomePage />
          </Route>
          <Route exact path="/evenement">
            <EventPage />
          </Route>
          <Route exact path="/vie_etudiante">
            <LifeStudentPage />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
