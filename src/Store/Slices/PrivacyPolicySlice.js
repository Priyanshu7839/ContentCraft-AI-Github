import { createSlice } from "@reduxjs/toolkit";

const PrivacyPolicySlice = createSlice({
    name:'PrivacySettingsSlide',
    initialState:{
        currPrivacySettingSlide : '',
        shareDataForAnalytics:true
    },
    reducers:{
        setcurrPrivacySettingSlide:(state,action)=>{
            state.currPrivacySettingSlide = action.payload;
        },
        setshareDataForAnalytics:(state,action)=>{
            state.shareDataForAnalytics = action.payload;
        }

    }
});

export const {setcurrPrivacySettingSlide,setshareDataForAnalytics} = PrivacyPolicySlice.actions;

export default PrivacyPolicySlice.reducer;