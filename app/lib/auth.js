import { auth, provider } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

// Login with Email
export const loginWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Signup with Email
export const signupWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Google Auth
export const loginWithGoogle = () => signInWithPopup(auth, provider);

// Export onAuthStateChanged
export { onAuthStateChanged };