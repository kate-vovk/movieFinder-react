import { AxiosPromise, AxiosResponse } from 'axios';

const axios = require('axios').default;

axios.defaults.withCredentials = true;

const baseUrl = (path: string | number): string => {
  return `${process.env.REACT_APP_API_URL}${path}`;
  // return `https://run.mocky.io/v3/e00aefc7-f920-484f-b7d1-7bbd69809292`; // 401
  // return `https://run.mocky.io/v3/b34708f3-03de-45d1-ba91-57d4ad2c9ca5`; // 400
};

export default class HTTPService {
  static get(path = ''): Promise<any> {
    return axios({
      method: 'get',
      url: baseUrl(path),
    }).then((response: AxiosResponse) => {
      console.log('response', response);
      return response;
    });
    // .catch((err: any) => {
    //   return err;
    // });
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
      .catch((error: Record<string, any>) => {
        throw new Error(JSON.stringify(error.response));
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
      .catch((err: string) => {
        throw new Error(err);
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
      .catch((err: string) => {
        throw new Error(err);
      });
  }
}
