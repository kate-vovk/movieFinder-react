/* eslint-disable camelcase */
import { addOrder as addOrderAPI, getUserOrders as getUserOrdersAPI } from '@/user/api/orders';

export const addOrder = async (userId: string): Promise<any> => {
  const { data } = await addOrderAPI({ userId });
  return data;
};

export const getUserOrders = async (userId: string, isActive: string | boolean): Promise<any> => {
  const { data } = await getUserOrdersAPI(userId, isActive);
  return data;
};
