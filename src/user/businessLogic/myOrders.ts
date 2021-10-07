import { IOrder, IOrders } from '@/interfaces/orderInterface';
import { addOrder as addOrderAPI, getUserOrders as getUserOrdersAPI } from '@/user/api/myOrders';

interface IData {
  data: IUserOrders;
}

interface IUserOrders {
  results: IOrder[];
  total: number;
}

export const addOrder = async (userId: string): Promise<IOrder[]> => {
  const { data } = await addOrderAPI({ userId });
  return data;
};

export const getAllUserOrders = async (userId: string): Promise<IOrders[]> => {
  const {
    data: { results },
  }: IData = await getUserOrdersAPI(userId);
  const ordersIdList: string[] = Array.from(new Set(results.map((order: IOrder) => order.orderId)));
  const ordersData: IOrders[] = ordersIdList.map((orderIdList) => ({
    ordersId: orderIdList,
    ordersDataList: results.filter(
      (orderDataList: IOrder) => orderDataList.orderId === orderIdList,
    ),
  }));

  return ordersData;
};
