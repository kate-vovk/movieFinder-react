import { AxiosPromise, AxiosResponse } from 'axios';
import CustomError from '@/utils/customError';

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
      .catch((err: { response: { status: number }; message: string }) => {
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
      .catch((err: { response: { status: number }; message: string }) => {
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
      .catch((err: { response: { status: number }; message: string }) => {
        throw new CustomError(err);
      });
  }

  static patch(path = '', data: any): Promise<AxiosPromise> {
    return axios({
      method: 'patch',
      url: baseUrl(path),
      data,
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: { response: { status: number }; message: string }) => {
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
      .catch((err: { response: { status: number }; message: string }) => {
        throw new CustomError(err);
      });
  }
}
