import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthService } from '../../services/authService';

interface IAuthData {
  name: string;
  password: string;
  email: string;
}

export const registrationAsync = createAsyncThunk(
  'auth/registration',
  async ({ name, password, email }: IAuthData) => {
    const data = await AuthService.registartion({ name, email, password });
    return data;
  },
);

const initialState = {
  token: '',
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registrationAsync.fulfilled, (state, action) => {
      state.token = action.payload.data.accessToken;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
