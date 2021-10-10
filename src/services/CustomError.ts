// import { toast } from 'react-toastify';
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
    this.name = 'Error name';
    console.log('error', error);
    if (error === 401 || error === 403) {
      // toast('Unautorized');
      store.dispatch(
        actionToDispatch('errors/addError', {
          message: '403 unauthorized',
          page: CLIENT_PATHS.signin,
        }),
      );
      //   window.location.href = CLIENT_PATHS.signin;
    }
    if (error === 404) {
      window.location.href = CLIENT_PATHS.notFound;
    }
  }
}
