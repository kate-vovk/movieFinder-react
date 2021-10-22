/* eslint-disable camelcase */
import { AxiosPromise } from 'axios';
import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/user/constants';

const commentariesPath = (userId: string): string =>
  `${SERVER_PATHS.users}/${userId}${SERVER_PATHS.comments}`;

export const getAllUserFeedbackAPI = async (userId: string): Promise<AxiosPromise> => {
  return HTTPService.get(commentariesPath(userId));
};

export const changeUserFeedbackAPI = async ({
  feedbackId,
  userId,
  feedback: comment,
}: {
  feedbackId: string;
  userId: string;
  feedback: string;
}): Promise<AxiosPromise> => {
  return HTTPService.patch(`${commentariesPath(userId)}/${feedbackId}`, {
    comment,
  });
};

export const deleteUserFeedbackAPI = ({
  feedbackId,
  userId,
}: {
  feedbackId: string;
  userId: string;
}): Promise<AxiosPromise> => {
  return HTTPService.delete(`${commentariesPath(userId)}/${feedbackId}`);
};
