/* eslint-disable camelcase */
import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/user/constants';
import { IMyMovie, IOrderedMovie, IUser } from '@/interfaces/authInterfaces';
import { ICartMovieState } from '@/interfaces/cartInterfaces';

export const getCart = async (userId: string): Promise<any> => {
  return HTTPService.get(`${SERVER_PATHS.cart}?user_id=${userId}`);
};

export const addMovieToCart = async ({
  userId: user_id,
  movieId: film_id,
  period,
  quality: quality_id,
}: ICartMovieState): Promise<any> => {
  return HTTPService.post(`${SERVER_PATHS.cart}?user_id=${user_id}&film_id=${film_id}`, {
    user_id,
    film_id,
    period,
    quality_id,
  });
};

export const deleteMovieFromCart = async ({ movieId, userId }: ICartMovieState): Promise<any> => {
  return HTTPService.delete(`${SERVER_PATHS.cart}?user_id=${userId}&film_id=${movieId}`);
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
