import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/auth/auth.actions';
import { getCartItems } from '../../store/cart/cart.actions';

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  
  let { data } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const handleLoginClick = () => {
    // login screen
    if (isAuthenticated) {
      dispatch(logout());
      // he wants to logout
    } else {
      // he wants to login
      navigate('/login');
    }
  };
  return (
    <div data-cy="navbar" style={{ display: 'flex', gap: '20px' }}>
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link to="/" data-cy="navbar-home-a">
          Home
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div data-cy="navbar-cart-items-count"> Cart: {data.length}</div>
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
