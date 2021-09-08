import { registrationAPI } from '@/api/registration';
import { IAuthData } from '@/utils/interfaces/authInterfaces';

export const getRegistrationData = async ({ name, password, email }: IAuthData): Promise<any> => {
  return registrationAPI({ name, password, email });
};
