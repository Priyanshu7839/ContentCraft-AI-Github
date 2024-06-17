import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currNavbarElements:'Home'
};




const NavbarElementsSlice = createSlice({
    name:'NavbarElements',
    initialState:initialState,
    reducers:{
        setcurrNavbarElements:(state,action)=>{
            state.currNavbarElements = action.payload;
            
        }
    }
})

export const {setcurrNavbarElements} = NavbarElementsSlice.actions;

export default NavbarElementsSlice.reducer;