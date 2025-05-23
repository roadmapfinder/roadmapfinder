// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  
  apiKey: "AIzaSyCw1BqUuctfKOgJXqyTLmox2qw1F0fQCKo",
  authDomain: "roadmapfinder-de61d.firebaseapp.com",
  projectId: "roadmapfinder-de61d",
  storageBucket: "roadmapfinder-de61d.firebasestorage.app",
  messagingSenderId: "813692536552",
  appId: "1:813692536552:web:9aac3d98f1ace8c257ab5d",
  measurementId: "G-16MV33H4NL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Configure Google provider with proper scopes and settings
const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

export { auth, provider };