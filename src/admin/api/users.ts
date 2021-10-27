import { AxiosResponse } from 'axios';
import { SERVER_PATHS } from '@/admin/constants';
import HTTPService from '@/services/httpService';
import { IUserQueryParams } from '@/admin/interfaces';

export const getUsersList = ({
  page = 0,
  limit = 15,
  queryParams,
}: IUserQueryParams): Promise<AxiosResponse> => {
  return HTTPService.get(`${SERVER_PATHS.users}?page=${page}&limit=${limit}${queryParams}`);
};
