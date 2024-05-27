import { createSlice } from "@reduxjs/toolkit";

const settingSidebarSlice = createSlice({
    name:'panel',
    initialState:{
        currPanel:'AccSettings'
    },
    reducers:{
        setCurrPanel:(state,action)=>{
            state.currPanel = action.payload
        }
    }
});

export const {setCurrPanel} = settingSidebarSlice.actions;

export default settingSidebarSlice.reducer;

