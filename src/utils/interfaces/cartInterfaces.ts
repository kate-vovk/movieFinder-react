export interface IMovie {
  id: string;
  title: string;
  description: string;
  cover: string;
  price: number;
  year: string;
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
