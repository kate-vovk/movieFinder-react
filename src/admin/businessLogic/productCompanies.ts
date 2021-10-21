import CustomError from '@/utils/customError';
import { getProductionCompanies } from '../api/poductionCompanies';
import { IGetParamsData } from '../interfaces';
import { ICaughtError } from '@/interfaces/errorInterfaces';

export const getAllProductCompanies = async (): Promise<IGetParamsData[]> => {
  try {
    const { data } = await getProductionCompanies();
    if (data?.length) {
      return data;
    }
    throw new Error('something went wrong, please try again');
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};
