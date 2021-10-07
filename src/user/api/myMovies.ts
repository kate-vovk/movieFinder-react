/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/user/constants';

export const getUserOrders = async (userId: string): Promise<AxiosResponse> => {
  return HTTPService.get(`${SERVER_PATHS.myMovies}?user_id=${userId}&is_active=true`);
};
