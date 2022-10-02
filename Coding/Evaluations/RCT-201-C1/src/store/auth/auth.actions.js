// Auth Actions here

import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types"

import axios from "axios"


export const logiApi=(data)=>(dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING})
    axios.post("https://reqres.in/api/login",{
        email:data.email,
        password:data.password
    }).then(r=>{
        dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:r.data})
    }).catch(()=>{
        dispatch({type:AUTH_SIGN_IN_ERROR})
    })
}
export const logoutApi=()=>(dispatch)=>{
    dispatch({type:AUTH_SIGN_OUT})
}