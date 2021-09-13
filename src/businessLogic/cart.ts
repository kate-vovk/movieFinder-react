/* eslint-disable camelcase */
import {
  addMovieToCart as addMovieToCartAPI,
  deleteMovieFromCart as deleteMovieFromCartAPI,
  getCart,
} from '@/api/cart';
import { IMovie, ICartMovieState, IMovieGET } from '@/utils/interfaces/cartInterfaces';

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  const { data } = await getCart(userId);
  const dataInCamelCase = data.map((movie: IMovieGET) => {
    const {
      category_id,
      country_id,
      cover_url,
      genre_id,
      production_company_id,
      release_date,
      trailer_url,
      ...rest
    } = movie;
    const movieInCamelCase = {
      category: category_id,
      countryId: country_id,
      coverUrl: cover_url,
      genreId: genre_id,
      productionCompanyId: production_company_id,
      releaseDate: release_date,
      trailerUrl: trailer_url,
      ...rest,
    };
    return movieInCamelCase;
  });
  return dataInCamelCase;
};

export const addMovieToCart = async ({
  movieId,
  userId,
  period,
  quality,
}: ICartMovieState): Promise<string> => {
  const { data } = await addMovieToCartAPI({ movieId, userId, period, quality });
  return data;
};

export const deleteMovieFromCart = async ({
  movieId,
  userId,
}: ICartMovieState): Promise<string> => {
  const { data } = await deleteMovieFromCartAPI({
    movieId,
    userId,
  });
  return data;
};
