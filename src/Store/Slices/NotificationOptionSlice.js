import { createSlice } from "@reduxjs/toolkit";

const NotificationOptionSlice = createSlice({
    name:'NotificationOption',
    initialState:{
        contentCreationUpdates:true,
        collaborationActivities:true,
        consultingServices:true,
        accountSecurity:true,
        appUpdates:true,
        activityOnYourContent:true,
        subscriptionManagement:true,
        platformNews:true

    },
    reducers:{

        setcontentCreationUpdates:(state,action)=>{
            state.contentCreationUpdates = action.payload;
        },
        setcollaborationActivities:(state,action)=>{
            state.collaborationActivities = action.payload;
        },
        setconsultingServices:(state,action)=>{
            state.consultingServices = action.payload;
        },
        setaccountSecurity:(state,action)=>{
            state.accountSecurity = action.payload;
        },
        setappUpdates:(state,action)=>{
            state.appUpdates = action.payload;
        },
        setactivityOnYourContent:(state,action)=>{
            state.activityOnYourContent = action.payload;
        },
        setsubscriptionManagement:(state,action)=>{
            state.subscriptionManagement = action.payload;
        },
        setplatformNews:(state,action)=>{
            state.platformNews = action.payload;
        }


    }
})

export const {setcontentCreationUpdates,setcollaborationActivities,setconsultingServices,setaccountSecurity,setappUpdates,setactivityOnYourContent,setsubscriptionManagement,setplatformNews} = NotificationOptionSlice.actions;

export default NotificationOptionSlice.reducer;