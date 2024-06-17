import { createSlice } from "@reduxjs/toolkit";

const AddCollaboratorOptionsSlice = createSlice({
    name:'AddCollaboratorOptions',

    initialState:{
        currAddCollaborationOptions:''
    },

    reducers:{
        setcurrAddCollaborationOptions:(state,action)=>{
            state.currAddCollaborationOptions = action.payload;
        }
    }
})

export const {setcurrAddCollaborationOptions} = AddCollaboratorOptionsSlice.actions;

export default AddCollaboratorOptionsSlice.reducer;