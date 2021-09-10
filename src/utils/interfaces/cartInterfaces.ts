/* eslint-disable camelcase */
export interface IMovie {
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
  country_id: string | number;
  genre_id: string | number;
  producer: string;
  production_company_id: string | number;
  release_date: string;
}

export interface ICart {
  // userId?: string | undefined;
  // movies: ICartMovieState[];
  movies: IMovie[];
  // movies: any;
  // id?: string | undefined;
}

export interface ICartMovieState {
  movieId: string;
  period: number;
  quality: string;
  price: number;
  // movies: IMovie;
}
