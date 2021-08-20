export interface ILoginData {
  password: string;
  email: string;
}

export interface IAuthData {
  name: string;
  password: string;
  email: string;
}

export interface IAuthInitialState {
  token: string;
  isLoggedIn: boolean;
}
