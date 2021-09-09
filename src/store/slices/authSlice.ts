import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { IAuthData, IAuthInitialState, ILoginData } from '@/utils/interfaces/authInterfaces';
import { getRegistrationData } from '@/businessLogic/registration';
import { getLoginData } from '@/businessLogic/login';
import { logoutUser } from '@/businessLogic/logout';

toast.configure();

// const { t } = useTranslation(['authSlice']);

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
              // toast(t('100'));
              toast('processing. Just wait for a while');
              break;
            case 300:
            case 400:
              // toast(`${JSON.parse(message).data} - ${t('400')}`, {
              //   autoClose: false,
              // });
              toast(`${JSON.parse(message).data} - SignIn, please`, {
                autoClose: false,
              });
              break;
            case 500:
              // toast(t('500'));
              toast('Such user already exists');
              break;
            default:
              return JSON.parse(message).response;
          }
        }
        return null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userId = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        const { message } = action.error;
        if (message) {
          toast(JSON.parse(message).data);
        } else {
          // toast(t('error'));
          toast('Error');
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.userId = null;
      });
  },
});

export const authReducer = authSlice.reducer;
