import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/constants/constants';
import { IMyMovie, IOrderedMovie, IUser } from '@/utils/interfaces/authInterfaces';

interface ICartParameters {
  movieId: string;
  userId: string;
}
export const getCart = async (userId: string): Promise<any> => {
  return HTTPService.get(`${SERVER_PATHS.cart}?userId=${userId}`);
};

export const addCartToServerAPI = async ({ movieId, userId }: ICartParameters): Promise<any> => {
  return HTTPService.post(`${SERVER_PATHS.cart}?userId=${userId}&filmId=${movieId}`, {});
};

export const deleteMovieFromCartOnServerAPI = async ({
  movieId,
  userId,
}: ICartParameters): Promise<any> => {
  return HTTPService.delete(`${SERVER_PATHS.cart}?userId=${userId}&filmId=${movieId}`);
};

// TODO will be modified when POST requests to Orders and MyMovies will be created
export const addOrderedMoviesAndMyMoviesToUserAPI = async ({
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
