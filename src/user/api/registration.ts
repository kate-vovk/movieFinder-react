import { SERVER_PATHS } from '@/user/constants';
import HTTPService from '@/services/httpService';
import { IAuthData } from '@/interfaces/authInterfaces';

export const registrationAPI = async ({ name, password, email }: IAuthData): Promise<IAuthData> => {
  const data = await HTTPService.post(SERVER_PATHS.signup, {
    name,
    password,
    email,
  });
  return data;
};
