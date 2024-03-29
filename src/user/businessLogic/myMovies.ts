import { IOrder } from '@/interfaces/orderInterface';
import { store } from '@/store';
import { getUserOrders as getUserOrdersAPI } from '@/user/api/myMovies';
import { actionToDispatch } from '@/utils';
import CustomError from '@/utils/customError';
import { ICaughtError } from '@/interfaces/errorInterfaces';

export const getUserOrders = async (userId: string): Promise<IOrder[]> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'getUserOrders/failed'));
    const { data } = await getUserOrdersAPI(userId);
    return data;
  } catch (err) {
    const error = {
      errorName: 'getUserOrders/failed',
      failedFunctionFromBusinessLogic: getUserOrders,
      params: userId,
      isMajorFlagMutable: true,
      route: '/user/4',
    };
    throw new CustomError(err as ICaughtError, error);
  }
};
