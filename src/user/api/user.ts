import { AxiosPromise } from 'axios';
import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/user/constants';

export const getUser = async (userId: string): Promise<AxiosPromise> => {
  return HTTPService.get(`${SERVER_PATHS.users}/${userId}`);
};
