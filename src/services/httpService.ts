import { AxiosPromise, AxiosResponse } from 'axios';
// import { useHistory } from 'react-router-dom';

const axios = require('axios').default;

axios.defaults.withCredentials = true;

const baseUrl = (path: string | number): string => {
  // return 'https://run.mocky.io/v3/ebf38e36-e26c-44d9-a8d2-cdf63602a0ce'; // 403
  return `${process.env.REACT_APP_API_URL}${path}`;
};

// const history = useHistory();

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
        if (error === 403) {
          console.log(error);
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
        if (error === 403) {
          console.log(error);
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
        if (error === 403) {
          console.log(error);
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
        if (error === 403) {
          console.log(error);
        }
        throw Error(String(error));
      });
  }
}
