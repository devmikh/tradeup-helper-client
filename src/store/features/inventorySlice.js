import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: null,
    error: ''
};

export const getInventory = createAsyncThunk('inventory/getInventory', (steamId, { rejectWithValue }) => {
    return axios
        .get(`${import.meta.env.VITE_SERVER_URL}/api/getInventory/${steamId}`)
        .then(response => {
            return response.data.data;
        })
        .catch(error => {
            return rejectWithValue(error.message);
        })
});

const inventorySlice = createSlice({
    name: 'inventory',
    initialState: initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getInventory.pending, state => {
            state.loading = true,
            state.error = ''
        });
        builder.addCase(getInventory.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        });
        builder.addCase(getInventory.rejected, (state, action) => {
            state.loading = false;
            state.data = initialState.data;
            state.error = action.payload;
        });
    },
});

export default inventorySlice.reducer;
