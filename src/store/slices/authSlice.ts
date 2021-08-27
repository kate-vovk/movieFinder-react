import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { IAuthData, IAuthInitialState, ILoginData } from '@/utils/interfaces/authInterfaces';
import { getRegistrationData } from '@/businessLogic/registration';
import { getLoginData } from '@/businessLogic/login';

toast.configure();

export const registration = createAsyncThunk(
  'auth/registration',
  async ({ name, password, email }: IAuthData) => {
    return getRegistrationData({
      name,
      password,
      email,
    });
  },
);

export const login = createAsyncThunk('auth/login', async ({ email, password }: ILoginData) => {
  return getLoginData({
    email,
    password,
  });
});

const initialState: IAuthInitialState = {
  token: null,
  isLoggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(registration.rejected, (state, action) => {
        const { message } = action.error;
        if (message) {
          switch (JSON.parse(message).status) {
            case 100:
              toast('processing. Just wait for a while');
              break;
            case 300:
            case 400:
              toast(JSON.parse(message).data);
              break;
            case 500:
              toast('Ooops, something went wrong! Try it later');
              break;
            default:
              return JSON.parse(message).response;
          }
        }
        return null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        const { message } = action.error;
        if (message) {
          toast(JSON.parse(message).data);
        } else {
          toast('Error');
        }
      });
  },
});

export const authReducer = authSlice.reducer;
