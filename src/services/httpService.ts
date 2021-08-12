import { AxiosResponse } from 'axios';

const axios = require('axios').default;

const BASE_URL = (path: string | number, isCustom?: boolean): string => {
  if (isCustom) {
    return `${path}`;
  }
  return `${process.env.REACT_APP_BASE_URL}${path}?api_key=${process.env.REACT_APP_API_KEY}`;
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
      url: console.log(BASE_URL(path, isCustom)),
      data: {},
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: string) => {
        throw new Error(err);
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
