import { AxiosPromise } from 'axios';
import { registrationAPI } from '@/user/api/registration';
import { IAuthData } from '@/interfaces/authInterfaces';

export const getRegistrationData = async ({
  name,
  password,
  email,
}: IAuthData): Promise<AxiosPromise> => {
  return registrationAPI({ name, password, email });
};
