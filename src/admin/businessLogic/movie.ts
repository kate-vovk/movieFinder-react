/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { editMovie, getMovie } from '@/admin/api/movie';
import { IMovie, IMovieInSnakeCase } from '@/interfaces/movieInterface';
import CustomError from '@/utils/customError';
import { IGetParamsData } from '../interfaces';
import { getAllCategories } from './categories';
import { getAllGenres } from './genres';
import { getAllProductCompanies } from './productCompanies';

interface IGetMovieParams {
  dataForEditPage: IMovie;
  categories: IGetParamsData[];
  genres: IGetParamsData[];
  productionCompanies: IGetParamsData[];
}

export const getMoviePageData = async (movieId: string): Promise<IGetMovieParams> => {
  function convertDate(date: string): string {
    const getValidValue = (unit: number): string | number => {
      return unit < 10 ? `0${unit}` : unit;
    };
    const dateFromNumber = new Date(date);
    return [
      dateFromNumber.getFullYear(),
      getValidValue(dateFromNumber.getDate()),
      getValidValue(dateFromNumber.getMonth() + 1),
    ].join('-');
  }

  try {
    const { data } = await getMovie(movieId);
    const movieReleaseDate = new Date(data.film.releaseDate).toLocaleString();
    const initialDate = convertDate(movieReleaseDate);

    const dataForEditPage = {
      cast: data?.film?.cast || '',
      category: data?.film?.category || '',
      country: data?.film?.country || '',
      coverUrl: data?.film?.coverUrl || '',
      description: data?.film?.description || '',
      duration: data?.film?.duration || '',
      genre: data?.film?.genre || '',
      id: data?.film?.id || '',
      price: data?.film?.price || '',
      producer: data?.film?.producer || '',
      productionCompany: data?.film?.productionCompany || '',
      releaseDate: initialDate || '',
      title: data?.film?.title || '',
      trailerUrl: data?.film?.trailerUrl || '',
    };
    const categories = await getAllCategories();
    const genres = await getAllGenres();
    const productionCompanies = await getAllProductCompanies();
    if (categories?.length && genres?.length && productionCompanies?.length) {
      return { dataForEditPage, categories, genres, productionCompanies };
    }
    throw new Error('something went wrong, please try again');
  } catch (err) {
    throw new CustomError(err as { response: { status: number }; message: string });
  }
};

export const editMovieData = async (values: IMovie): Promise<IMovieInSnakeCase> => {
  try {
    const movieValues = {
      cast: values?.cast,
      category_id: values?.category,
      country: values?.country,
      cover_url: values?.coverUrl,
      description: values?.description,
      duration: values?.duration?.match(/\d+((.|,)\d+)?/)?.[0],
      genre_id: values?.genre,
      id: values?.id,
      price: values?.price?.match(/\d+((.|,)\d+)?/)?.[0],
      producer: values?.producer,
      production_company_id: values?.productionCompany,
      release_date: values?.releaseDate,
      title: values?.title,
      trailer_url: values?.trailerUrl,
    };
    const { data } = await editMovie(movieValues);
    if (data === 'OK') {
      return data;
    }
    throw new Error('something went wrong, please try again');
  } catch (err) {
    throw new CustomError(err as { response: { status: number }; message: string });
  }
};
