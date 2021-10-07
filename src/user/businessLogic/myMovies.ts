import { IOrder } from '@/interfaces/orderInterface';
import { getUserOrders as getUserOrdersAPI } from '@/user/api/myMovies';

export const getUserOrders = async (userId: string): Promise<IOrder[]> => {
  const { data } = await getUserOrdersAPI(userId);
  return data;
};
