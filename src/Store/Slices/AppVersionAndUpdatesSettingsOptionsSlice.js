import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currAppVersionAndUpdatesOptions:'',
    automaticUpdates:true
}


const loadSettingsFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('AppVersionAndUpdatesSetting');
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
        localStorage.setItem('AppVersionAndUpdatesSetting', serializedState);
    } catch (e) {
        console.warn("Could not save settings to local storage", e);
    }
};

const AppVersionAndUpdatesSettingsOptionsSlice = createSlice({
    name:'AppVersionAndUpdatesOptions',
    initialState:loadSettingsFromLocalStorage(),
    reducers:{
        setcurrAppVersionAndUpdatesOptions:(state,action)=>{
            state.currAppVersionAndUpdatesOptions = action.payload;

        },
        setautomaticUpdates:(state,action)=>{
            state.automaticUpdates = action.payload;
            saveSettingsToLocalStorage(state);
        }
    }
})

export const {setcurrAppVersionAndUpdatesOptions,setautomaticUpdates} = AppVersionAndUpdatesSettingsOptionsSlice.actions;

export default AppVersionAndUpdatesSettingsOptionsSlice.reducer;