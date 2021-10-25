import { getGenres } from '@/admin/api/genres';
import CustomError from '@/utils/customError';
import { DataStatus, IGetParamsData } from '../interfaces';
import { ICaughtError } from '@/interfaces/errorInterfaces';

export const getAllGenres = async (): Promise<IGetParamsData[]> => {
  try {
    const { data } = await getGenres();
    if (data?.length) {
      data.status = DataStatus.success;
      return data;
    }
    data.status = DataStatus.error;
    return data;
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};
