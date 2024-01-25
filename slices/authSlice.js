// store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an asynchronous thunk for your API request
export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (phone) => {
    console.log("Phone", phone)
    //   Perform your API request here and return the data
    const response = await fetch(`http://localhost:8000/customers/auth?phone=${phone}`);
    const data = await response.json();
    console.log("RESPONSE", data);
    console.log("STATUS", response.status);
    if (response.status == 200){
        return {
            status: response.status,
            data: data
        }
    }
    else return response.details
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
                console.log("fetchUserData.fulfilled", action.payload)
                if (action.payload.status == 200){
                    state.loading = false;
                    state.logging = true;
                    state.userData = action.payload;
                }
                else {
                    state.loading = false;
                    state.logging = false;
                    state.loggingError = true;
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
