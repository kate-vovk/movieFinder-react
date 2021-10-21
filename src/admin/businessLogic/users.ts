import { getUsersList } from '@/admin/api/users';
import { IUser, IUserQueryParams } from '@/admin/interfaces';
import CustomError from '@/utils/customError';
import { ICaughtError } from '@/interfaces/errorInterfaces';

interface IGetUsers {
  results: IUser[];
  total: number;
}

export const getUsers = async ({ page, limit }: IUserQueryParams): Promise<IGetUsers> => {
  try {
    const { data } = await getUsersList({ page, limit });
    if (data?.results?.length && data.total !== 0) {
      return data;
    }
    throw new Error('something went wrong, please try again');
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};
