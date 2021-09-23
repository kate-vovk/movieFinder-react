import { ILoginData, IAuth } from '@/interfaces/authInterfaces';
import { loginAPI } from '@/user/api/login';

export const getLoginData = async ({ password, email }: ILoginData): Promise<IAuth> => {
  const {
    data: { userId, userName, userEmail },
  } = await loginAPI({ password, email });
  return { userId, userName, userEmail };
};
