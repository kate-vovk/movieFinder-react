import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { myOrdersSelector } from '@/user/store/selectors/myOrders';
import { userIdSelector } from '@/user/store/selectors/auth';
import { OrdersItem } from './OrdersItem';
import { OrdersIsEmpty } from './OrdersIsEmpty';
import { setUserOrdersToStore } from '@/user/store/slices/myOrdersSlice';
import { useStyle } from './styles';
import { GoToMainPageButton } from '@/sharedComponents/GoToMainPageButton';

export const OrdersList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const { t } = useTranslation(['myOrders']);
  const userId = useSelector(userIdSelector);
  const ordersData = useSelector(myOrdersSelector);

  useEffect(() => {
    dispatch(setUserOrdersToStore({ userId }));
  }, []);

  return (
    <>
      {ordersData.length ? (
        <>
          <h1 className={classes.title}>{t('orders')}</h1>
          {ordersData.map((orderData) => (
            <ul key={orderData.ordersId}>
              <OrdersItem orderData={orderData} />
            </ul>
          ))}
          <GoToMainPageButton />
        </>
      ) : (
        <OrdersIsEmpty />
      )}
    </>
  );
};
