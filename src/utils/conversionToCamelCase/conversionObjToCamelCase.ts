/* eslint-disable camelcase */
import { IMovie } from '@/interfaces/cartInterfaces';
import { IMovieGET } from './conversionToCamelCase';

export const convertObjToCamelCase = (movie: IMovieGET): IMovie => {
  return Object.entries(movie).reduce((movieInCamelCase: any, [key, value]) => {
    const fieldName = key.replace(/([-_]\w)/gi, ($1: string) =>
      $1.toUpperCase().replace('-', '').replace('_', ''),
    );
    movieInCamelCase[fieldName] = value;
    return movieInCamelCase;
  }, {});
};
