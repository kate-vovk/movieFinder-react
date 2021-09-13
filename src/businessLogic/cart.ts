/* eslint-disable camelcase */
import {
  addMovieToCart as addMovieToCartAPI,
  deleteMovieFromCart as deleteMovieFromCartAPI,
  getCart,
} from '@/api/cart';
import { IMovie, ICartMovieState } from '@/utils/interfaces/cartInterfaces';

interface IMovieGET {
  id: string;
  title: string;
  description: string;
  cover_url: string;
  price: number;
  year: string;
  company: string;
  duration: number;
  genres: string[];
  categories: string[];
  director: string;
  actors: string[];
  trailer_url: string;

  category_id: string;
  country_id: string;
  genre_id: string;
  producer: string;
  production_company_id: string;
  release_date: string;

  quality?: string;
  period?: number;
}

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  const { data } = await getCart(userId);
  data.map((movie: IMovieGET) => {
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
    const obj = {
      category: category_id,
      countryId: country_id,
      coverUrl: cover_url,
      genreId: genre_id,
      productionCompanyId: production_company_id,
      releaseDate: release_date,
      trailerUrl: trailer_url,
      rest,
    };
    return obj;
  });
  return data;
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
