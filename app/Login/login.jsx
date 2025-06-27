"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { loginWithEmail, loginWithGoogle } from "../lib/auth";
import { 
  validateEmail, 
  validateEmailAdvanced, 
  createDebouncedValidator 
} from "../utils/emailValidation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const [validation, setValidation] = useState({
    email: { isValid: true, errors: [], warnings: [] },
    password: { isValid: true, errors: [] }
  });

  const [uiState, setUiState] = useState({
    isLoading: false,
    error: "",
    showPassword: false,
    emailTouched: false,
    passwordTouched: false
  });

  const router = useRouter();

  // Debounced email validation
  const debouncedEmailValidation = useCallback(
    createDebouncedValidator(async (email) => {
      if (!email.trim()) {
        setValidation(prev => ({
          ...prev,
          email: { isValid: true, errors: [], warnings: [] }
        }));
        return;
      }

      // First do basic validation
      const basicValidation = validateEmail(email);
      setValidation(prev => ({
        ...prev,
        email: basicValidation
      }));

      // Then do advanced validation if basic passes
      if (basicValidation.isValid) {
        try {
          const advancedValidation = await validateEmailAdvanced(email);
          setValidation(prev => ({
            ...prev,
            email: advancedValidation
          }));
        } catch (error) {
          console.error('Advanced email validation failed:', error);
        }
      }
    }, 500),
    []
  );

  // Validate password
  const validatePassword = (password) => {
    const errors = [];

    if (!password) {
      errors.push('Password is required');
    } else if (password.length < 6) {
      errors.push('Password must be at least 6 characters');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Mark field as touched
    setUiState(prev => ({ 
      ...prev, 
      [`${field}Touched`]: true,
      error: "" // Clear general error when user starts typing
    }));

    // Validate on change
    if (field === 'email') {
      debouncedEmailValidation(value);
    } else if (field === 'password') {
      const passwordValidation = validatePassword(value);
      setValidation(prev => ({
        ...prev,
        password: passwordValidation
      }));
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setUiState(prev => ({
      ...prev,
      emailTouched: true,
      passwordTouched: true,
      error: ""
    }));

    // Validate all fields
    const emailValidation = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);

    setValidation({
      email: emailValidation,
      password: passwordValidation
    });

    // Don't submit if validation fails
    if (!emailValidation.isValid || !passwordValidation.isValid) {
      setUiState(prev => ({
        ...prev,
        error: "Please fix the errors above before continuing"
      }));
      return;
    }

    setUiState(prev => ({ ...prev, isLoading: true }));

    try {
      await loginWithEmail(formData.email, formData.password);
      // Optional: Handle remember me functionality
      if (formData.rememberMe) {
        // Store preference in secure way (not localStorage in production)
        console.log('Remember me selected');
      }
      
      // Handle redirect after login
      const urlParams = new URLSearchParams(window.location.search);
      const redirectPath = urlParams.get('redirect');

      if (redirectPath) {
        router.push(redirectPath);
      } else {
        router.push("/Home");
      }
    } catch (err) {
      console.error("Email login error:", err);

      // Parse Firebase auth errors for better UX
      let errorMessage = "Failed to login. Please check your credentials.";

      if (err.code === 'auth/user-not-found') {
        errorMessage = "No account found with this email address.";
      } else if (err.code === 'auth/wrong-password') {
        errorMessage = "Incorrect password. Please try again.";
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = "Invalid email address format.";
      } else if (err.code === 'auth/user-disabled') {
        errorMessage = "This account has been disabled. Please contact support.";
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = "Too many failed attempts. Please try again later.";
      }

      setUiState(prev => ({ ...prev, error: errorMessage }));
    } finally {
      setUiState(prev => ({ ...prev, isLoading: false }));
    }
  };

  // Google Sign-in
  const handleGoogleSignIn = async () => {
    setUiState(prev => ({ ...prev, isLoading: true, error: "" }));

    try {
      await loginWithGoogle();
       // Handle redirect after login
       const urlParams = new URLSearchParams(window.location.search);
       const redirectPath = urlParams.get('redirect');

       if (redirectPath) {
         router.push(redirectPath);
       } else {
         router.push("/Home");
       }
    } catch (err) {
      console.error("Google sign-in error:", err);

      let errorMessage = "Failed to login with Google. Please try again.";

      if (err.code === 'auth/popup-closed-by-user') {
        errorMessage = "Sign-in was cancelled.";
      } else if (err.code === 'auth/popup-blocked') {
        errorMessage = "Popup was blocked. Please allow popups and try again.";
      }

      setUiState(prev => ({ ...prev, error: errorMessage }));
    } finally {
      setUiState(prev => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <Head>
        <title>Login - RoadmapFinder</title>
        <meta name="description" content="Login to your RoadmapFinder account" />
      </Head>

      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              {/* Logo placeholder */}
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-bold text-gray-900">Log in</h1>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back! Please sign in to your account.
          </p>
        </div>

        {/* General Error */}
        {uiState.error && (
          <div className="text-red-600 text-sm text-center bg-red-50 border border-red-200 p-3 rounded-md">
            {uiState.error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`relative block w-full rounded-md border px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                uiState.emailTouched && !validation.email.isValid
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              onBlur={() => setUiState(prev => ({ ...prev, emailTouched: true }))}
              disabled={uiState.isLoading}
            />

            {/* Email Validation Messages */}
            {uiState.emailTouched && validation.email.errors.length > 0 && (
              <div className="mt-1 text-sm text-red-600">
                {validation.email.errors.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </div>
            )}

            {/* Email Suggestions */}
            {validation.email.warnings.length > 0 && (
              <div className="mt-1 text-sm text-amber-600">
                {validation.email.warnings.map((warning, index) => (
                  <div key={index} className="flex items-center">
                    <span>{warning}</span>
                    {validation.email.suggestion && (
                      <button
                        type="button"
                        className="ml-2 text-blue-600 hover:text-blue-500 underline"
                        onClick={() => handleInputChange('email', validation.email.suggestion)}
                      >
                        Use this
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={uiState.showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className={`relative block w-full rounded-md border px-4 py-3 pr-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  uiState.passwordTouched && !validation.password.isValid
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                onBlur={() => setUiState(prev => ({ ...prev, passwordTouched: true }))}
                disabled={uiState.isLoading}
              />

              {/* Show/Hide Password Button */}
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setUiState(prev => ({ ...prev, showPassword: !prev.showPassword }))}
                disabled={uiState.isLoading}
              >
                <span className="sr-only">
                  {uiState.showPassword ? 'Hide password' : 'Show password'}
                </span>
                {uiState.showPassword ? (
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Password Validation Messages */}
            {uiState.passwordTouched && validation.password.errors.length > 0 && (
              <div className="mt-1 text-sm text-red-600">
                {validation.password.errors.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </div>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.rememberMe}
                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                disabled={uiState.isLoading}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={uiState.isLoading || (!validation.email.isValid || !validation.password.isValid)}
              className="group relative flex w-full justify-center rounded-md bg-blue-600 py-3 px-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              aria-describedby="login-button-description"
            >
              {uiState.isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </div>
              ) : (
                'Log in'
              )}
            </button>
            <p id="login-button-description" className="sr-only">
              Sign in to your account
            </p>
          </div>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center">
          <div className="border-t border-gray-300 flex-grow"></div>
          <div className="mx-4 text-sm text-gray-500">or</div>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Google Sign-in */}
        <div>
          <button
            onClick={handleGoogleSignIn}
            disabled={uiState.isLoading}
            className="group relative flex w-full justify-center items-center rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            aria-describedby="google-signin-description"
          >
            <span className="mr-3">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </span>
            Continue with Google
          </button>
          <p id="google-signin-description" className="sr-only">
            Sign in with your Google account
          </p>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/Signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
```

```javascript
// Middleware to protect routes for authenticated users only.
```

```javascript
import { NextResponse } from 'next/server';
import { auth } from './firebase/firebase';

export function middleware(request) {
    const sessionCookie = request.cookies.get('session');
    const url = request.nextUrl.clone();

    const protectedRoutes = [
        '/RoadmapPage',
        '/courses',
        '/career-guidance',
        '/docs',
        '/tools',
        '/blogs',
        '/Home' // Added the Home route to be protected
    ];

    const isProtectedRoute = protectedRoutes.some(route =>
        request.nextUrl.pathname.startsWith(route)
    );

    if (!sessionCookie && isProtectedRoute) {
        url.pathname = '/Signup'; // Redirect to signup instead of login
        url.search = `redirect=${request.nextUrl.pathname}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
```

```javascript
// lib/auth.js

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { serialize } from 'cookie';

// Function to set a cookie
const setCookie = (name, value, options = {}) => {
    const cookieString = serialize(name, value, options);
    document.cookie = cookieString;
};

export const signup = async (email, password, displayName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update the user's display name
        await updateProfile(user, {
            displayName: displayName,
        });

        return user;
    } catch (error) {
        console.error("Signup failed:", error);
        throw error;
    }
};

export const loginWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create and set the session cookie
        const token = await user.getIdToken();
        const options = {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 7 days
        };
        setCookie('session', token, options);

        return user;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
        // Clear the session cookie
        setCookie('session', '', { path: '/', maxAge: 0 });
    } catch (error) {
        console.error("Logout failed:", error);
        throw error;
    }
};

export const loginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;

        // Create and set the session cookie
        const token = await user.getIdToken();
        const options = {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 7 days
        };
        setCookie('session', token, options);

        return user;
    } catch (error) {
        console.error("Google login failed:", error);
        throw error;
    }
};
```

```javascript
// utils/redirect.js
import { useRouter } from 'next/navigation';

export const handleRedirect = () => {
    const router = useRouter();
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');

    if (redirectPath) {
        router.push(redirectPath);
    } else {
        router.push("/Home");
    }
};
```

```javascript
// components/Login.js
"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { loginWithEmail, loginWithGoogle } from "../lib/auth";
import { 
  validateEmail, 
  validateEmailAdvanced, 
  createDebouncedValidator 
} from "../utils/emailValidation";
// Import the redirect function
// import { handleRedirect } from '../utils/redirect';

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const [validation, setValidation] = useState({
    email: { isValid: true, errors: [], warnings: [] },
    password: { isValid: true, errors: [] }
  });

  const [uiState, setUiState] = useState({
    isLoading: false,
    error: "",
    showPassword: false,
    emailTouched: false,
    passwordTouched: false
  });

  const router = useRouter();

  // Debounced email validation
  const debouncedEmailValidation = useCallback(
    createDebouncedValidator(async (email) => {
      if (!email.trim()) {
        setValidation(prev => ({
          ...prev,
          email: { isValid: true, errors: [], warnings: [] }
        }));
        return;
      }

      // First do basic validation
      const basicValidation = validateEmail(email);
      setValidation(prev => ({
        ...prev,
        email: basicValidation
      }));

      // Then do advanced validation if basic passes
      if (basicValidation.isValid) {
        try {
          const advancedValidation = await validateEmailAdvanced(email);
          setValidation(prev => ({
            ...prev,
            email: advancedValidation
          }));
        } catch (error) {
          console.error('Advanced email validation failed:', error);
        }
      }
    }, 500),
    []
  );

  // Validate password
  const validatePassword = (password) => {
    const errors = [];

    if (!password) {
      errors.push('Password is required');
    } else if (password.length < 6) {
      errors.push('Password must be at least 6 characters');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Mark field as touched
    setUiState(prev => ({ 
      ...prev, 
      [`${field}Touched`]: true,
      error: "" // Clear general error when user starts typing
    }));

    // Validate on change
    if (field === 'email') {
      debouncedEmailValidation(value);
    } else if (field === 'password') {
      const passwordValidation = validatePassword(value);
      setValidation(prev => ({
        ...prev,
        password: passwordValidation
      }));
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setUiState(prev => ({
      ...prev,
      emailTouched: true,
      passwordTouched: true,
      error: ""
    }));

    // Validate all fields
    const emailValidation = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);

    setValidation({
      email: emailValidation,
      password: passwordValidation
    });

    // Don't submit if validation fails
    if (!emailValidation.isValid || !passwordValidation.isValid) {
      setUiState(prev => ({
        ...prev,
        error: "Please fix the errors above before continuing"
      }));
      return;
    }

    setUiState(prev => ({ ...prev, isLoading: true }));

    try {
      await loginWithEmail(formData.email, formData.password);

      // Optional: Handle remember me functionality
      if (formData.rememberMe) {
        // Store preference in secure way (not localStorage in production)
        console.log('Remember me selected');
      }

      // Handle redirect after login
      const urlParams = new URLSearchParams(window.location.search);
      const redirectPath = urlParams.get('redirect');

      if (redirectPath) {
        router.push(redirectPath);
      } else {
        router.push("/Home");
      }
    } catch (err) {
      console.error("Email login error:", err);

      // Parse Firebase auth errors for better UX
      let errorMessage = "Failed to login. Please check your credentials.";

      if (err.code === 'auth/user-not-found') {
        errorMessage = "No account found with this email address.";
      } else if (err.code === 'auth/wrong-password') {
        errorMessage = "Incorrect password. Please try again.";
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = "Invalid email address format.";
      } else if (err.code === 'auth/user-disabled') {
        errorMessage = "This account has been disabled. Please contact support.";
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = "Too many failed attempts. Please try again later.";
      }

      setUiState(prev => ({ ...prev, error: errorMessage }));
    } finally {
      setUiState(prev => ({ ...prev, isLoading: false }));
    }
  };

  // Google Sign-in
  const handleGoogleSignIn = async () => {
    setUiState(prev => ({ ...prev, isLoading: true, error: "" }));

    try {
      await loginWithGoogle();
       // Handle redirect after login
       const urlParams = new URLSearchParams(window.location.search);
       const redirectPath = urlParams.get('redirect');

       if (redirectPath) {
         router.push(redirectPath);
       } else {
         router.push("/Home");
       }
    } catch (err) {
      console.error("Google sign-in error:", err);

      let errorMessage = "Failed to login with Google. Please try again.";

      if (err.code === 'auth/popup-closed-by-user') {
        errorMessage = "Sign-in was cancelled.";
      } else if (err.code === 'auth/popup-blocked') {
        errorMessage = "Popup was blocked. Please allow popups and try again.";
      }

      setUiState(prev => ({ ...prev, error: errorMessage }));
    } finally {
      setUiState(prev => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <Head>
        <title>Login - RoadmapFinder</title>
        <meta name="description" content="Login to your RoadmapFinder account" />
      </Head>

      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              {/* Logo placeholder */}
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-bold text-gray-900">Log in</h1>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back! Please sign in to your account.
          </p>
        </div>

        {/* General Error */}
        {uiState.error && (
          <div className="text-red-600 text-sm text-center bg-red-50 border border-red-200 p-3 rounded-md">
            {uiState.error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`relative block w-full rounded-md border px-4 py-3 text-gray-900 placeholder-gray