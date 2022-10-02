import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const RequiredAuth = ({ children }) => {
  const { data } = useSelector((state) => state.auth);
  console.log('data: ', data);
  
  if (data.isAuthenticated) {
    return children;
  } else {
    return (
      // Redirecting to Login page
      <Navigate to="/login" />
    );
  }
};

export default RequiredAuth;
