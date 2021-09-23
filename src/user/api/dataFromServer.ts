import HTTPService from '@/services/httpService';

export const getData = (path: string): Promise<any> => {
  return HTTPService.get(path);
};
