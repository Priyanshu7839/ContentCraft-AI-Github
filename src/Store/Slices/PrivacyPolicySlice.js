import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        currPrivacySettingSlide : '',
        shareDataForAnalytics:true
}

const loadSettingsFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('PrivacyPolicySettings');
        if (serializedState === null) {
            return initialState;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load settings from local storage", e);
        return initialState;
    }
};

const saveSettingsToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('PrivacyPolicySettings', serializedState);
    } catch (e) {
        console.warn("Could not save settings to local storage", e);
    }
};

const PrivacyPolicySlice = createSlice({
    name:'PrivacySettingsSlide',
    initialState:loadSettingsFromLocalStorage(),
    reducers:{
        setcurrPrivacySettingSlide:(state,action)=>{
            state.currPrivacySettingSlide = action.payload;
        },
        setshareDataForAnalytics:(state,action)=>{
            state.shareDataForAnalytics = action.payload;
            saveSettingsToLocalStorage(state);
        }

    }
});

export const {setcurrPrivacySettingSlide,setshareDataForAnalytics} = PrivacyPolicySlice.actions;

export default PrivacyPolicySlice.reducer;