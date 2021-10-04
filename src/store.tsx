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
import { authReducer } from '@/user/store/slices/authSlice';
import { cartReducer } from '@/user/store/slices/cartSlice';
import { moviesReducer } from '@/user/store/slices/moviesSlice';
import { modalReducer } from '@/user/store/slices/modalSlice';
import { favoritesReducer } from '@/user/store/slices/favoritesSlice';
import { ordersReducer } from '@/user/store/slices/ordersSlice';

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  movies: moviesReducer,
  modal: modalReducer,
  favorites: favoritesReducer,
  orders: ordersReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'movies'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
