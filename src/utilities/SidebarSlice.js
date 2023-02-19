import { createSlice } from "@reduxjs/toolkit"

const SidebarSlice = createSlice({
    name:"ShowSideBar",
    initialState:{
        showSideBar:"false"
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.showSideBar = !state.showSideBar;
        }
    }
})

export const {toggleSidebar} =  SidebarSlice.actions;
export default SidebarSlice.reducer;