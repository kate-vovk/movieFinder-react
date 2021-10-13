import { ICartMovieState } from '@/interfaces/cartInterfaces';

export interface IError {
  errorName: string;
  message: string;
  isMajor: boolean;
  isMajorFlagMutable: boolean;
  params: string | ICartMovieState | { [key: string]: string | number };
  failedFunctionFromBusinessLogic?: (data: string | { [key: string]: string | number }) => void;
  redirectionPage?: string;
  route?: string;
}

export interface IErrorState {
  errors: IError[];
  currentRoute: string;
}
