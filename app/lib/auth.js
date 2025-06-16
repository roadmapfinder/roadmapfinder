// lib/auth.js
import { auth, provider } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

// Login with Email
export const loginWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Signup with Email (with display name support)
export const signupWithEmail = async (email, password, displayName = null) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    // Update display name if provided
    if (displayName && result.user) {
      await updateProfile(result.user, {
        displayName: displayName.trim(),
      });
    }

    return result;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

// Google Auth with Popup (improved error handling)
export const loginWithGoogle = async () => {
  try {
    // Configure provider for better compatibility
    provider.setCustomParameters({
      prompt: 'select_account'
    });

    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    console.error("Google login error:", error);

    // Handle specific popup errors
    if (error.code === 'auth/popup-closed-by-user') {
      throw new Error('Sign-in was cancelled');
    } else if (error.code === 'auth/popup-blocked') {
      throw new Error('Popup was blocked. Please allow popups and try again.');
    }

    throw error;
  }
};

// Google Auth with Redirect (alternative for COOP issues)
export const loginWithGoogleRedirect = async () => {
  try {
    provider.setCustomParameters({
      prompt: 'select_account'
    });

    await signInWithRedirect(auth, provider);
    // Note: This will redirect the page, so no return value
  } catch (error) {
    console.error("Google redirect login error:", error);
    throw error;
  }
};

// Handle redirect result (call this on page load)
export const handleGoogleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    return result; // Will be null if no redirect happened
  } catch (error) {
    console.error("Redirect result error:", error);
    throw error;
  }
};

// Logout function
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

// Auth state listener with cleanup
export const subscribeToAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Get current user
export const getCurrentUser = () => {
  return auth.currentUser;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!auth.currentUser;
};

// Export onAuthStateChanged for direct use
export { onAuthStateChanged };