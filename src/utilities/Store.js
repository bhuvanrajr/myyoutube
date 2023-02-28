import { configureStore } from "@reduxjs/toolkit"
import SearchResultSlice from "./SearchResultSlice";
import SidebarSlice from "./SidebarSlice";

const Store = configureStore({
        reducer:{
            side:SidebarSlice,
            searchResults : SearchResultSlice
        }
    });

export default Store