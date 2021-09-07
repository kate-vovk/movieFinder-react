import {
  addCartToServerAPI,
  addRentedMoviesAndListMyMoviesToUserAPI,
  deleteCartFromServerAPI,
  getCart,
  getMovie as getMovieObj,
} from '@/api/cart';
import { IMyMovie, IRentedMovie, IUser } from '@/utils/interfaces/authInterfaces';
import { ICart, IMovie, ICartMovieState } from '@/utils/interfaces/cartInterfaces';

export const getUserCart = async (userId: string): Promise<ICart> => {
  const { data } = await getCart(userId);
  return data[0];
};

export const getMovie = async (movieId: string): Promise<IMovie> => {
  const { data } = await getMovieObj(movieId);
  return data;
};

export const addCartToServer = async ({
  id,
  userId,
  movies,
}: {
  id: string;
  userId: string;
  movies: ICartMovieState[];
}): Promise<any> => {
  const { data } = await addCartToServerAPI({ id, userId, movies });
  return data;
};

export const deleteCartFromServer = async (id: string): Promise<any> => {
  const { data } = await deleteCartFromServerAPI(id);
  return data;
};

export const addRentedMoviesAndListMyMoviesToUser = async ({
  user,
  rentedMoviesList,
  myMovies,
}: {
  user: IUser;
  rentedMoviesList: IRentedMovie[];
  myMovies: IMyMovie[];
}): Promise<any> => {
  const { data } = await addRentedMoviesAndListMyMoviesToUserAPI({
    user,
    rentedMoviesList,
    myMovies,
  });
  return data;
};
