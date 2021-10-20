import { IMovie } from './movieInterface';

export type TMovieFavorites = Pick<
  IMovie,
  | 'id'
  | 'coverUrl'
  | 'title'
  | 'description'
  | 'productionCompany'
  | 'cast'
  | 'releaseDate'
  | 'producer'
>;

export interface IFavorites {
  favoritesMovies: TMovieFavorites[];
  status: string;
}

export interface IFavoritesMovieState {
  userId: string;
  movieId: string;
}
