import { SERVER_PATHS } from '@/constants/constants';
import HTTPService from '@/services/httpService';
import { IAuthData } from '@/utils/interfaces/authInterfaces';

export const registrationAPI = async ({ name, password, email }: IAuthData): Promise<any> => {
  const data = await HTTPService.post(SERVER_PATHS.signup, {
    name,
    password,
    email,
  });
  return data;
};
