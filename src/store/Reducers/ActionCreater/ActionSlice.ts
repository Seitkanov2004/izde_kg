import {createSlice} from "@reduxjs/toolkit";

interface IAction {

}

const initialState: IAction = {

}


export const actionSlice = createSlice({
    name: "ACTION",
    initialState,
    reducers: {

    },
})

export const {} = actionSlice.actions
export default actionSlice.reducer