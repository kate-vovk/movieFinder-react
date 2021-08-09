// eslint-disable-next-line import/extensions
import axios from '../../node_modules/axios/index';

const API_KEY = '3f80d4cf4eb52d6e9d2ef400ea3d2acb';
const BASE_URL = (path: string): string =>
  `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}`;

export default class HTTPService {
  static get(path: string): any {
    return axios.get(BASE_URL(path)).then((response) => {
      // console.log(response, response.data);
      return response;
    });
  }
}
