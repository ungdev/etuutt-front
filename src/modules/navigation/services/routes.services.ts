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
