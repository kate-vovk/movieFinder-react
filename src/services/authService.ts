import HTTPService from './httpService';

interface IAuthData {
  name: string;
  email: string;
  password: string;
}

const url = process.env.REACT_APP_AUTH_URL;
const isCustomUrl = true;

export class AuthService {
  static async registartion({ name, password, email }: IAuthData): Promise<any> {
    const data = await HTTPService.post(`${url}/register`, isCustomUrl, {
      name,
      password,
      email,
    });
    return data;
  }
}
