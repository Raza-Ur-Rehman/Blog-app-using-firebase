// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBJ2VyAmj5kLRXbwEu5rQk1DTvxsJweLzw",
  authDomain: "bloging-web-34549.firebaseapp.com",
  projectId: "bloging-web-34549",
  storageBucket: "bloging-web-34549.appspot.com",
  messagingSenderId: "618233084313",
  appId: "1:618233084313:web:d55fe03a4d67d53de83b08",
  measurementId: "G-SML9FX3F85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail}