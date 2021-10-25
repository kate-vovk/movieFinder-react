import { ICaughtError } from '@/interfaces/errorInterfaces';
import CustomError from '@/utils/customError';
import { getCategories } from '../api/categories';
import { DataStatus, IGetParamsData } from '../interfaces';

export const getAllCategories = async (): Promise<IGetParamsData[]> => {
  try {
    const { data } = await getCategories();
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
