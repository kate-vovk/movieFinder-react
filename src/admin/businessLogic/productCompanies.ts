import CustomError from '@/utils/customError';
import { getProductionCompanies } from '../api/poductionCompanies';
import { DataStatus, IGetParamsData } from '../interfaces';
import { ICaughtError } from '@/interfaces/errorInterfaces';

export const getAllProductCompanies = async (): Promise<IGetParamsData[]> => {
  try {
    const { data } = await getProductionCompanies();
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
