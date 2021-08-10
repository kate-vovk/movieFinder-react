const axios = require('axios').default;

const API_KEY = '3f80d4cf4eb52d6e9d2ef400ea3d2acb';
const BASE_URL = (path: string | number | void = ''): string =>
  `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}`;

export default class HTTPService {
  static get(path: string | number | void): any {
    return axios({ method: 'get', url: BASE_URL(path) })
      .then((response: any) => {
        return response.data;
      })
      .catch((err: string) => {
        throw new Error(err);
      });
  }

  static post(data: any, path: string | number | void): any {
    return axios({
      method: 'post',
      url: BASE_URL(path),
      data: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response: string) => {
        return response;
      })
      .catch((err: string) => {
        throw new Error(err);
      });
  }

  static put(data: any, path: string | number | void): any {
    return axios({
      method: 'put',
      url: BASE_URL(path),
      data,
    })
      .then((response: string) => {
        return response;
      })
      .catch((err: string) => {
        throw new Error(err);
      });
  }

  static delete(path: string | number | void): any {
    return axios({
      method: 'delete',
      url: BASE_URL(path),
    })
      .then((response: string) => {
        return response;
      })
      .catch((err: string) => {
        throw new Error(err);
      });
  }
}
