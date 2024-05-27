import { createSlice } from "@reduxjs/toolkit";

const AccountSettingSlice = createSlice({
    name:'AccountSettingsSlide',
    initialState:{
        currAccountSettingSlide: ''
    },
    reducers:{
        setcurrAccountSettingSlide:(state,action)=>{
            state.currAccountSettingSlide = action.payload;
        }
    }
});


export const {setcurrAccountSettingSlide} = AccountSettingSlice.actions;

export default AccountSettingSlice.reducer;