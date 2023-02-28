import axios from "axios";

export const axiosHomeInstance=axios.create({
    baseURL:'/api'
})