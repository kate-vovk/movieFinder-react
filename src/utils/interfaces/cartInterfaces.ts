export interface IMovie {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  price: number;
  releaseDate: string;
  productionCompany: string;
  duration: number;
  genres: string;
  categories: string;
  producer: string;
  cast: string;
  trailerUrl: string;
  country: string;

  categoryId: string;
  countryId: string;
  genreId: string;
  productionCompanyId: string;

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

export enum Quality {
  HD,
  SD,
}
