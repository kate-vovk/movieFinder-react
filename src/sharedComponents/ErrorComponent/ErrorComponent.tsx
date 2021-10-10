import { Button } from '@material-ui/core';
import { FunctionComponent, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { useLocation } from 'react-router-dom';
import { useStyle } from './styles';
import { errorSelector, majorErrorSelector } from '@/user/store/selectors/errors';
import { store } from '@/store';
import { clearError, setCurrentRoute, setErrorPriority } from '@/user/store/slices/errorSlice';

function actionToDispatch(action: string, params = {}): any {
  return {
    type: action,
    payload: params,
  };
}

export const ErrorComponent: FunctionComponent<{ children?: ReactElement | null }> = ({
  children = null,
}) => {
  const location = useLocation();
  const classes = useStyle();
  const errors = useSelector(errorSelector);
  const majorErrors = useSelector(majorErrorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentRoute(location.pathname));
    dispatch(setErrorPriority({ currentRoute: location.pathname }));
  }, [location.pathname]);

  const callFailedAction = (): void => {
    majorErrors.forEach(({ reducer, params }: { reducer: any; params: string }): void => {
      dispatch(reducer(params));
    });
  };
  const redirectToPage = (): void => {
    store.dispatch(actionToDispatch('auth/clearAuth'));
    dispatch(clearError('auth/failed'));
  };

  if (majorErrors.length !== 0) {
    return (
      <div className={classes.cartError}>
        <div className={classes.cartErrorMessageContainer}>
          <h2>{i18next.t(`ErrorStatuses:Error`)}:</h2>
          <p>
            {Array.from(
              new Set(
                majorErrors.map(({ message }: { message: string }): string => {
                  return `${i18next.t(`ErrorStatuses:${message}`)}`;
                }),
              ),
            ).join()}
          </p>
        </div>
        <Button
          variant="outlined"
          color="secondary"
          type="button"
          onClick={
            majorErrors.find((error: any) => error.redirectionPage)
              ? redirectToPage
              : callFailedAction
          }
        >
          {errors.find((error: any) => error.redirectionPage)
            ? `Go to login page`
            : `${i18next.t(`ErrorStatuses:Try again`)}`}
        </Button>
      </div>
    );
  }
  return children;
};
