// store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthNavigator from '../navigations/AuthNavigator';
import { ROUTES } from '../constants';

// Define an asynchronous thunk for your API request
export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (phone) => {
  console.log("Phone", phone);

  try {
    const response = await fetch(`http://localhost:8000/customers/auth?phone=${phone}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("RESPONSE", response);
    console.log("STATUS", response.status);
    console.log("RESPONSE JSON", data);

    if (response.status === 200) {
      return {
        status: response.status,
        data: data,
      };
    } else {
      // Handle unexpected status codes
      console.error("Unexpected status code:", response.status);
      return {
        status: response.status,
        data: null,
      };
    }
  } catch (error) {
    // Handle network errors or JSON parsing errors
    console.error("Error:", error.message);

    if (error instanceof Error && error.message.startsWith("HTTP error!")) {
      // Access the status code from the HTTPException
      const statusCode = parseInt(error.message.split(":")[1], 10);
      return {
        status: statusCode, // Internal Server Error
        data: null,
      };
    }
    return {
      status: 500, // Internal Server Error
      data: null,
    };
  }
});


// Create the auth slice with loading, error, and data states
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: null,
    loading: false,
    error: null,
    logging: false,
    loggingError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        console.log("fetchUserData.pending")
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        console.log("fetchUserData.fulfilled", action)
        if (action.payload.status == 200) {
          state.loading = false;
          state.logging = true;
          state.userData = action.payload;
        }
        else {
          state.loading = false;
          state.logging = false;
          state.loggingError = true;
          // state.logging = true;
        }
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        console.log("fetchUserData.rejected")
        console.log("ERROR: ", action.error.message)
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
