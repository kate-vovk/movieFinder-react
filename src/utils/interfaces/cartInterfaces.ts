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
  trailer: string;
}

export interface ICart {
  userId: string;
  movies: ICartMovieState[];
  id: string;
}

export interface ICartMovieState {
  movieId: string;
  period: number;
  quality: string;
  price: number;
}
