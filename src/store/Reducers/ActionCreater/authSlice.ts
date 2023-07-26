import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "../../../axios";

export const fetchUserData: any = createAsyncThunk("/oauth/fetchLogin", async (params: any) => {
    const {data} = await axios.post("/oauth/login/", params)
    return data
})

export const fetchUserRegister: any = createAsyncThunk("/oauth/fetchRegister", async (params: any) => {
    const {data} = await axios.post("/oauth/register/", params)
    return data
})

const dataLocal: any = localStorage.getItem("token")

interface ILoginSlice {
    data: any
    status: string
}

const initialState: ILoginSlice = {
    data: JSON.parse(dataLocal) || null,
    status: "loading"
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.setItem("token", JSON.stringify(
                state.data = null))
        },
        getToken(state, {payload}: PayloadAction<any>) {
            localStorage.setItem("token", JSON.stringify(state.data = payload))
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = "loading"
                state.data = null
            })
            .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = "loaded"
                state.data = action.payload
            })
            .addCase(fetchUserData.rejected, (state) => {
                state.status = "error"
                state.data = null
            })
            .addCase(fetchUserRegister.pending, (state) => {
                state.status = "loading"
                state.data = null
            })
            .addCase(fetchUserRegister.fulfilled, (state, {payload}) => {
                state.status = "loaded"
                state.data = payload
            })
            .addCase(fetchUserRegister.rejected, (state) => {
                state.status = "error"
                state.data = null
            })

    }
})

export const selectIsAuth = (state: any) => Boolean(state.AuthSlice.data)
export const {logout, getToken} = authSlice.actions
export default authSlice.reducer


//AIzaSyC5MuluLr_iD9YTptKrZk5XUgKPVNV7qR0

//AIzaSyB8Z9YCSIyxqCiAfir3krrWMaDsDsSJUjI