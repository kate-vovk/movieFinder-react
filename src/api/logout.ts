import { SERVER_PATHS } from '@/constants';
import HTTPService from '@/services/httpService';

export const logoutAPI = async (): Promise<any> => {
  const data = await HTTPService.get(SERVER_PATHS.logout);
  return data;
};
