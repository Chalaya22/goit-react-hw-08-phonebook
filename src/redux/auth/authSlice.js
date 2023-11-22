import { createSlice } from '@reduxjs/toolkit';
// import authOperations from 'redux/auth/authOperatioms';

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
  extraReducers: {},
});
export default authSlice.reducer;
