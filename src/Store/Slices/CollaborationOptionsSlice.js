import { createSlice } from "@reduxjs/toolkit";

const CollaborationOptionsSlice = createSlice({
    name:'CollaborationOptions',
    initialState:{
        projectInvitation:true,
        editsAndComments:true,
        approvals:true,
        collaborationActivities:true
    },
    reducers:{
        setprojectInvitation:(state,action)=>{
            state.projectInvitation = action.payload;
        },
        seteditsAndComments:(state,action)=>{
            state.editsAndComments = action.payload;
        },
        setapprovals:(state,action)=>{
            state.approvals = action.payload;
        },
        setcollaborationActivities:(state,action)=>{
            state.collaborationActivities = action.payload;
        },
    }
})


export const {setprojectInvitation,seteditsAndComments,setapprovals,setcollaborationActivities} = CollaborationOptionsSlice.actions;

export default CollaborationOptionsSlice.reducer;