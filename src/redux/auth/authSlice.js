import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, current } from 'redux/auth/authOperatioms';

const initialState = {
  user: {
    name: 'null',
    email: 'null',
    password: 'null',
  },
  isLoggedIn: false,
  isCurrent: false,
  token: 'null',
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //register -регестрируем пользователя
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [register.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //login
    [login.pending]: state => {
      state.isLoading = true;
    },

    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [login.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //logOut

    [logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //current
    [current.pending]: state => {
      state.isCurrent = true;
    },
    [current.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isCurrent = false;
    },
    [current.rejected]: (state, action) => {
      state.isCurrent = false;
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
