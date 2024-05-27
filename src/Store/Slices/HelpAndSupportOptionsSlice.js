import { createSlice } from "@reduxjs/toolkit";

const HelpAndSupportOptionsSlice = createSlice({
    name:'HelpAndSupportOptions',
    initialState:{
        currHelpAndSupportOptions:''
    },
    reducers:{
        setcurrHelpAndSupportOptions:(state,action)=>{
            state.currHelpAndSupportOptions = action.payload;
        }
    }
})

export const {setcurrHelpAndSupportOptions} = HelpAndSupportOptionsSlice.actions;
export default HelpAndSupportOptionsSlice.reducer;