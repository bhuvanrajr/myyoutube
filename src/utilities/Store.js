import { configureStore } from "@reduxjs/toolkit"
import SidebarSlice from "./SidebarSlice";

const Store = configureStore({
        reducer:{
            side:SidebarSlice
        }
    });

export default Store