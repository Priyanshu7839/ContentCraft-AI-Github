import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contentCreationUpdates: true,
    collaborationActivities: true,
    consultingServices: true,
    accountSecurity: true,
    appUpdates: true,
    activityOnYourContent: true,
    subscriptionManagement: true,
    platformNews: true
};

const loadSettingsFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('notificationSettings');
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
        localStorage.setItem('notificationSettings', serializedState);
    } catch (e) {
        console.warn("Could not save settings to local storage", e);
    }
};



const NotificationOptionSlice = createSlice({
    name:'NotificationOption',
    initialState:loadSettingsFromLocalStorage(),
    reducers:{

        setcontentCreationUpdates:(state,action)=>{
            state.contentCreationUpdates = action.payload;
            saveSettingsToLocalStorage(state);
        },
        setcollaborationActivities:(state,action)=>{
            state.collaborationActivities = action.payload;
            saveSettingsToLocalStorage(state);
        },
        setconsultingServices:(state,action)=>{
            state.consultingServices = action.payload;
            saveSettingsToLocalStorage(state);
        },
        setaccountSecurity:(state,action)=>{
            state.accountSecurity = action.payload;
            saveSettingsToLocalStorage(state);
        },
        setappUpdates:(state,action)=>{
            state.appUpdates = action.payload;
            saveSettingsToLocalStorage(state);
        },
        setactivityOnYourContent:(state,action)=>{
            state.activityOnYourContent = action.payload;
            saveSettingsToLocalStorage(state);
        },
        setsubscriptionManagement:(state,action)=>{
            state.subscriptionManagement = action.payload;
            saveSettingsToLocalStorage(state);
        },
        setplatformNews:(state,action)=>{
            state.platformNews = action.payload;
            saveSettingsToLocalStorage(state);
        },
        loadSettings: (state) => {
            return loadSettingsFromLocalStorage();
        }


    }
})

export const {setcontentCreationUpdates,setcollaborationActivities,setconsultingServices,setaccountSecurity,setappUpdates,setactivityOnYourContent,setsubscriptionManagement,setplatformNews,loadSettings} = NotificationOptionSlice.actions;

export default NotificationOptionSlice.reducer;