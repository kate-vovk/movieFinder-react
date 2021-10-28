import { ILoginData, IAuth } from '@/interfaces/authInterfaces';
import { loginAPI } from '@/user/api/login';

export const getLoginData = async ({ password, email }: ILoginData): Promise<IAuth> => {
  const { data } = await loginAPI({ password, email });
  return data;
};
