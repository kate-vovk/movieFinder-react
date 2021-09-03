import { FunctionComponent } from 'react';

export interface IRentedMovie {
  movieId: string;
  dateOfPurchase: string;
  price: number;
}
export interface IMyMovie {
  movieId: string;
  expirationDate: string;
  quality: string;
}
export interface IUser {
  email: string;
  password: string;
  name: string;
  id: string;
  rentedMoviesList?: IRentedMovie[];
  myMovies?: IMyMovie[];
}

export interface IPrivateRouteProps {
  path: string;
  component: FunctionComponent;
}

export interface ILoginData {
  password: string;
  email: string;
}

export interface IAuthData {
  name: string;
  password: string;
  email: string;
}

export interface IStoreState {
  auth: IAuth;
}
export interface IAuthInitialState {
  token: string | null;
  isLoggedIn: boolean;
  user: IUser | null;
}

export interface IAuth {
  token: string;
  isLoggedIn: boolean;
  user: IUser;
}
