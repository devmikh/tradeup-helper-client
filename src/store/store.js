import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './features/inventorySlice';

export function makeStore() {
    return configureStore({
        reducer: {
            inventory: inventoryReducer
        }
    });
};

const store = makeStore();

export const dispatch = store.dispatch;

export const getState = store.getState;

export default store;
