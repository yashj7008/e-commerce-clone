import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'searchTerm',
    initialState: '', // Initial state is an empty string
    reducers: {
        setSearchTerm(state, action) {
            // Directly return the new state value
            return action.payload;
        }
    }
});

export const { setSearchTerm } = searchSlice.actions; // Exporting setSearchTerm action creator

export default searchSlice.reducer;