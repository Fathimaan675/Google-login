import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1057689334867-2bmrcj972j3ks52jiscf6clqai7mpfnp.apps.googleusercontent.com">
    <BrowserRouter><App /></BrowserRouter>
    </GoogleOAuthProvider>;

  </React.StrictMode>,
)
