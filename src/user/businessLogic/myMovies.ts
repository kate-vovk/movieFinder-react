import { IOrder } from '@/interfaces/orderInterface';
import { getUserOrders as getUserOrdersAPI } from '@/user/api/myMovies';
import CustomError from '@/utils/customError';

export const getUserOrders = async (userId: string): Promise<IOrder[]> => {
  try {
    const { data } = await getUserOrdersAPI(userId);
    return data;
  } catch (err) {
    const error = {
      errorName: 'getUserOrders/failed',
      message: 'getUserOrders/failed',
      failedFunctionFromBusinessLogic: getUserOrders,
      params: userId,
      isMajor: false,
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
};
