import { SERVER_PATHS } from '@/constants';
import HTTPService from '@/services/httpService';
import { ILoginData } from '@/utils/interfaces/authInterfaces';

export const loginAPI = async ({ password, email }: ILoginData): Promise<any> => {
  const data = await HTTPService.post(SERVER_PATHS.signin, {
    password,
    email,
  });
  return data;
};
