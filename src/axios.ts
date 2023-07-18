import axios from "axios";

const instance = axios.create({
    baseURL: "http://16.170.206.113:8000"
})

export default instance