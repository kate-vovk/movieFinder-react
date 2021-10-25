/* eslint-disable camelcase */
export interface IMovie {
  id?: string;
  title: string;
  description: string;
  coverUrl?: string;
  price?: string;
  releaseDate?: string;
  productionCompany?: string | number;
  duration?: number | string;
  genres?: string;
  categories?: string | number;
  producer: string;
  cast: string;
  trailerUrl?: string;
  country?: string;

  categoryId?: string;
  countryId?: string;
  genreId?: string;
  productionCompanyId?: string;

  quality?: string;
  period?: number;

  category?: string | number;
  genre?: string | number;
}

export interface IGetMovies {
  results: IMovie[];
  total: number;
}

export interface IMovieDetailView {
  film: IMovie;
}

export enum SearchOption {
  initial = '',
  movie = 'movie',
  actor = 'actor',
  studio = 'studio',
}

export interface IMovieInSnakeCase {
  id?: string;
  title: string;
  description: string;
  cover_url?: string;
  cast: string;
  category?: string | number;
  duration?: string;
  genre?: string | number;
  price?: string;
  producer: string;
  release_date?: string;
  trailer_url?: string;
  category_id?: string | number;
  production_company_id?: string | number;
  genre_id?: string | number;

  coverUrl?: string;
  releaseDate?: string;
  productionCompany?: string;
  trailerUrl?: string;
  country?: string;
}
