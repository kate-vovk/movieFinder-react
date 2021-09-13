import { IMovieGET, IMovie } from '../interfaces/cartInterfaces';

export const convertToCamelCase = (movies: IMovieGET[]): IMovie[] => {
  const dataInCamelCase = movies.map((movie: IMovieGET) => {
    const movieInCamelCase: any = {};

    Object.entries(movie).forEach(([key, value]) => {
      const fieldName = key.replace(/([-_]\w)/gi, ($1: string) =>
        $1.toUpperCase().replace('-', '').replace('_', ''),
      );
      movieInCamelCase[fieldName] = value;
    });
    return movieInCamelCase;
  });
  return dataInCamelCase;
};
