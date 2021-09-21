import { FunctionComponent } from 'react';

export interface IOrderedMovie {
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
  orderedMovies?: IOrderedMovie[];
  myMovies?: IMyMovie[];
}

export interface IPrivateRouteProps {
  path: string;
  component: FunctionComponent;
  id?: string;
  exact?: boolean;
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
export interface IAuth {
  userId: string;
  userName: string;
  userEmail: string;
}
