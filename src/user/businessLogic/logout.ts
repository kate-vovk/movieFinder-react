import { logoutAPI } from '@/user/api/logout';

export const logoutUser = async (): Promise<any> => {
  const data = await logoutAPI();
  return data;
};
