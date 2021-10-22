import { Button } from '@material-ui/core';
import { FunctionComponent, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { useLocation } from 'react-router-dom';
import { useStyle } from './styles';
import { clearError, setCurrentRoute, setErrorPriority } from '@/user/store/slices/errorSlice';
import { errorSelector, majorErrorSelector } from '@/user/store/selectors/errors';
import { clearAuth } from '@/user/store/slices/authSlice';
import { IError } from '@/interfaces/errorInterfaces';
import { exctractParams, exctractRoute } from '@/utils/extractRouteParams';

export const ErrorBoundary: FunctionComponent<{ children?: ReactElement }> = ({
  children = null,
}) => {
  const location = useLocation();
  const classes = useStyle();
  const errors = useSelector(errorSelector);
  const majorErrors = useSelector(majorErrorSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentRoute(location.pathname));
    dispatch(setErrorPriority());
  }, [location.pathname]);

  const callFailedAction = (): void => {
    majorErrors.forEach((majorError: IError): void => {
      if (majorError.failedFunctionFromBusinessLogic) {
        majorError.failedFunctionFromBusinessLogic(majorError.params as any);
      }
    });
  };

  // if 401 or 403 errors occur, redirect to login page.
  // clearAuth() was called to clear auth State to prevent automatical redirection from login page to moviePage
  const redirectToPage = (): void => {
    dispatch(clearAuth());
    dispatch(clearError('auth/failed'));
  };

  const getButtonAction = (): (() => void) => {
    return majorErrors.find((error: IError) => error.redirectionPage)
      ? redirectToPage
      : callFailedAction;
  };

  const getHandleErrorButtonText = (): string => {
    const errorMessages = errors.map(({ message }): string => message);
    if (errorMessages.includes('401') || errorMessages.includes('403')) {
      return `${i18next.t(`ErrorStatuses:Go to login page`)}`;
    }
    if (errorMessages.includes('404')) {
      return `${i18next.t(`ErrorStatuses:Try again later`)}`;
    }
    return `${i18next.t(`ErrorStatuses:Try again`)}`;
  };

  const getErrorMessage = (): string => {
    return Array.from(
      new Set(
        majorErrors.map((majorError: IError): string => {
          const route = exctractRoute(majorError.route);
          const param = exctractParams(majorError.route);
          const pageName = i18next.t(`ErrorStatuses:${route}`);
          return majorError.route
            ? `${i18next.t(`ErrorStatuses:${majorError.message}`, { pageName })} ${param}`
            : `${i18next.t(`ErrorStatuses:${majorError.message}`)}`;
        }),
      ),
    ).join();
  };
  const getErrorHeader = (): string => {
    return Array.from(
      new Set(
        majorErrors.map((majorError: IError): string => {
          const route = exctractRoute(majorError.route);
          const pageName = i18next.t(`ErrorStatuses:${route}`);
          return majorError.route && majorError.route === location.pathname
            ? `${i18next.t(`ErrorStatuses:Error`, { pageName })}`
            : `${i18next.t(`ErrorStatuses:GlobalError`)}`;
        }),
      ),
    ).join();
  };

  if (majorErrors.length !== 0) {
    return (
      <div className={classes.cartError}>
        <div className={classes.cartErrorMessageContainer}>
          <h2>{getErrorHeader()}:</h2>
          <p>{getErrorMessage()}</p>
        </div>
        <Button variant="outlined" color="secondary" type="button" onClick={getButtonAction()}>
          {getHandleErrorButtonText()}
        </Button>
      </div>
    );
  }
  return children;
};
