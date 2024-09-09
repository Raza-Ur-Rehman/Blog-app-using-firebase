// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
//  athuntication 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail,signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// fireStore 
import {getFirestore, collection, addDoc, getDocs,doc ,deleteDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCXVfRzqvIaedgeA9vSYemrwnx5h52JUeE",
  authDomain: "blog-app-c4f8f.firebaseapp.com",
  projectId: "blog-app-c4f8f",
  storageBucket: "blog-app-c4f8f.appspot.com",
  messagingSenderId: "915925497470",
  appId: "1:915925497470:web:5a00b9f9482c5292e48a2f",
  measurementId: "G-FT98KPC4P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// export function 
export {doc, deleteDoc ,getDocs, collection, addDoc, db, auth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail,signInWithPopup, GoogleAuthProvider}


