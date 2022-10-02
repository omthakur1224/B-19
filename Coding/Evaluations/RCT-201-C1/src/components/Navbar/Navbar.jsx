import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutApi } from "../../store/auth/auth.actions";

const Navbar = () => {
  const [token,setToken]=useState(true);
  const toggle=()=>{
    setToken(!token)
  }
  const {data}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
 const handlelogout=()=>{
  if(data.isAuthenticated){
    dispatch(logoutApi());
    navigate("/login");
  }
  else{
    navigate("/login");
  }
 }
  return (
    <div data-cy="navbar" style={{"width":"100%", "display":'flex',"justifyContent":"space-around", marginRight:"5%",'backgroundColor':'skyblue'}}>
      <div style={{ width:"50%","display":'flex',"justifyContent":"space-between"}}>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link data-cy="navbar-home-link" to=''>logo</Link>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        {/* <Link to='/cart'>Cart</Link> */}
      </div>
      <div style={{display:'flex',justifyContent:"space-evenly", "marginLeft":"20%", "width":"50%"}}>
        <div data-cy="navbar-cart-items-count">
          {/* <Link to='/cart'>Cart :0</Link> */}count
        </div>
        {token?
        <Link to='/login'><button onClick={toggle}>Login</button></Link>:
        <button data-cy="navbar-login-logout-button" onClick={handlelogout}>Logout</button>
        }
      </div>
    </div>
  );
};

export default Navbar;
