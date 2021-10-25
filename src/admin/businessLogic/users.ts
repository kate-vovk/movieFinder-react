import { getUsersList } from '@/admin/api/users';
import { DataStatus, IUser, IUserQueryParams } from '@/admin/interfaces';
import CustomError from '@/utils/customError';
import { ICaughtError } from '@/interfaces/errorInterfaces';

interface IGetUsers {
  results: IUser[];
  total: number;
  status: DataStatus;
}

export const getUsers = async ({ page, limit }: IUserQueryParams): Promise<IGetUsers> => {
  try {
    const { data } = await getUsersList({ page, limit });
    if (data?.results?.length && data.total !== 0) {
      data.status = DataStatus.success;
      return data;
    }
    data.status = DataStatus.error;
    return data;
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};
