import CustomError from '@/utils/customError';
import { getCategories } from '../api/categories';
import { IGetParamsData } from '../interfaces';

export const getAllCategories = async (): Promise<IGetParamsData[]> => {
  try {
    const { data } = await getCategories();
    if (data?.length) {
      return data;
    }
    throw new Error('something went wrong, please try again');
  } catch (err) {
    throw new CustomError(err as { response: { status: number }; message: string });
  }
};
