import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IMap{
    center: any
}

const initialState: IMap = {
    center: {
        lat: 42.877733,
        lng: 74.606783
    }
}

const mapSlice = createSlice({
    name: "MAP",
    initialState,
    reducers: {
        addCenter(state, {payload}: PayloadAction<any>){
            state.center = payload
        }
    }
})

export const {addCenter} = mapSlice.actions
export default mapSlice.reducer