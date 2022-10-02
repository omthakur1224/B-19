import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {

 const {data}=useSelector((state)=>state.auth)
 const location=useLocation()
 if(data.isAuthenticated){
  return children
 }
 else{
  return <Navigate to="/login" state={{from:location}} replace/>
 }
 
};

export default RequiredAuth;