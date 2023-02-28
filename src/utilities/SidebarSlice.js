import { createSlice } from "@reduxjs/toolkit"

const SidebarSlice = createSlice({
    name:"ShowSideBar1",
    initialState:{
        showSideBar:true
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.showSideBar = !state.showSideBar;
        }
    }
})

export const {toggleSidebar} =  SidebarSlice.actions;
export default SidebarSlice.reducer;