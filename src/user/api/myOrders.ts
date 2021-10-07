/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/user/constants';

export const addOrder = async ({ userId: user_id }: { userId: string }): Promise<AxiosResponse> => {
  return HTTPService.post(`${SERVER_PATHS.orders}`, {
    user_id,
  });
};

export const getUserOrders = async (userId: string): Promise<AxiosResponse> => {
  return HTTPService.get(`${SERVER_PATHS.orders}?user_id=${userId}`);
};
