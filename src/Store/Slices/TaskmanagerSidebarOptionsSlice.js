import { createSlice } from "@reduxjs/toolkit";

const TaskManagerSidebarOptionsSlice = createSlice({
    name:'TaskmanagerSidebarOptions',

    initialState:{
        currTaskmanagerSidebarOptions:''
    },

    reducers:{
        setcurrTaskmanagerSidebarOptions:(state,action)=>{
            state.currTaskmanagerSidebarOptions = action.payload
        }
    }

})

export const {setcurrTaskmanagerSidebarOptions} = TaskManagerSidebarOptionsSlice.actions;

export default TaskManagerSidebarOptionsSlice.reducer
