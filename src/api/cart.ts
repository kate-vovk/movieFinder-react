import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/constants/constants';
import { ICartMovieState } from '@/utils/interfaces/cartInterfaces';
import { IMyMovie, IRentedMovie, IUser } from '@/utils/interfaces/authInterfaces';

export const getCart = async (userId: string): Promise<any> => {
  return HTTPService.get(`${SERVER_PATHS.cart}?userId=${userId}`);
};

export const getMovie = async (movieId: string): Promise<any> => {
  return HTTPService.get(`${SERVER_PATHS.movies}/${movieId}`);
};

export const addCartToServerAPI = async ({
  id,
  userId,
  movies,
}: {
  id: string;
  userId: string;
  movies: ICartMovieState[];
}): Promise<any> => {
  return HTTPService.post(`${SERVER_PATHS.cart}`, false, {
    id,
    userId,
    movies,
  });
};

export const deleteCartFromServerAPI = async (id: string): Promise<any> => {
  return HTTPService.delete(`${SERVER_PATHS.cart}/${id}`);
};

export const addRentedMoviesAndListMyMoviesToUserAPI = async ({
  user,
  rentedMoviesList,
  myMovies,
}: {
  user: IUser;
  rentedMoviesList: IRentedMovie[];
  myMovies: IMyMovie[];
}): Promise<any> => {
  return HTTPService.put(
    {
      ...user,
      rentedMoviesList,
      myMovies,
    },
    `${SERVER_PATHS.users}/${user.id}`,
  );
};
