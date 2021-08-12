import HTTPService from './httpService';

interface IAuthData {
  name: string;
  email: string;
  password: string;
}

export class AuthService {
  static async registartion({ name, password, email }: IAuthData): Promise<any> {
    const data = await HTTPService.post(`${process.env.REACT_APP_AUTH_URL}/register`, true, {
      name,
      password,
      email,
    });
    return console.log(data);
  }
}
