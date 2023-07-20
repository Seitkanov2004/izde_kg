import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "../../../axios";

export const fetchUserData: any = createAsyncThunk("/oauth/fetchLogin", async (params: any) => {
    const {data} = await axios.post("/oauth/login", params)
    return data
})


interface ILoginSlice {
    data: any
    status: string
}

const initialState: ILoginSlice = {
    data: null,
    status: "loading"
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) =>{
            state.data = null
        }
    },
    extraReducers: builder => {
        const {pending, fulfilled, rejected} = fetchUserData
        builder
            .addCase(pending, (state) => {
                state.status = "loading"
                state.data = null
            })
            .addCase(fulfilled, (state, action: PayloadAction<any>) => {
                state.status = "loaded"
                state.data = action.payload
            })
            .addCase(rejected, (state) => {
                state.status = "error"
                state.data = null
            });
    }
})

export const selectIsAuth = (state:any) => Boolean(state.auth)
export const {logout} = authSlice.actions
export default authSlice.reducer