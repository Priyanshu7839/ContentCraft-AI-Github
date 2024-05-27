import { configureStore } from "@reduxjs/toolkit";
import panelReducer from './Slices/settingSidebarSlice';
import AccountSettingsSliceReducer from "./Slices/AccountSettingsSlice";
import PrivacyPolicySliceReducer from "./Slices/PrivacyPolicySlice";
import NotificationOptionSliceReducer from './Slices/NotificationOptionSlice';
import CollaborationOptionsSliceReducer from "./Slices/CollaborationOptionsSlice";
import HelpAndSupportOptionsSliceReducer from "./Slices/HelpAndSupportOptionsSlice";
import NavbarElementsSliceReducer from './Slices/NavbarElementsSlice';


export const Store = configureStore({
    reducer:{
        panel:panelReducer,
        AccountSettingsSlide:AccountSettingsSliceReducer,
        PrivacySettingsSlide:PrivacyPolicySliceReducer,
        NotificationOption:NotificationOptionSliceReducer,
        CollaborationOptions:CollaborationOptionsSliceReducer,
        HelpAndSupportOptions:HelpAndSupportOptionsSliceReducer,
        NavbarElements:NavbarElementsSliceReducer,


    }
})