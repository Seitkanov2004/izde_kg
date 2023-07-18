import {createSlice} from "@reduxjs/toolkit";

interface IAction {
    product: any[]
}

const initialState: IAction = {
    product: []
}


export const actionSlice = createSlice({
    name: "ACTION",
    initialState,
    reducers: {

    },
})

export const {} = actionSlice.actions
export default actionSlice.reducer