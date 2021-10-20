import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { myOrdersSelector, myOrdersStatusSelector } from '@/user/store/selectors/myOrders';
import { userIdSelector } from '@/user/store/selectors/auth';
import { OrdersItem } from './OrdersItem';
import { OrdersIsEmpty } from './OrdersIsEmpty';
import { setUserOrdersToStore } from '@/user/store/slices/myOrdersSlice';
import { Circular } from '@/sharedComponents/Circular/Circular';
import { GoToMainPageButton } from '@/sharedComponents/GoToMainPageButton';
import { useStyle } from './styles';
import { DataStatus } from '@/interfaces/status';

export const OrdersList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const { t } = useTranslation(['myOrders']);
  const userId = useSelector(userIdSelector);
  const ordersData = useSelector(myOrdersSelector);
  const ordersStatus = useSelector(myOrdersStatusSelector);

  useEffect(() => {
    dispatch(setUserOrdersToStore({ userId }));
  }, []);

  if (ordersStatus === DataStatus.loading) {
    return <Circular />;
  }

  if (ordersStatus === DataStatus.empty) {
    return <OrdersIsEmpty />;
  }

  return (
    <>
      <h1 className={classes.title}>{t('orders')}</h1>
      {ordersData.map((orderData) => (
        <ul key={orderData.ordersId}>
          <OrdersItem orderData={orderData} />
        </ul>
      ))}
      <GoToMainPageButton />
    </>
  );
};
