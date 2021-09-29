import { AxiosPromise } from 'axios';
import { getUser as getUserAPI } from '@/user/api/user';

export const getUser = async (userId: string): Promise<AxiosPromise> => {
  const { data } = await getUserAPI(userId);
  return data;
};
