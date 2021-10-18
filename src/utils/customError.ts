import { CLIENT_PATHS } from '@/user/constants';
import { store } from '@/store';
import { actionToDispatch } from '@/utils';

export default class CustomError extends Error {
  constructor(
    err: { response: { status: number }; message: string },
    failedServerCall: { [key: string]: any } = {},
  ) {
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
          ...failedServerCall,
          message: error,
        }),
      );
    }
  }
}
