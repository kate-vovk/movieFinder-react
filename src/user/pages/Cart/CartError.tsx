import { Button } from '@material-ui/core';
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { useHistory } from 'react-router-dom';
import { cartSelector } from '@/user/store/selectors/cart';
import { useStyle } from './styles';
import { stateStatus } from '@/user/constants/constants';
import { CLIENT_PATHS } from '@/user/constants';

export const CartError: FunctionComponent<{ params: any }> = ({ params }) => {
  const history = useHistory();
  const classes = useStyle();
  const { error, status } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const callFailedAction = (): void => {
    error.forEach(({ reducer }): void => {
      dispatch(reducer(params));
    });
  };

  if (error.map(({ message }): string => message).includes('404')) {
    history.push(CLIENT_PATHS.notFound);
  }

  return (
    <div className={classes.cartError}>
      <div className={classes.cartErrorMessageContainer}>
        <h2>{i18next.t(`CartStatuses:Cart error`)}:</h2>
        <p>
          {error
            .map(({ message }): string => {
              return `${i18next.t(`CartStatuses:${message}`)}`;
            })
            .join()}
        </p>
      </div>
      <Button
        variant="outlined"
        color="secondary"
        type="button"
        disabled={status === stateStatus.loading}
        onClick={callFailedAction}
      >
        {`${i18next.t(`CartStatuses:Try again`)}`}
      </Button>
    </div>
  );
};
