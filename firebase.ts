// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDszE5OsNLPLh73PxacJ-L4d_9PC9f0fXw",
  authDomain: "res-track.firebaseapp.com",
  projectId: "res-track",
  storageBucket: "res-track.appspot.com",
  messagingSenderId: "335141886469",
  appId: "1:335141886469:web:6bb31708ae113cfa831a6c",
  measurementId: "G-20J0LTJZV3"
};

// Initialize Firebase
const app:any = initializeApp(firebaseConfig);
const auth:any = app.auth();

export {auth};