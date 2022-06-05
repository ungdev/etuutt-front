export const PATHS = {
  ROOT_PAGE: {
    ROUTE: '/',
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
  PROFILE: {
    ROUTE: '/profil',
  },
  EMAIL: {
    ROUTE: '/eimal',
  },
  GUIDE_UE: {
    ROUTE: '/guides_des_ues',
  },
  TROMBINOSCOPE: {
    ROUTE: '/trombinoscope',
  },
  BUCKUTT: {
    ROUTE: '/buckutt',
  },
  WIKI: {
    ROUTE: '/wiki',
  },
  TEAM: {
    ROUTE: '/equipe',
  },
  SETTING: {
    ROUTE: '/parametre',
  },
  SIA: {
    ROUTE: '/sia',
  },
  STATUS_UNG: {
    ROUTE: '/status_ung',
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
