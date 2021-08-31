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

export interface ICartData {
  userId: string;
  movies: string[];
  id: string;
}
