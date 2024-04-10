import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();

  const [userdetails, setUserDetails] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (userdetails.email && userdetails.password) {
      toast.success('Successfully logged in');
      navigate('/Frount');
    } else {
      setError('Please fill out the form completely');
    }
  };

  return (
    <>
      <div className="wrapper">
        <form>
          <h1>Login</h1>
          <br />
          <div className="googlelogin">
            <button onClick={handleLogin}>Sign in with Google 🚀</button>
          </div>
          <div className="input-box">
            <input
              type="email"
              className="form-control mb-2 mt-"
              placeholder="Enter the Registered email"
              value={userdetails.email}
              onChange={(e) => setUserDetails({ ...userdetails, email: e.target.value })}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Password"
              value={userdetails.password}
              onChange={(e) => setUserDetails({ ...userdetails, password: e.target.value })}
            />
          </div>
          <div className="rember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <br />
          <button type="button" className="btn" onClick={handleLogin}>
            Login
          </button>
          <br />
          <br />
          {error && <p>{error}</p>}
        </form>
      </div>

      <div className="text-center mt-3 container ">
        <div>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const responseDecoded = jwtDecode(credentialResponse.credential);
              console.log(responseDecoded);
              sessionStorage.setItem('userName', responseDecoded.name);
              sessionStorage.setItem('Image', responseDecoded.picture);
              navigate('/Frount');
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          ;
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}

export default Login;
