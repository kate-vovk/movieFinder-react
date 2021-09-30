export interface IMovie {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  price: number;
  releaseDate: string;
  productionCompany: string;
  duration: number;
  genre: string;
  category: string;
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

export interface IGetMovies {
  films: IMovie[];
  totalFilmCounter: number;
}
