import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import { IAuthData, IAuthInitialState, ILoginData } from '@/utils/interfaces/authInterfaces';
import { getRegistrationData } from '@/businessLogic/registration';
import { getLoginData } from '@/businessLogic/login';
import { logoutUser } from '@/businessLogic/logout';

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

export const logout = createAsyncThunk('auth/logout', async () => {
  return logoutUser();
});

const initialState: IAuthInitialState = {
  userId: null,
  userName: null,
  userEmail: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.rejected, (state, action) => {
        const { message } = action.error;
        if (message) {
          switch (JSON.parse(message).status) {
            case 100:
              toast(i18next.t('AuthStatuses:100'));
              break;
            case 300:
            case 400:
              toast(`${JSON.parse(message).data} - ${i18next.t('AuthStatuses:400')}`, {
                autoClose: false,
              });
              break;
            case 500:
              toast(i18next.t('AuthStatuses:500'));
              break;
            default:
              return JSON.parse(message).response;
          }
        }
        return null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userId = action.payload.userId;
        state.userName = action.payload.userName;
        state.userEmail = action.payload.userEmail;
      })
      .addCase(login.rejected, (state, action) => {
        const { message } = action.error;
        if (message) {
          toast(JSON.parse(message).data);
        } else {
          toast(i18next.t('AuthStatuses:error'));
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.userId = null;
        state.userName = null;
        state.userEmail = null;
      });
  },
});

export const authReducer = authSlice.reducer;
