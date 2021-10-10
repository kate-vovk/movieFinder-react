import { AxiosPromise, AxiosResponse } from 'axios';
// import { CLIENT_PATHS } from '@/user/constants';
import { store } from '@/store';
import CustomError from './CustomError';

function actionToDispatch(action: string): any {
  return {
    type: action,
  };
}
const axios = require('axios').default;

axios.defaults.withCredentials = true;

const baseUrl = (path: string | number): string => {
  // return 'https://run.mocky.io/v3/cec2d0d7-9630-478a-ad18-6c1d860c53c3'; // 400
  // return 'https://run.mocky.io/v3/9ccad036-5c53-46e8-a452-6098bbc7ac79';  // 403
  return `${process.env.REACT_APP_API_URL}${path}`;
};

export default class HTTPService {
  static get(path = ''): Promise<any> {
    return axios({
      method: 'get',
      url: baseUrl(path),
    })
      .then((response: AxiosResponse) => {
        console.log('success');
        store.dispatch(actionToDispatch('errors/clearError'));
        return response;
      })
      .catch((err: Error) => {
        // console.log('typeof err', typeof err, err);
        // const error = err.response ? err.response.status : String(err.message);
        // if (error === 401 || error === 403) {
        //   store.dispatch(actionToDispatch('auth/clearAuth'));
        //   window.location.href = CLIENT_PATHS.signin;
        // }
        throw new CustomError(err);
      });
  }

  static post(path = '', data: any): Promise<AxiosPromise> {
    return axios({
      method: 'post',
      url: baseUrl(path),
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: Error) => {
        // console.log('typeof err', typeof err, err);
        // const error = err.response ? err.response.status : String(err.message);
        // if (error === 401 || error === 403) {
        //   store.dispatch(actionToDispatch('auth/clearAuth'));
        //   window.location.href = CLIENT_PATHS.signin;
        // }
        throw new CustomError(err);
      });
  }

  static put(data: any, path = ''): Promise<AxiosPromise> {
    return axios({
      method: 'put',
      url: baseUrl(path),
      data,
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: Error) => {
        // const error = err.response ? err.response.status : String(err.message);
        // if (error === 401 || error === 403) {
        //   store.dispatch(actionToDispatch('auth/clearAuth'));
        //   window.location.href = CLIENT_PATHS.signin;
        // }
        throw new CustomError(err);
      });
  }

  static delete(path = ''): Promise<AxiosPromise> {
    return axios({
      method: 'delete',
      url: baseUrl(path),
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: Error) => {
        // const error = err.response ? err.response.status : String(err.message);
        // if (error === 401 || error === 403) {
        //   store.dispatch(actionToDispatch('auth/clearAuth'));
        //   window.location.href = CLIENT_PATHS.signin;
        // }
        throw new CustomError(err);
      });
  }
}
