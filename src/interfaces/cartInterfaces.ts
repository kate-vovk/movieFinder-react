import { IMovie } from './movieInterface';
import { DataStatus } from '@/interfaces/status';

export interface ICart {
  movies: IMovie[];
  status: DataStatus;
}

export interface ICartMovieState {
  userId: string;
  movieId?: string;
  period?: number;
  quality?: number;
}
