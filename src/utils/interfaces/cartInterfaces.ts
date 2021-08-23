export interface IMovie {
  id: number;
  title: string;
  description: string;
  cover: string;
  price: number;
}

export interface ICart {
  movies: IMovie[];
}
