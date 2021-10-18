import { CLIENT_PATHS } from '@/user/constants';
import { store } from '@/store';
import { actionToDispatch } from '@/utils';
import { ICaughtError } from '@/interfaces/errorInterfaces';

export default class CustomError extends Error {
  constructor(err: ICaughtError, failedServerCall: { [key: string]: any } = {}) {
    const error = err.response ? err.response.status : err.message;
    super(error as string);
    if (error === 401 || error === 403) {
      store.dispatch(
        actionToDispatch('errors/addError', {
          errorName: 'auth/failed',
          message: String(error),
          redirectionPage: CLIENT_PATHS.signin,
        }),
      );
    }
    if (failedServerCall !== {} && failedServerCall.failedFunctionFromBusinessLogic) {
      store.dispatch(
        actionToDispatch('errors/addError', {
          errorName: failedServerCall.errorName,
          message: error,
          failedFunctionFromBusinessLogic: failedServerCall.failedFunctionFromBusinessLogic,
          params: failedServerCall.params,
          isMajor: failedServerCall.isMajor,
          isMajorFlagMutable: failedServerCall.isMajorFlagMutable,
          route: failedServerCall.route,
        }),
      );
    }
  }
}
