import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from '../../../../components';
import { BugPage } from '../../../Bug/pages/BugPage';
import { StyleGuidePage } from '../../../Development/pages';
import { EventPage } from '../../../Event/pages';
import { GDPRPage } from '../../../GDPR/pages/GDPRPage';
import { CommunityLife } from '../../../communityLife/pages';
import { HomePage } from '../../../home/pages';
import { ServicePage } from '../../../services/pages/ServicePage';
import { StudentLifePage } from '../../../studentLife/pages';
import { TeamPage } from '../../../Team/pages/TeamPage';
import { PATHS } from '../../services';

export const MainNavigator: FunctionComponent = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={PATHS.ROOT_PAGE.ROUTE}>
            <HomePage />
          </Route>
          <Route exact path={PATHS.COMMUNITY_LIFE_PAGE.ROUTE}>
            <CommunityLife />
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
          <Route exact path={PATHS.STYLEGUIDE.ROUTE}>
            <StyleGuidePage />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
