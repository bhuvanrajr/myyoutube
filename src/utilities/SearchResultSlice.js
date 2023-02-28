import { createSlice } from "@reduxjs/toolkit";

const SearchResultSlice = createSlice({
    name:"SearchResult",
    initialState:{
        
    },
    reducers:{
        AddSearchResults:(state,action) =>{
            state = Object.assign(state, action.payload);
        }
    }
})

export const {AddSearchResults} =  SearchResultSlice.actions;
export default SearchResultSlice.reducer;