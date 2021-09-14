// import { searchOption } from '@/utils/interfaces/searchOption';
import { SERVER_PATHS } from '@/constants/constants';
import HTTPService from '@/services/httpService';

export const getDataFromApi = (path: string): Promise<any> => {
  return HTTPService.get(`${SERVER_PATHS.movies}?${path}`);
};
