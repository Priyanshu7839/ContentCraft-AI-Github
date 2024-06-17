import { createSlice } from "@reduxjs/toolkit";

const AICustomModelOptionsSlice = createSlice({
    name:'AICustomModelOptions',

    initialState:{
        currAICustomModelOption:'Build Model'
    },

    reducers:{
        setcurrAICustomModelOption : (state,action)=>{
            state.currAICustomModelOption = action.payload;
        }
    }
})

export const {setcurrAICustomModelOption} = AICustomModelOptionsSlice.actions

export default AICustomModelOptionsSlice.reducer;