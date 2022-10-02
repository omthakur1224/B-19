import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAPI } from '../store/auth/auth.actions';

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  // email: 'eve.holt@reqres.in',
  // password: 'cityslicka',
  const dispatch = useDispatch();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('loginCreds: ', loginCreds);
    dispatch(loginAPI(loginCreds));
  };
  return (
    <div>
      <h3>Email : eve.holt@reqres.in</h3>
      <h3>Password : cityslicka</h3>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          maxWidth: '200px',
          gap: '10px',
        }}
      >
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
        />
        <button data-cy="login-submit" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
