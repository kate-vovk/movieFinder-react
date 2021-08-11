import { HTTPService } from './HTTPService';

interface IAuthData {
  name: string;
  email: string;
  password: string;
}

export class AuthService {
  static async registartion({ name, password, email }: IAuthData): Promise<any> {
    const data = await HTTPService.post(`${process.env.REACT_APP_AUTH_URL}/registartion`, {
      name,
      password,
      email,
    });
    return data;
  }
}
