import { SERVER_PATHS } from '@/constants/constants';
import HTTPService from '@/services/httpService';
import { ILoginData } from '@/utils/interfaces/authInterfaces';

const url = process.env.REACT_APP_AUTH_URL;
const isCustomUrl = true;

export const loginAPI = async ({ password, email }: ILoginData): Promise<any> => {
  const data = await HTTPService.post(`${url}${SERVER_PATHS.signin}`, isCustomUrl, {
    password,
    email,
  });
  return data;
};
