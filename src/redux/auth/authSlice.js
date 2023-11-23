import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from 'redux/auth/authOperatioms';

const initialState = {
  user: {
    name: 'null',
    email: 'null',
    password: 'null',
  },
  isLoggedIn: false,
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
    //logout
  },
});
// export default authSlice.reducer;
export const authReducer = authSlice.reducer;
