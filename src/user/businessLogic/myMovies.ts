import { IOrder } from '@/interfaces/orderInterface';
import { store } from '@/store';
import { getUserOrders as getUserOrdersAPI } from '@/user/api/myMovies';
import { actionToDispatch } from '@/utils';
import CustomError from '@/utils/customError';

export const getUserOrders = async (userId: string): Promise<IOrder[]> => {
  try {
    const { data } = await getUserOrdersAPI(userId);
    store.dispatch(actionToDispatch('errors/clearError', 'getUserOrders/failed'));
    return data;
  } catch (err) {
    const error = {
      errorName: 'getUserOrders/failed',
      failedFunctionFromBusinessLogic: getUserOrders,
      params: userId,
      // isMajor: false,
      isMajorFlagMutable: true,
      route: '/user/4',
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
};
