/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { addMovie, editMovie, getMovie } from '@/admin/api/movie';
import { IMovie, IMovieInSnakeCase } from '@/interfaces/movieInterface';
import CustomError from '@/utils/customError';
import { DataStatus, IGetParamsData } from '../interfaces';
import { getAllCategories } from './categories';
import { getAllGenres } from './genres';
import { getAllProductCompanies } from './productCompanies';
import { ICaughtError } from '@/interfaces/errorInterfaces';
import { extractsNumbersFromString } from '@/utils';

interface IGetMovieParams {
  dataForEditPage: IMovie;
  categories: IGetParamsData[];
  genres: IGetParamsData[];
  productionCompanies: IGetParamsData[];
  stateStatus: DataStatus;
}

export const getMoviePageData = async (movieId: string): Promise<IGetMovieParams> => {
  function convertDate(date: string): string {
    // leads the date to back-end format //

    const getValidValue = (unit: number): string | number => {
      return unit < 10 ? `0${unit}` : unit;
    };
    const dateFromNumber = new Date(date);
    return [
      dateFromNumber.getFullYear(),
      getValidValue(dateFromNumber.getMonth() + 1),
      getValidValue(dateFromNumber.getDate()),
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
      return {
        dataForEditPage,
        categories,
        genres,
        productionCompanies,
        stateStatus: DataStatus.success,
      };
    }
    return {
      dataForEditPage,
      categories,
      genres,
      productionCompanies,
      stateStatus: DataStatus.error,
    };
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};

export const editMovieData = async (values: IMovie): Promise<IMovieInSnakeCase> => {
  const validDuration = extractsNumbersFromString(String(values.duration));
  const validPrice = extractsNumbersFromString(String(values.price));
  try {
    const movieValues = {
      cast: values?.cast,
      category_id: values?.category,
      country: values?.country,
      cover_url: values?.coverUrl,
      description: values?.description,
      duration: validDuration,
      genre_id: values?.genre,
      id: values?.id,
      price: validPrice,
      producer: values?.producer,
      production_company_id: values?.productionCompany,
      release_date: values?.releaseDate,
      title: values?.title,
      trailer_url: values?.trailerUrl,
    };
    const { data } = await editMovie(movieValues);
    return data;
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};

export const addMovieData = async (values: IMovie): Promise<IMovieInSnakeCase> => {
  const validDuration = extractsNumbersFromString(String(values.duration));
  const validPrice = extractsNumbersFromString(String(values.price));
  try {
    const movieValues = {
      cast: values?.cast,
      category_id: values?.category,
      country: values?.country,
      cover_url: values?.coverUrl,
      description: values?.description,
      duration: validDuration,
      genre_id: values?.genre,
      price: validPrice,
      producer: values?.producer,
      production_company_id: values?.productionCompany,
      release_date: values?.releaseDate,
      title: values?.title,
      trailer_url: values?.trailerUrl,
    };
    const { data } = await addMovie(movieValues);
    return data;
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};

interface IGetAllParamsList {
  categories: IGetParamsData[];
  genres: IGetParamsData[];
  productionCompanies: IGetParamsData[];
  stateStatus: DataStatus;
}

export const getAllParamsList = async (): Promise<IGetAllParamsList> => {
  try {
    const categories = await getAllCategories();
    const genres = await getAllGenres();
    const productionCompanies = await getAllProductCompanies();
    if (categories?.length && genres?.length && productionCompanies?.length) {
      return {
        categories,
        genres,
        productionCompanies,
        stateStatus: DataStatus.success,
      };
    }
    return { stateStatus: DataStatus.error, categories, genres, productionCompanies };
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};
