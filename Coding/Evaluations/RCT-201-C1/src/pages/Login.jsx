import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logiApi } from "../store/auth/auth.actions";

const Login = () => {
  const dispatch=useDispatch()
 const [FormData,setFormdata]=useState({
  email: "eve.holt@reqres.in",
    password: "cityslicka",
 })

  const {data,loading,error}=useSelector((state)=>state.auth)
 
   const handlechange=(e)=>{
      const {name,value}=e.target
     setFormdata({
      ...FormData,
      [name]:value
     })
   }
   const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(logiApi(FormData))

   }



  return (
    loading?<div>...Loading</div>
    :error?<div>Error</div>:
    <div>
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email"  onChange={handlechange} name="email" value={FormData.email} />
        <input data-cy="login-password" onChange={handlechange} name="password" value={FormData.password} />
        <button data-cy="login-submit" type="submit">{data.isAuthenticated?"Logout":"Login"}</button>
      </form>
    </div>
  );
};

export default Login;