import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//header
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ' ';
  },
};
//register
export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        userData
      );
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      if (error?.response?.data?.name === 'MongoError') {
        alert('User with this email is already registered!');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//login
export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        userData
      );
      token.set(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//logout
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('https://connections-api.herokuapp.com/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//current
export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    token.set(persistedToken);
    const response = await axios.get(
      'https://connections-api.herokuapp.com/users/current'
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
