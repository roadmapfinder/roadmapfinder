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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

//project-813692536552