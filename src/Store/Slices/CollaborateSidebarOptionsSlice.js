import { createSlice } from "@reduxjs/toolkit";

const CollaborateSidebarOptionsSlice = createSlice({

    name:'CollaborateSidebarOptions',

    initialState:{
        currCollaborateSidebarOptions:'Add Collaborator'
    },

    reducers:{
        setcurrCollaborateSidebarOptions:(state,action)=>{
            state.currCollaborateSidebarOptions = action.payload;
        }
    }


});

export const {setcurrCollaborateSidebarOptions} = CollaborateSidebarOptionsSlice.actions;

export default CollaborateSidebarOptionsSlice.reducer;