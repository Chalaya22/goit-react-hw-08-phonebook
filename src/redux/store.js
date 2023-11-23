// import { configureStore } from '@reduxjs/toolkit';
// import { contactReducer } from './contactSlice';
// import { filterReducer } from './filterSlice';

// //store
// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filter: filterReducer,
//   },
// });
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/authSlice';
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
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
//store
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// export default store;
