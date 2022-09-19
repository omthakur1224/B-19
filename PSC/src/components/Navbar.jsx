import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../store/auth/Auth.action';

function Navbar() {
    //TODO: fix login flow
    let token=useSelector((store)=>store.auth.token);
    const navigate=useNavigate();
    let isLoggedIn=false;
    const dispatch=useDispatch();
    const toggleLogin=()=>{
        if(token){
            dispatch(logout())
        }
        else{
            navigate('/login')
        }
    }
  return (
    <div style={{padding:"10px",display:'flex', gap:'20px'}}>
      Navbar:
      <Link to="">Products</Link>
      <Link to='cart'>Cart items</Link>
      <button onClick={toggleLogin}>Login</button>
    </div>
  )
}

export default Navbar
