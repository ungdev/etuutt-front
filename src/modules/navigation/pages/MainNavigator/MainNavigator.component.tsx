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
          <Route exact path={PATHS.EVENT_PAGE.ROUTE}>
            <EventPage />
          </Route>
          <Route exact path={PATHS.STUDENT_LIFE_PAGE.ROUTE}>
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
