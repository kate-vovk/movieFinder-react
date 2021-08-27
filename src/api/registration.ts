import { SERVER_PATHS } from '@/constants/constants';
import HTTPService from '@/services/httpService';
import { IAuthData } from '@/utils/interfaces/authInterfaces';

const url = process.env.REACT_APP_AUTH_URL;
const isCustomUrl = true;

export const registrationAPI = async ({ name, password, email }: IAuthData): Promise<any> => {
  const data = await HTTPService.post(`${url}${SERVER_PATHS.signup}`, isCustomUrl, {
    name,
    password,
    email,
  });
  return data;
};
