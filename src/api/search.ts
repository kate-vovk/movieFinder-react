// import { searchOption } from '@/utils/interfaces/searchOption';
// import { SERVER_PATHS } from '@/constants/constants';
// import HTTPService from '@/services/httpService';
// import { getMovies } from '@/businessLogic/movies';

// export const getMovieByParams = (selectParam?: string, searchQuery?: string): Promise<any> => {
//   switch (selectParam) {
//     case searchOption.initial:
//       return HTTPService.get(`${SERVER_PATHS.movies}?initial=${searchQuery}`);
//     case searchOption.studio:
//       return HTTPService.get(`${SERVER_PATHS.movies}?production_company=${searchQuery}`);
//     case searchOption.actor:
//       return HTTPService.get(`${SERVER_PATHS.movies}?actor=${searchQuery}`);
//     default:
//       return getMovies();
//   }
// };

import { searchOption } from '@/utils/interfaces/searchOption';
import { SERVER_PATHS } from '@/constants/constants';
import HTTPService from '@/services/httpService';

export const getMovieByParams = (selectParam?: string, searchQuery?: string): Promise<any> => {
  let querySelectParam = '';
  let queryPath = '';
  switch (selectParam) {
    case searchOption.initial:
      querySelectParam = 'initial';
      break;
    case searchOption.studio:
      querySelectParam = 'production_company';
      break;
    case searchOption.actor:
      querySelectParam = 'actor';
      break;
    default:
      null;
  }

  queryPath = `${SERVER_PATHS.movies}?${querySelectParam}=${searchQuery}`;
  return HTTPService.get(queryPath);
};
