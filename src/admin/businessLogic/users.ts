import { getUsersList } from '@/admin/api/users';
import { IUser, IUserQueryParams } from '@/admin/interfaces';

interface IGetUsers {
  results: IUser[];
  total: number;
}

export const getUsers = async ({ page, limit }: IUserQueryParams): Promise<IGetUsers> => {
  try {
    const { data } = await getUsersList({ page, limit });
    return data;
  } catch (err: any) {
    throw new Error(err?.message || 'Something went wrong');
  }
};
