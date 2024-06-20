import { createSlice } from "@reduxjs/toolkit";
import {UserImg} from '../../assets/index'

const initialState = {
    UserData:{
        UserImage:UserImg,
        UserName:'',
        UserEmail:'',
        UserPassword:'',
        UserRole:'No Role set',
        UserDesc:'No Description Set. You can update it in settings.',
        UserOrganisation:'Organisation Name Here'
    }
}

const loadSettingsFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('UserData');
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
        localStorage.setItem('UserData', serializedState);
    } catch (e) {
        console.warn("Could not save settings to local storage", e);
    }
};


const UserDataSlice = createSlice({
    name:'UserData',
    initialState:loadSettingsFromLocalStorage(),
    reducers:{
        setUserData:(state,action)=>{
            state.UserData = {
                ...state.UserData,
                ...action.payload
            }
            saveSettingsToLocalStorage(state)
        },
      
    }
})

export const {setUserData} = UserDataSlice.actions;

export default UserDataSlice.reducer;