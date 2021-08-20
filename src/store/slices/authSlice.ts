import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { IAuthData, IAuthInitialState, ILoginData } from '@/utils/interfaces/authInterfaces';
import { AuthService } from '@/services/authService';

toast.configure();

export const registrationAsync = createAsyncThunk(
  'auth/registration',
  async ({ name, password, email }: IAuthData) => {
    try {
      const data = await AuthService.registartion({ name, email, password });
      return data;
    } catch (error) {
      return error;
    }
  },
);

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ email, password }: ILoginData) => {
    try {
      const data = await AuthService.login({ email, password });
      return data;
    } catch (error) {
      toast(error.message);
      return error;
    }
  },
);

const initialState: IAuthInitialState = {
  token: '',
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registrationAsync.fulfilled, (state, action) => {
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
