import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectInvitation:true,
    editsAndComments:true,
    approvals:true,
    collaborationActivities:true
}


const loadSettingsFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('CollaborationOptions');
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
        localStorage.setItem('CollaborationOptions', serializedState);
    } catch (e) {
        console.warn("Could not save settings to local storage", e);
    }
};

const CollaborationOptionsSlice = createSlice({
    name:'CollaborationOptions',
    initialState:loadSettingsFromLocalStorage(),
    reducers:{
        setprojectInvitation:(state,action)=>{
            state.projectInvitation = action.payload;
            saveSettingsToLocalStorage(state);
        },
        seteditsAndComments:(state,action)=>{
            state.editsAndComments = action.payload;
            saveSettingsToLocalStorage(state);

        },
        setapprovals:(state,action)=>{
            state.approvals = action.payload;
            saveSettingsToLocalStorage(state);

        },
        setcollaborationActivities:(state,action)=>{
            state.collaborationActivities = action.payload;
            saveSettingsToLocalStorage(state);

        },
    }
})


export const {setprojectInvitation,seteditsAndComments,setapprovals,setcollaborationActivities} = CollaborationOptionsSlice.actions;

export default CollaborationOptionsSlice.reducer;