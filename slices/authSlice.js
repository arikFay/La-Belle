// store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an asynchronous thunk for your API request
export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (userId) => {
  // Perform your API request here and return the data
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const data = await response.json();
  return data;
});

// Create the auth slice with loading, error, and data states
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
