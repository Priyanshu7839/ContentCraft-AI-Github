import { configureStore } from "@reduxjs/toolkit";
import panelReducer from './Slices/settingSidebarSlice';
import AccountSettingsSliceReducer from "./Slices/AccountSettingsSlice";
import PrivacyPolicySliceReducer from "./Slices/PrivacyPolicySlice";
import NotificationOptionSliceReducer from './Slices/NotificationOptionSlice';
import CollaborationOptionsSliceReducer from "./Slices/CollaborationOptionsSlice";
import HelpAndSupportOptionsSliceReducer from "./Slices/HelpAndSupportOptionsSlice";
import NavbarElementsSliceReducer from './Slices/NavbarElementsSlice';
import ContentGenerationPreferencesOptionsSliceReducer from "./Slices/ContentGenerationPreferencesOptionsSlice";
import AppVersionAndUpdatesSettingsOptionsSliceReducer from "./Slices/AppVersionAndUpdatesSettingsOptionsSlice";
import CollaborateSidebarOptionsSliceReducer from "./Slices/CollaborateSidebarOptionsSlice";
import AddCollaboratorOptionsSliceReducer from "./Slices/AddCollaboratorOptionsSlice";
import AICustomModelOptionsSliceReducer from "./Slices/AICustomModelOptionsSlice";
import TaskmanagerSidebarOptionsSliceReducer from "./Slices/TaskmanagerSidebarOptionsSlice";
import UserDataSliceReducer from "./Slices/UserDataSlice";

export const Store = configureStore({
    reducer:{
        panel:panelReducer,
        AccountSettingsSlide:AccountSettingsSliceReducer,
        PrivacySettingsSlide:PrivacyPolicySliceReducer,
        NotificationOption:NotificationOptionSliceReducer,
        CollaborationOptions:CollaborationOptionsSliceReducer,
        HelpAndSupportOptions:HelpAndSupportOptionsSliceReducer,
        NavbarElements:NavbarElementsSliceReducer,
        ContentGenerationPreferencesOptions:ContentGenerationPreferencesOptionsSliceReducer,
        AppVersionAndUpdatesOptions:AppVersionAndUpdatesSettingsOptionsSliceReducer,
        CollaborateSidebarOptions:CollaborateSidebarOptionsSliceReducer,
        AddCollaboratorOptions:AddCollaboratorOptionsSliceReducer,
        AICustomModelOptions:AICustomModelOptionsSliceReducer,
        TaskmanagerSidebarOptions:TaskmanagerSidebarOptionsSliceReducer,
        UserData:UserDataSliceReducer


    }
})