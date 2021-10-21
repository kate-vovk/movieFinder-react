import { AxiosPromise } from 'axios';
import { IFeedback, IFeedbackData } from '@/interfaces/feedbackInterface';
import {
  getAllUserFeedbackAPI,
  deleteUserFeedbackAPI,
  changeUserFeedbackAPI,
} from '@/user/api/feedback';
import CustomError from '@/utils/customError';
import { actionToDispatch } from '@/utils';
import { store } from '@/store';
import { ICaughtError } from '@/interfaces/errorInterfaces';

interface IData {
  data: IUserFeedback;
}

interface IUserFeedback {
  results: IFeedback[];
  total: number;
}

export const getAllUserFeedback = async (userId: string): Promise<IFeedbackData[]> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'getAllUserFeedback/failed'));
    const {
      data: { results },
    }: IData = await getAllUserFeedbackAPI(userId);
    const filmsIdList: string[] = Array.from(new Set(results.map((film: IFeedback) => film.title)));
    const feedbackData: IFeedbackData[] = filmsIdList.map((filmIdList) => ({
      title: filmIdList,
      feedbackDataList: results.filter(
        (filmDataList: IFeedback) => filmDataList.title === filmIdList,
      ),
    }));
    return feedbackData;
  } catch (err) {
    const error = {
      errorName: 'getAllUserFeedback/failed',
      failedFunctionFromBusinessLogic: getAllUserFeedback,
      params: userId,
      isMajorFlagMutable: true,
      isMajor: true,
      route: '/user/3',
    };
    throw new CustomError(err as ICaughtError, error);
  }
};

export const changeUserFeedback = async ({
  feedbackId,
  userId,
  feedback,
}: {
  feedbackId: string;
  userId: string;
  feedback: string;
}): Promise<AxiosPromise> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'changeUserFeedback/failed'));
    return await changeUserFeedbackAPI({
      feedbackId,
      userId,
      feedback,
    });
  } catch (err) {
    const error = {
      errorName: 'changeUserFeedback/failed',
      failedFunctionFromBusinessLogic: changeUserFeedback,
      params: {
        feedbackId,
        userId,
        feedback,
      },
      isMajorFlagMutable: false,
      isMajor: false,
      route: '/user/3',
    };
    throw new CustomError(err as ICaughtError, error);
  }
};

export const deleteUserFeedback = async ({
  feedbackId,
  userId,
}: {
  feedbackId: string;
  userId: string;
}): Promise<AxiosPromise> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'deleteUserFeedback/failed'));
    return await deleteUserFeedbackAPI({
      feedbackId,
      userId,
    });
  } catch (err) {
    const error = {
      errorName: 'deleteUserFeedback/failed',
      failedFunctionFromBusinessLogic: deleteUserFeedback,
      params: {
        feedbackId,
        userId,
      },
      isMajorFlagMutable: false,
      isMajor: false,
      route: '/user/3',
    };
    throw new CustomError(err as ICaughtError, error);
  }
};
