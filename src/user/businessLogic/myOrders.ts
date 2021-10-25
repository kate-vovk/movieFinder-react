import { IOrder, IOrders } from '@/interfaces/orderInterface';
import { store } from '@/store';
import { addOrder as addOrderAPI, getUserOrders as getUserOrdersAPI } from '@/user/api/myOrders';
import { actionToDispatch } from '@/utils';
import CustomError from '@/utils/customError';
import { ICaughtError } from '@/interfaces/errorInterfaces';

interface IData {
  data: IUserOrders;
}

interface IUserOrders {
  results: IOrder[];
  total: number;
}

export const addOrder = async (userId: string): Promise<IOrder[]> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'addOrder/failed'));
    const { data } = await addOrderAPI({ userId });
    return data;
  } catch (err) {
    const error = {
      errorName: 'addOrder/failed',
      failedFunctionFromBusinessLogic: addOrder,
      params: userId,
      isMajor: false,
      isMajorFlagMutable: false,
      route: '/cart',
    };
    throw new CustomError(err as ICaughtError, error);
  }
};

export const getAllUserOrders = async (userId: string): Promise<IOrders[]> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'getAllUserOrders/failed'));
    const {
      data: { results },
    }: IData = await getUserOrdersAPI(userId);

    const ordersIdList: string[] = Array.from(
      new Set(results.map((order: IOrder) => order.orderId)),
    );
    const ordersData: IOrders[] = ordersIdList.map((orderIdList) => ({
      ordersId: orderIdList,
      ordersDataList: results.filter(
        (orderDataList: IOrder) => orderDataList.orderId === orderIdList,
      ),
    }));
    return ordersData;
  } catch (err) {
    const error = {
      errorName: 'getAllUserOrders/failed',
      failedFunctionFromBusinessLogic: getAllUserOrders,
      params: userId,
      isMajor: true,
      isMajorFlagMutable: true,
      route: '/user/2',
    };
    throw new CustomError(err as ICaughtError, error);
  }
};
