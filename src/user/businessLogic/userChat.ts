// import { AxiosResponse } from 'axios';
import { IMessage } from '@/interfaces/userChatInterfaces';
import {
  addUserChatComments as addUserChatCommentsAPI,
  getUserChatComments as getUserChatCommentsAPI,
} from '@/user/api/userChat';

export const addUserChatComments = async (message: IMessage): Promise<any> => {
  const { data } = await addUserChatCommentsAPI(message);
  console.warn('addUserChatComments', data);
  return data;
};

export const getUserChatComments = async (): Promise<IMessage[]> => {
  const { data } = await getUserChatCommentsAPI();
  console.warn('getUserChatComments', data);
  return data;
};
