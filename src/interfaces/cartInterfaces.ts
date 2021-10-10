import { stateStatus } from '@/user/constants/constants';
import { IMovie } from './movieInterface';

export interface ICart {
  movies: IMovie[];
  // error: { [key: string]: string | any }[];
  status: stateStatus;
}

export interface ICartMovieState {
  userId: string;
  movieId: string;
  period?: number;
  quality?: number;
}
