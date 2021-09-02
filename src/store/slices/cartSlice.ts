import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addCartToServer,
  addRentedMoviesAndListMyMoviesToUser,
  deleteCartFromServer,
  getUserCart,
} from '@/businessLogic/cart';
import { ICart, ICartMovieState } from '@/utils/interfaces/cartInterfaces';
import { getUser } from '@/businessLogic/user';

toast.configure();

const getExpirationDateUTC = (period: number): string => {
  if (!period) {
    return String(period);
  }
  const now = new Date();
  const expirationDate = new Date(now);
  expirationDate.setDate(now.getDate() + period);
  return expirationDate.toUTCString();
};

const getDateOfPurchaseUTC = (): string => {
  return new Date().toUTCString();
};

const initialState: ICart = { movies: [], userId: '', id: '' };

interface IMovieRemove {
  userId: string;
  movieId: string;
  id: string;
  movies: ICartMovieState[];
}
export const setCartMoviesToStore = createAsyncThunk('cart/getMovies', async (userId: string) => {
  return getUserCart(userId);
});

export const addMovieToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, id, movies }: ICart) => {
    // TODO: DELETE query will be removed when back end will be ready
    await deleteCartFromServer(id);
    await addCartToServer({ id, userId, movies });
    return movies;
  },
);

export const removeMovieFromCart = createAsyncThunk(
  'cart/removeMovie',
  async ({ userId, movieId, id, movies }: IMovieRemove) => {
    const newMoviesArray = movies.filter((movie: ICartMovieState) => movie.movieId !== movieId);

    // TODO: DELETE query will be removed when back end will be ready
    await deleteCartFromServer(id);
    await addCartToServer({ id, userId, movies: newMoviesArray });
    return newMoviesArray;
  },
);

export const sendData = createAsyncThunk(
  'cart/sendData',
  async ({ userId, movies }: { userId: string; movies: ICartMovieState[] }) => {
    const cart = await getUserCart(userId);
    const user = await getUser(userId);

    // TODO: DELETE query will be removed when back end will be ready
    await deleteCartFromServer(cart.id);
    await addCartToServer({ id: cart.id, userId, movies: [] });

    const myMovies = movies.map((movie) => {
      return {
        movieId: movie.movieId,
        expirationDate: getExpirationDateUTC(movie.period),
        quality: movie.quality,
      };
    });
    const rentedMoviesList = movies.map((movie) => {
      return {
        movieId: movie.movieId,
        dateOfPurchase: getDateOfPurchaseUTC(),
        price: movie.price,
      };
    });

    // TODO: PUT query will be replaced with POST when back end will be ready
    if (user.rentedMoviesList && user.myMovies) {
      await addRentedMoviesAndListMyMoviesToUser({
        user,
        rentedMoviesList: [...user.rentedMoviesList, ...rentedMoviesList],
        myMovies: [...user.myMovies, ...myMovies],
      });
    } else if (user.rentedMoviesList && !user.myMovies) {
      await addRentedMoviesAndListMyMoviesToUser({
        user,
        rentedMoviesList: [...user.rentedMoviesList, ...rentedMoviesList],
        myMovies,
      });
    } else if (!user.rentedMoviesList && user.myMovies) {
      await addRentedMoviesAndListMyMoviesToUser({
        user,
        rentedMoviesList,
        myMovies: [...user.myMovies, ...myMovies],
      });
    } else {
      await addRentedMoviesAndListMyMoviesToUser({ user, rentedMoviesList, myMovies });
    }
    return [];
  },
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCartMoviesToStore.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(setCartMoviesToStore.rejected, () => {
        toast('No cart for current user exists');
      })
      .addCase(removeMovieFromCart.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(addMovieToCart.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(sendData.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export const cartReducer = cartSlice.reducer;
