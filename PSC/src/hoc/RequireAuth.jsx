import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function RequireAuth({children}) {
    const token=useSelector((store)=>store.auth.token);
    if(token){
        return children
    }
    
  return (
    //navigate to login
    // <div>RequireAuth</div>
    <Navigate to='/login'/>
  )
}

export default RequireAuth