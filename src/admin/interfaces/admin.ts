export interface IUserQueryParams {
  page?: number;
  limit?: number;
  isError?: boolean;
}

export interface IUser {
  dateOfBirth: number;
  email: string;
  id: string;
  name: string;
  photoUrl: string;
  roleId: string;
}

export interface IMovieList {
  page?: number;
  limit?: number;
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
