import { createSlice } from "@reduxjs/toolkit";

const NavbarElementsSlice = createSlice({
    name:'NavbarElements',
    initialState:{
        currNavbarElements:'Home'
    },
    reducers:{
        setcurrNavbarElements:(state,action)=>{
            state.currNavbarElements = action.payload;
        }
    }
})

export const {setcurrNavbarElements} = NavbarElementsSlice.actions;

export default NavbarElementsSlice.reducer;