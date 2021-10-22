import { getGenres } from '@/admin/api/genres';
import CustomError from '@/utils/customError';
import { IGetParamsData } from '../interfaces';
import { ICaughtError } from '@/interfaces/errorInterfaces';

export const getAllGenres = async (): Promise<IGetParamsData[]> => {
  try {
    const { data } = await getGenres();
    if (data?.length) {
      return data;
    }
    throw new Error('something went wrong, please try again');
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};
