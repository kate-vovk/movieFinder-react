import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './slices/authSlice';
import { cartReducer } from './slices/cartSlice';

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'auth/registration/fulfilled',
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
  ],
});

export const persistor = persistStore(store);
