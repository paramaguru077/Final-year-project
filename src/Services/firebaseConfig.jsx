// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApXCnyn4TjoZEAIdmZXrxwE2QSqlTA0V8",
  authDomain: "portfolio-099.firebaseapp.com",
  projectId: "portfolio-099",
  storageBucket: "portfolio-099.firebasestorage.app",
  messagingSenderId: "111088626017",
  appId: "1:111088626017:web:d8ce551a70973aaf7d3d20",
  measurementId: "G-WF1VRLEXGT"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
