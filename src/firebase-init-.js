// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEA6sz1114wVpt5OWefI7fxelEzG_pZJI",
  authDomain: "ema-jon-app.firebaseapp.com",
  projectId: "ema-jon-app",
  storageBucket: "ema-jon-app.appspot.com",
  messagingSenderId: "1057922248897",
  appId: "1:1057922248897:web:ce9943aba5c3d8b8b52440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth