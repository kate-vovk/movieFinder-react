import { addCartToServerAPI, deleteCartFromServerAPI, getCart } from '@/api/cart';
// import { IMyMovie, IOrderedMovie, IUser } from '@/utils/interfaces/authInterfaces';
import { IMovie } from '@/utils/interfaces/cartInterfaces';

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  const { data } = await getCart(userId);
  return data;
};

// export const getMovie = async (movieId: string): Promise<IMovie> => {
//   const { data } = await getMovieObj(movieId);
//   return data;
// };

export const addCartToServer = async ({
  id,
  userId,
  movies,
}: {
  id: string;
  userId: string;
  movies: IMovie[];
}): Promise<any> => {
  const { data } = await addCartToServerAPI({ id, userId, movies });
  return data;
};

export const deleteCartFromServer = async (id: string): Promise<any> => {
  const { data } = await deleteCartFromServerAPI(id);
  return data;
};

// export const addOrderedMoviesAndMyMoviesToUser = async ({
//   user,
//   orderedMovies,
//   myMovies,
// }: {
//   user: IUser;
//   orderedMovies: IOrderedMovie[];
//   myMovies: string[];
// }): Promise<any> => {
//   const { data } = await addOrderedMoviesAndMyMoviesToUserAPI({
//     user,
//     orderedMovies,
//     myMovies,
//   });
//   return data;
// };
