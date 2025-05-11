// lib/auth.js
import { auth, provider } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// Login with Email
export const loginWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Signup with Email
export const signupWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Google Auth
export const loginWithGoogle = () => signInWithPopup(auth, provider);
