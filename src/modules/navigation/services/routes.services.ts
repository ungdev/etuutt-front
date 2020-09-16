export const PATHS = {
  ROOT_PAGE: {
    ROUTE: '/',
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
