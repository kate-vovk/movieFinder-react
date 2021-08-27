import { FunctionComponent } from 'react';

interface IUser {
  email: string;
  password: string;
  name: string;
  id: number;
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

export interface IState {
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
