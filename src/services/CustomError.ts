import { CLIENT_PATHS } from '@/user/constants';
import { store } from '@/store';

function actionToDispatch(action: string, params = {}): any {
  return {
    type: action,
    payload: params,
  };
}
export default class CustomError extends Error {
  constructor(err: any) {
    const error = err.response ? err.response.status : String(err.message);
    super(error);
    if (error === 401 || error === 403) {
      store.dispatch(
        actionToDispatch('errors/addError', {
          actionType: 'auth/failed',
          message: '403 unauthorized',
          page: CLIENT_PATHS.signin,
        }),
      );
    }
    if (error === 404) {
      window.location.href = CLIENT_PATHS.notFound;
    }
  }
}
