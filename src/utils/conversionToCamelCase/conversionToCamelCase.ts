/* eslint-disable camelcase */
import { IMovie } from '@/interfaces/movieInterface';

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

export const convertToCamelCase = (movies: IMovieGET[]): IMovie[] => {
  return movies.map((movie: IMovieGET) => {
    return Object.entries(movie).reduce((movieInCamelCase: any, [key, value]) => {
      const fieldName = key.replace(/([-_]\w)/gi, ($1: string) =>
        $1.toUpperCase().replace('-', '').replace('_', ''),
      );
      movieInCamelCase[fieldName] = value;
      return movieInCamelCase;
    }, {});
  });
};
