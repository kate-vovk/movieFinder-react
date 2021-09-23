import { SERVER_PATHS } from '@/user/constants';
import HTTPService from '@/services/httpService';

export const getDataFromApi = (path: string): Promise<any> => {
  return HTTPService.get(`${SERVER_PATHS.movies}?${path}`);
};
