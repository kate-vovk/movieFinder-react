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

  quality?: string;
  period?: number;
}

export interface ICart {
  movies: IMovie[];
}

export interface IAddMovieToCartParameters {
  movieId: string;
  userId: string;
  period: number;
  quality: string;
}

export interface IRemoveMovieFromCartParameters {
  userId: string;
  movieId: string;
}
