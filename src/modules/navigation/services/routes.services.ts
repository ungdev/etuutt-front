export const PATHS = {
  ROOT_PAGE: {
    ROUTE: '/',
  },
  COMMUNITY_LIFE_PAGE: {
    ROUTE: '/communityLife',
  },
  EVENT_PAGE: {
    ROUTE: '/evenement',
  },
  STUDENT_LIFE_PAGE: {
    ROUTE: '/vie_etudiante',
  },
  SERVICES: {
    ROUTE: '/services',
  },
  TEAM: {
    ROUTE: '/equipe',
  },
  GDPR: {
    ROUTE: '/rgpd',
  },
  BUG: {
    ROUTE: '/signaler_un_bug',
  },
  STYLEGUIDE: {
    ROUTE: '/styleguide',
  },
};

export const getRouteWithParameters = (
  route: string,
  params: { [key: string]: string }
): string => {
  let resultRoute = route;
  Object.entries(params).forEach((parameters) => {
    resultRoute = resultRoute.replace(`:${parameters[0]}`, parameters[1]);
  });

  return resultRoute;
};
