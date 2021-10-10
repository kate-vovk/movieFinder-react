import { Button } from '@material-ui/core';
import { FunctionComponent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { cartSelector } from '@/user/store/selectors/cart';
import { useStyle } from './styles';
import { stateStatus } from '@/user/constants/constants';
import { CLIENT_PATHS } from '@/user/constants';
import { errorSelector } from '@/user/store/selectors/errors';
import { store } from '@/store';

function actionToDispatch(action: string, params = {}): any {
  return {
    type: action,
    payload: params,
  };
}

export const ErrorComponent: FunctionComponent<{ params?: any; children?: ReactElement | null }> =
  ({ params = '', children = null }) => {
    const location = useLocation();
    const history = useHistory();
    const classes = useStyle();
    // const { status } = useSelector(cartSelector);
    const { error } = useSelector(errorSelector);
    console.log('error.redirectionPage', Boolean(error.redirectionPage));
    console.log(
      'ErrorComponent',
      location.pathname === error.route,
      location.pathname,
      error.route,
    );

    const dispatch = useDispatch();

    const callFailedAction = (): void => {
      console.log('callFailedAction', params);
      dispatch(error.reducer(error.params));
      // error.forEach(({ reducer }): void => {
      //   dispatch(reducer(params));
      // });
    };
    const redirectToPage = (): void => {
      console.log('redirectToPage', error.redirectionPage);
      store.dispatch(actionToDispatch('auth/clearAuth'));
      store.dispatch(actionToDispatch('errors/clearError'));
      history.push(error.redirectionPage);
    };

    // if (error.map(({ message }): string => message).includes('404')) {
    //   history.push(CLIENT_PATHS.notFound);
    // }

    if (error.message) {
      if (location.pathname === error.route) {
        return (
          <div className={classes.cartError}>
            <div className={classes.cartErrorMessageContainer}>
              <h2>{i18next.t(`ErrorStatuses:Cart error`)}:</h2>
              {/* <h2>{i18next.t(`CartStatuses:Cart error`)}:</h2> */}
              <p>
                {i18next.t(`ErrorStatuses:${error.message}`)}
                {/* {error
            .map(({ message }): string => {
              return `${i18next.t(`CartStatuses:${message}`)}`;
            })
            .join()} */}
              </p>
            </div>
            <Button
              variant="outlined"
              color="secondary"
              type="button"
              // disabled={status === stateStatus.loading}
              // onClick={redirectionPage === '' ? redirectToPage : callFailedAction}
              onClick={error.redirectionPage ? redirectToPage : callFailedAction}
            >
              {error.redirectionPage
                ? `Go to login page`
                : `${i18next.t(`CartStatuses:Try again`)}`}
            </Button>
          </div>
        );
      }
      toast(i18next.t(`CartStatuses:${error.message}`));
    }
    return children;
  };
