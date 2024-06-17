import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    contentTypeOptions:'Articles',
    contentToneOptions:'Casual',
    contentLengthOptions:'Short',
}


const loadSettingsFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('contentGenerationSettings');
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
        localStorage.setItem('contentGenerationSettings', serializedState);
    } catch (e) {
        console.warn("Could not save settings to local storage", e);
    }
};


const ContentGenerationPreferencesOptions = createSlice({
    name:'ContentGenerationPreferencesOptions',
    initialState:loadSettingsFromLocalStorage(),
    reducers:{
        setcontentTypeOptions:(state,action)=>{
            state.contentTypeOptions = action.payload;
            saveSettingsToLocalStorage(state);
        },
        setcontentToneOptions:(state,action)=>{
            state.contentToneOptions = action.payload;
            saveSettingsToLocalStorage(state);
        },
        setcontentLengthOptions:(state,action)=>{
            state.contentLengthOptions = action.payload;
            saveSettingsToLocalStorage(state);
        },
       


    }
})


export const {setcontentTypeOptions,setcontentToneOptions,setcontentLengthOptions} = ContentGenerationPreferencesOptions.actions;

export default ContentGenerationPreferencesOptions.reducer;