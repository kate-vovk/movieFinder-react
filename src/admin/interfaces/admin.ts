import { IMovie } from '@/interfaces/movieInterface';

export interface IUserQueryParams {
  page?: number;
  limit?: number;
  searchQueryParams?: string;
  queryParams?: string;
}

export interface IUser {
  dateOfBirth: number;
  email: string;
  id: string;
  name: string;
  photoUrl: string;
  roleId: string;
}

export interface IGetMovies {
  results: IMovie[];
  total: number;
  status: DataStatus;
}

export interface IMovieList {
  page?: number;
  limit?: number;
  searchQueryParams?: string;
  queryParams?: string;
}

export enum DataStatus {
  initial = 'initial',
  error = 'error',
  loading = 'loading',
  empty = 'empty',
  success = 'success',
}

export enum IFieldsValue {
  title = 'title',
  description = 'description',
  coverUrl = 'coverUrl',
  cast = 'cast',
  category = 'category',
  country = 'country',
  duration = 'duration',
  genre = 'genre',
  price = 'price',
  producer = 'producer',
  productionCompany = 'productionCompany',
  releaseDate = 'releaseDate',
  trailerUrl = 'trailerUrl',
}

export interface IGetParamsData {
  id: number;
  name: string;
}
