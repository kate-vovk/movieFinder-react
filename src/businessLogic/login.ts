import { loginAPI } from '@/api/login';
import { ILoginData } from '@/utils/interfaces/authInterfaces';

export const getLoginData = async ({ password, email }: ILoginData): Promise<any> => {
  const {
    data: { accessToken, user },
  } = await loginAPI({ password, email });
  return { accessToken, user };
};
