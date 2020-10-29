import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from '../../../../components';
import { EventPage } from '../../../Event/pages';
import { HomePage } from '../../../home/pages';
import { ServicePage } from '../../../services/ServicePage';
import { TeamPage } from '../../../Team/TeamPage';
import { GDPRPage } from '../../../GDPR/GDPRPage';
import { BugPage } from '../../../Bug/BugPage';

import { StudentLifePage } from '../../../studentLife/pages';
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
            <StudentLifePage />
          </Route>
          <Route exact path={PATHS.SERVICES.ROUTE}>
            <ServicePage />
          </Route>
          <Route exact path={PATHS.TEAM.ROUTE}>
            <TeamPage />
          </Route>
          <Route exact path={PATHS.GDPR.ROUTE}>
            <GDPRPage />
          </Route>
          <Route exact path={PATHS.BUG.ROUTE}>
            <BugPage />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
