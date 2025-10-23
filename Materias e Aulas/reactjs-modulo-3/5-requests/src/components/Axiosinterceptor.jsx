import React, {useState} from "react"
import axios from "axios"

axios.interceptors.request.use((config => {
    config.headers['Authorization'] = 'Bearer token12345'
    console.log("Iniciando requisição...")
    return config
}), (error) => {
    return Promise.reject(error)
})

const Axiosinterceptor = () => {



}

export default Axiosinterceptor