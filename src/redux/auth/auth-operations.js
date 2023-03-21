import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line
import { setAuthHeader, clearAuthHeader } from 'utils/axiosSetting';
import axios from 'axios';
import { Notify } from 'notiflix';
export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', credentials);
      console.log(res);
      Notify.success('Successfully registered, you can log in 👌');
      return res.data;
    } catch (error) {
      Notify.failure(
        'This email may already be registered, please try again 😢'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.accessToken);
      console.log(res);
      return res.data;
    } catch (error) {
      Notify.failure('Повторите ещё раз');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
