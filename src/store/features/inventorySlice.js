import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { switchSelectedById, calculateAvgFloat, removeSelected } from "../../utils/inventoryHelpers";
import { getCollections, filterData } from "../../utils/filterHelpers";

const initialState = {
    loading: false,
    initialData: null,
    filteredData: null,
    selectedItems: [],
    collections: null,
    filters: {
        gradeFilter: 'any',
        collectionFilter: 'any',
        sortBy: 'recent'
    },
    avgFloat: 0,
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
        setCollectionFilter: (state, action) => {
            state.filters.collectionFilter = action.payload;
            state.filteredData = filterData(state.initialData, state.filters);
        },
        setGradeFilter: (state, action) => {
            state.filters.gradeFilter = action.payload;
            state.filteredData = filterData(state.initialData, state.filters);
        },
        setSortBy: (state, action) => {
            state.filters.sortBy = action.payload;
            state.filteredData = filterData(state.initialData, state.filters);
        },
        switchSelected: (state, action) => {
            if (state.selectedItems.length >= 10 && !action.payload.selected) {
                console.log('You cannot put more than 10 items into a tradeup');
            } else {
                switchSelectedById(state.initialData, action.payload.asset_id, state.selectedItems);
            }
            state.filteredData = filterData(state.initialData, state.filters);
            state.avgFloat = calculateAvgFloat(state.selectedItems);
        },
        clearSelectedItems: (state, action) => {
            state.selectedItems = [];
            if (state.initialData) {
                removeSelected(state.initialData);
                state.filteredData = filterData(state.initialData, state.filters);
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(getInventory.pending, state => {
            state.loading = true,
            state.error = ''
        });
        builder.addCase(getInventory.fulfilled, (state, action) => {
            state.collections = getCollections(action.payload);
            state.loading = false;
            state.initialData = action.payload;
            state.filteredData = action.payload;
            state.error = '';
        });
        builder.addCase(getInventory.rejected, (state, action) => {
            state.loading = false;
            state.initialData = initialState.initialData;
            state.filteredData = initialState.filteredData;
            state.error = action.payload;
        });
    },
});

export const { setCollectionFilter, setGradeFilter, setSortBy, switchSelected, clearSelectedItems } = inventorySlice.actions;

export default inventorySlice.reducer;
