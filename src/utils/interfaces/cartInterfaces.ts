export interface IMovie {
  id: number;
  title: string;
  description: string;
  cover: string;
  price: number;
  year: number;
  duration: number;
  genres: number[];
  categories: number[];
  director: string;
  actors: number[];
  trailer: string;
}

export interface ICartData {
  userId: number | null;
  movies: number[];
  id: number | null;
}
