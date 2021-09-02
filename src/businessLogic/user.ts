import { getUser as getUserAPI } from '@/api/user';

export const getUser = async (userId: string): Promise<any> => {
  const { data } = await getUserAPI(userId);
  return data;
};
