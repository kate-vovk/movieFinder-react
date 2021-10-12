import { CLIENT_PATHS } from '@/user/constants';
import { store } from '@/store';
import { actionToDispatch } from '@/utils';

export default class CustomError extends Error {
  constructor(
    err: { response: { status: number }; message: string },
    object: { [key: string]: any } = {},
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
    if (object !== {} && object.failedFunctionFromBusinessLogic) {
      store.dispatch(
        actionToDispatch('errors/addError', {
          errorName: object.errorName,
          message: object.message,
          failedFunctionFromBusinessLogic: object.failedFunctionFromBusinessLogic,
          params: object.params,
          isMajor: object.isMajor,
        }),
      );
    }
  }
}
