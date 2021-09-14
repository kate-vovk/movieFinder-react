import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/constants';

export const getUser = async (userId: string): Promise<any> => {
  return HTTPService.get(`${SERVER_PATHS.users}/${userId}`);
};
