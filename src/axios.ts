import axios, {AxiosRequestConfig} from "axios";

const instance = axios.create({
    baseURL: "http://16.170.206.113:8000"
})


instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("token")
    return config
})

export default instance