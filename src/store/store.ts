import {combineReducers, configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./Reducers/ActionCreater/authSlice";
import MapSlice from "./Reducers/MapSlice";

const rootReducer = combineReducers({
    AuthSlice,
    MapSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}



export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]