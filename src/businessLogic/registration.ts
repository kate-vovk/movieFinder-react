import { registrationAPI } from '@/api/registration';
import { IAuthData } from '@/utils/interfaces/authInterfaces';

export const getRegistrationData = async ({ name, password, email }: IAuthData): Promise<any> => {
  const {
    data: { accessToken, user },
  } = await registrationAPI({ name, password, email });
  return { accessToken, user };
};
