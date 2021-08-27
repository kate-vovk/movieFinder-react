import { AxiosResponse } from 'axios';

const axios = require('axios').default;

const BASE_URL = (path: string | number, isCustom?: boolean): string => {
  if (isCustom) {
    return `${path}`;
  }
  return `${process.env.REACT_APP_AUTH_URL}${path}`;
};

export default class HTTPService {
  static get(path: string | number = ''): Promise<any> {
    return axios({ method: 'get', url: BASE_URL(path) })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: string) => {
        throw new Error(err);
      });
  }

  static post(path: string | number = '', isCustom: boolean, data: any): Promise<any> {
    return axios({
      method: 'post',
      url: BASE_URL(path, isCustom),
      data,
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: Record<string, any>) => {
        throw new Error(JSON.stringify(error.response));
      });
  }

  static put(data: any, path: string | number = ''): Promise<any> {
    return axios({
      method: 'put',
      url: BASE_URL(path),
      data,
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: string) => {
        throw new Error(err);
      });
  }

  static delete(path: string | number = ''): Promise<any> {
    return axios({
      method: 'delete',
      url: BASE_URL(path),
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: string) => {
        throw new Error(err);
      });
  }
}
