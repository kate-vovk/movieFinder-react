import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthService } from '../services/authService';

interface IAuthData {
  name: string;
  password: string;
  email: string;
}

export const registrationAsync = createAsyncThunk(
  'auth/fetchLogin',
  async ({ name, password, email }: IAuthData) => {
    const { accessToken } = await AuthService.registartion({ name, email, password });
    return { token: accessToken };
  },
);

const initialState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registrationAsync.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
  },
});

export const authReducer = authSlice.reducer;
