import { ILoginData, IAuth } from '@/utils/interfaces/authInterfaces';
import { loginAPI } from '@/api/login';

export const getLoginData = async ({ password, email }: ILoginData): Promise<IAuth> => {
  const {
    data: { userId, userName, userEmail },
  } = await loginAPI({ password, email });
  return { userId, userName, userEmail };
};
