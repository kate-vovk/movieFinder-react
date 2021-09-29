import { AxiosPromise } from 'axios';
import { SERVER_PATHS } from '@/user/constants';
import HTTPService from '@/services/httpService';
import { ILoginData } from '@/interfaces/authInterfaces';

export const loginAPI = async ({ password, email }: ILoginData): Promise<AxiosPromise> => {
  const data = await HTTPService.post(SERVER_PATHS.signin, {
    password,
    email,
  });
  return data;
};
