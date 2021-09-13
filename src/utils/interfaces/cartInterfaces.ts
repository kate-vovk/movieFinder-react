/* eslint-disable camelcase */
export interface IMovie {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  price: number;
  year: string;
  company: string;
  duration: number;
  genres: string[];
  categories: string[];
  director: string;
  actors: string[];
  trailerUrl: string;

  categoryId: string;
  countryId: string;
  genreId: string;
  producer: string;
  productionCompanyId: string;
  releaseDate: string;

  quality?: string;
  period?: number;
}

export interface IMovieGET {
  id: string;
  title: string;
  description: string;
  cover_url: string;
  price: number;
  year: string;
  company: string;
  duration: number;
  genres: string[];
  categories: string[];
  director: string;
  actors: string[];
  trailer_url: string;

  category_id: string;
  country_id: string;
  genre_id: string;
  producer: string;
  production_company_id: string;
  release_date: string;

  quality?: string;
  period?: number;
}

export interface ICart {
  movies: IMovie[];
}

export interface ICartMovieState {
  userId: string;
  movieId: string;
  period?: number;
  quality?: string;
}
