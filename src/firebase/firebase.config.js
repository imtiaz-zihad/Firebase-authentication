// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC950jU7EOIYJbf_AuMeGI6nRae_cvm4jQ",
  authDomain: "fir-authentication-51ed2.firebaseapp.com",
  projectId: "fir-authentication-51ed2",
  storageBucket: "fir-authentication-51ed2.firebasestorage.app",
  messagingSenderId: "675874555075",
  appId: "1:675874555075:web:284fbd312cae5801aace76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;