import { AxiosPromise } from 'axios';
import { logoutAPI } from '@/user/api/logout';

export const logoutUser = async (): Promise<AxiosPromise> => {
  const data = await logoutAPI();
  return data;
};
