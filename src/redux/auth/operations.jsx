import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const updateToast = ({ id, type, text }) => {
  toast.update(id, {
    render: text,
    type: type,
    isLoading: false,
    autoClose: 4000,
  });
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(value) {
    axios.defaults.headers.common.Authorization = `Bearer ${value}`;
  },
  clear() {
    axios.defaults.headers.common.Authorization = null;
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    const toastId = toast.loading('Request in processing');

    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      updateToast({
        id: toastId,
        type: 'success',
        text: 'Registration was successful',
      });
      return data;
    } catch {
      updateToast({
        id: toastId,
        type: 'error',
        text: 'Incorrect credentials',
      });
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    const toastId = toast.loading('Request in processing');
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      updateToast({
        id: toastId,
        type: 'success',
        text: 'Welcome back!',
      });

      return data;
    } catch {
      updateToast({
        id: toastId,
        type: 'error',
        text: 'Incorrect credentials',
      });
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  const toastId = toast.loading('Request in processing');
  try {
    const { data } = await axios.post('/users/logout');
    token.clear();
    updateToast({
      id: toastId,
      type: 'success',
      text: 'See you next time',
    });
    return data;
  } catch (err) {
    updateToast({
      id: toastId,
      type: 'error',
      text: err.message,
    });
    return thunkAPI.rejectWithValue();
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const persistedToken = auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
