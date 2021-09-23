import { registrationAPI } from '@/user/api/registration';
import { IAuthData } from '@/interfaces/authInterfaces';

export const getRegistrationData = async ({ name, password, email }: IAuthData): Promise<any> => {
  return registrationAPI({ name, password, email });
};
