import axios from "axios";
import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS } from "./Auth.types"


export const login=async(dispatch)=>{
    //htttp://localhost:8080user/login
  dispatch({type:AUTH_LOGIN_LOADING});
  try{
    let response=await axios.post("http://localhost:8080/users/login");
    dispatch({type:AUTH_LOGIN_SUCCESS,payload:response.data})
  }catch(e){
    dispatch({type:AUTH_LOGIN_ERROR})
  }
}
export const logout=()=>{type:AUTH_LOGOUT}