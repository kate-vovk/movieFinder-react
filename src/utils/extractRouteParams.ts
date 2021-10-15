export const exctractRoute = (route?: string): string | undefined => {
  if (
    route?.match(/(\/.*?)\/(.*)/) &&
    route.match(/(\/.*?)\/(.*)/)![1] &&
    route.match(/(\/.*?)\/(.*)/)![1] !== '/user'
  ) {
    return route.match(/(\/.*?)\/(.*)/)![1];
  }
  return route;
};

export const exctractParams = (route?: string): string => {
  if (
    route?.match(/(\/.*?)\/(.*)/) &&
    route.match(/(\/.*?)\/(.*)/)![2] &&
    route.match(/(\/.*?)\/(.*)/)![1] !== '/user'
  ) {
    return route.match(/(\/.*?)\/(.*)/)![2];
  }
  return '';
};
