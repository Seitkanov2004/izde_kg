import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IMap{
    center: any,
    placeName: any,
}

const initialState: IMap = {
    center: {
        lat: 42.877733,
        lng: 74.606783
    },
    placeName: {}
}

const mapSlice = createSlice({
    name: "MAP",
    initialState,
    reducers: {
        addCenter(state, {payload}: PayloadAction<any>){
            state.center = payload
        },
        getPlaceName(state, {payload}: PayloadAction<any>){
            state.placeName = payload
        }
    }
})

export const {addCenter, getPlaceName} = mapSlice.actions
export default mapSlice.reducer