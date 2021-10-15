import { AsyncThunk } from '@reduxjs/toolkit';
import { ICartMovieState } from '@/interfaces/cartInterfaces';
import { IMovie } from '@/interfaces/movieInterface';

export interface IError {
  errorName: string;
  message: string;
  isMajor: boolean;
  params: string | ICartMovieState | { [key: string]: string | number };
  failedFunctionFromBusinessLogic?: (data: string | { [key: string]: string | number }) => void;
  failedActionFromRedux?:
    | AsyncThunk<IMovie[], string, { [key: string]: string }>
    | AsyncThunk<IMovie[], ICartMovieState, { [key: string]: string }>;
  redirectionPage?: string;
  route?: string;
}

export interface IErrorState {
  errors: IError[];
  currentRoute: string;
}
