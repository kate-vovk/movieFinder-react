import { AxiosPromise, AxiosResponse } from 'axios';
import { CLIENT_PATHS } from '@/user/constants';
import { store } from '@/store';

function actionToDispatch(action: string): any {
  return {
    type: action,
  };
}
const axios = require('axios').default;

axios.defaults.withCredentials = true;

const baseUrl = (path: string | number): string => {
  return `${process.env.REACT_APP_API_URL}${path}`;
};

export default class HTTPService {
  static get(path = ''): Promise<any> {
    return axios({
      method: 'get',
      url: baseUrl(path),
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: any) => {
        const error = err.response ? err.response.status : String(err.message);
        if (error === 401 || error === 403) {
          store.dispatch(actionToDispatch('auth/clearAuth'));
          window.location.href = CLIENT_PATHS.signin;
        }
        throw Error(String(error));
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
      .catch((err: any) => {
        const error = err.response ? err.response.status : String(err.message);
        if (error === 401 || error === 403) {
          store.dispatch(actionToDispatch('auth/clearAuth'));
          window.location.href = CLIENT_PATHS.signin;
        }
        throw Error(String(error));
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
      .catch((err: any) => {
        const error = err.response ? err.response.status : String(err.message);
        if (error === 401 || error === 403) {
          store.dispatch(actionToDispatch('auth/clearAuth'));
          window.location.href = CLIENT_PATHS.signin;
        }
        throw Error(String(error));
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
      .catch((err: any) => {
        const error = err.response ? err.response.status : String(err.message);
        if (error === 401 || error === 403) {
          store.dispatch(actionToDispatch('auth/clearAuth'));
          window.location.href = CLIENT_PATHS.signin;
        }
        throw Error(String(error));
      });
  }
}
