export const exctractRoute = (route?: string): string | undefined => {
  // if route:
  // 1) has several slashes (like /movies/3b89f562-c007-444b-9ad8-7207a6e4252d)
  // 2) the first group [1] (route name) includes any route
  // 3) except for '/user' route
  if (
    route?.match(/(\/.*?)\/(.*)/) &&
    route.match(/(\/.*?)\/(.*)/)![1] &&
    route.match(/(\/.*?)\/(.*)/)![1] !== '/user'
  ) {
    // then return: extracted route (e.g. /movies)
    return route.match(/(\/.*?)\/(.*)/)![1];
  }
  // else return: route (e.g. /cart)
  return route;
};

export const exctractParams = (route?: string): string => {
  // if route:
  // 1) has several slashes (like /movies/3b89f562-c007-444b-9ad8-7207a6e4252d)
  // 2) the second group [1] includes any content (like 3b89f562-c007-444b-9ad8-7207a6e4252d)
  // 3) the first group [1] (route name) is not equal to '/user' route
  if (
    route?.match(/(\/.*?)\/(.*)/) &&
    route.match(/(\/.*?)\/(.*)/)![2] &&
    route.match(/(\/.*?)\/(.*)/)![1] !== '/user'
  ) {
    // then return: extracted content after the second slash (e.g. 3b89f562-c007-444b-9ad8-7207a6e4252d)
    return route.match(/(\/.*?)\/(.*)/)![2];
  }
  return '';
};
