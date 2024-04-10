// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe-0AZvHkPXTI1z4cM-knFfRKqJRUQxBM",
  authDomain: "react--login-3d26f.firebaseapp.com",
  projectId: "react--login-3d26f",
  storageBucket: "react--login-3d26f.appspot.com",
  messagingSenderId: "728293066587",
  appId: "1:728293066587:web:3674b38b3fd9cea7ed3c7e",
  measurementId: "G-Y9625HX73K"
};

// Initialize Firebase with first-party cookies enabled
const app = initializeApp(firebaseConfig, {
  // Set 'session' as the type of cookie
  authDomain: 'react--login-3d26f.firebaseapp.com',
  cookies: {
    // Set the name of the cookie
    name: 'SESSION_ID',
    // Set other cookie options as needed
    // For example, you can specify the domain and path where the cookie is valid
    domain: 'yourdomain.com',
    path: '/',
    // Set other options as needed, such as secure, sameSite, and maxAge
  }
});

// Get authentication instance
const auth = getAuth(app);

// Export authentication for use in your application
export { auth };

// Rest of your Firebase authentication code...
