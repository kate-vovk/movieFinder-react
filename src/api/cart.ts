/* eslint-disable camelcase */
import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/constants';
import { IMyMovie, IOrderedMovie, IUser } from '@/utils/interfaces/authInterfaces';
import { ICartMovieState } from '@/utils/interfaces/cartInterfaces';

export const getCart = async (userId: string): Promise<any> => {
  return HTTPService.get(`${SERVER_PATHS.cart}?userId=${userId}`);
};

export const addMovieToCart = async ({
  userId: user_id,
  movieId: film_id,
  period: period_id,
  quality,
}: ICartMovieState): Promise<any> => {
  return HTTPService.post(`${SERVER_PATHS.cart}?userId=${user_id}&filmId=${film_id}`, {
    user_id,
    film_id,
    period_id,
    quality,
  });
};

export const deleteMovieFromCart = async ({ movieId, userId }: ICartMovieState): Promise<any> => {
  return HTTPService.delete(`${SERVER_PATHS.cart}?userId=${userId}&filmId=${movieId}`);
};

// TODO will be modified when POST requests to Orders and MyMovies will be created
export const addOrderedMoviesAndMyMovies = async ({
  user,
  orderedMovies,
  myMovies,
}: {
  user: IUser;
  orderedMovies: IOrderedMovie[];
  myMovies: IMyMovie[];
}): Promise<any> => {
  return HTTPService.put(
    {
      ...user,
      orderedMovies,
      myMovies,
    },
    `${SERVER_PATHS.users}/${user.id}`,
  );
};
