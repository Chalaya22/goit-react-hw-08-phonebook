import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const base = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

//header
export const token = {
  set(token) {
    base.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    base.defaults.headers.common.Authorization = ' ';
  },
};
//register
export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await base.post('/users/signup', userData);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      if (error?.response?.data?.name === 'MongoError') {
        alert('You are already registered!');
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
      const response = await base.post('/users/login', userData);
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
    await base.post('/users/logout');
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
    const response = await base.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
