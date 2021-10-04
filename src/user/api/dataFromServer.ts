import { AxiosPromise } from 'axios';
import HTTPService from '@/services/httpService';

export const getData = (path: string): Promise<AxiosPromise> => {
  return HTTPService.get(path);
};
