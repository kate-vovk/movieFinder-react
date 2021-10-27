import { getUsersList } from '@/admin/api/users';
import { DataStatus, IUser, IUserQueryParams } from '@/admin/interfaces';
import CustomError from '@/utils/customError';
import { ICaughtError } from '@/interfaces/errorInterfaces';

interface IGetUsers {
  results: IUser[];
  total: number;
  status: DataStatus;
  searchQueryParams: string;
}

export const getUsers = async ({
  page,
  limit,
  searchQueryParams,
}: IUserQueryParams): Promise<IGetUsers> => {
  try {
    let queryParams = '';
    if (searchQueryParams) {
      queryParams = `&email=${searchQueryParams}`;
    }
    const { data } = await getUsersList({ page, limit, queryParams });
    if (data?.results?.length && data.total !== 0) {
      data.status = DataStatus.success;
    }
    if (data?.results?.length === 0 && data.total === 0) {
      data.status = DataStatus.empty;
    }
    return data;
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};
