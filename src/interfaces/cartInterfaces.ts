import { IMovie } from './movieInterface';

export interface ICart {
  movies: IMovie[];
  isLoading: boolean;
}

export interface ICartMovieState {
  userId: string;
  movieId: string;
  period?: number;
  quality?: number;
}
