// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3fAnWp9ZEjuuxq-NFyAS_ec7vyS2seTs",
  authDomain: "napanga-7ec8b.firebaseapp.com",
  projectId: "napanga-7ec8b",
  storageBucket: "napanga-7ec8b.appspot.com",
  messagingSenderId: "331952966312",
  appId: "1:331952966312:web:0ce13abc5c1b38668ed09d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 // --------------------------------------------------------------- //
// Inicio authentication
const auth = getAuth(app);

// login
export const onSignIn = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// logout

export const logout = async () => {
  signOut(auth);
};

// login con google

const googleProvider = new GoogleAuthProvider();

export const loginGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);
  return res;
};

// registro

export const registro = async ({ email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// recuperar contraseña

export const forgotPassword = async (email) =>{
  await sendPasswordResetEmail(auth, email)
}

// ------------------------------------------------------------- //
// Incio Firestore
export const db = getFirestore(app);