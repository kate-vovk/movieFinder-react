/* eslint-disable camelcase */
import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/user/constants';

export const addOrder = async ({ userId: user_id }: { userId: string }): Promise<any> => {
  return HTTPService.post(`${SERVER_PATHS.orders}`, {
    user_id,
  });
};

export const getUserOrders = async (userId: string, isActive: boolean | string): Promise<any> => {
  return HTTPService.get(`${SERVER_PATHS.myMovies}?user_id=${userId}&is_active=${isActive}`);
};
