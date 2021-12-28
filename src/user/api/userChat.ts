import { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import HTTPService from '@/services/httpService';
import { IMessage } from '@/interfaces/userChatInterfaces';
import { SERVER_PATHS } from '@/user/constants';

export const addUserChatComments = async (message: IMessage): Promise<any> => {
  return HTTPService.post(
    SERVER_PATHS.userChat,
    { ...message, id: uuidv4() },
    SERVER_PATHS.userChat,
  );
};

export const getUserChatComments = async (): Promise<AxiosResponse> => {
  return HTTPService.get(SERVER_PATHS.userChat, SERVER_PATHS.userChat);
};
