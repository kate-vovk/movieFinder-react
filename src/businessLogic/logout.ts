import { logoutAPI } from '@/api/logout';

export const logoutUser = async (): Promise<any> => {
  const data = await logoutAPI();
  return data;
};
