"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { 
  signupWithEmail, 
  loginWithGoogle,
  handleGoogleRedirectResult,
  subscribeToAuthState 
} from "../lib/auth";
import { 
  validateEmail, 
  suggestEmailCorrection,
  createDebouncedValidator 
} from "../utils/emailValidation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailValidation, setEmailValidation] = useState({
    isValid: true,
    errors: [],
    warnings: [],
    suggestion: null
  });
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const router = useRouter();

  // Handle Google redirect result on component mount
  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await handleGoogleRedirectResult();
        if (result?.user) {
          console.log("Google redirect successful:", result.user);
          router.push("/home"); // Use lowercase for consistency
        }
      } catch (error) {
        console.error("Redirect result error:", error);
        setError("Google sign-in failed. Please try again.");
      }
    };

    checkRedirectResult();
  }, [router]);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = subscribeToAuthState((user) => {
      if (user) {
        console.log("User authenticated:", user);
        // Small delay to ensure auth state is fully set
        setTimeout(() => {
          router.push("/Home");
        }, 100);
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Debounced email validation
  const debouncedValidateEmail = useCallback(
    createDebouncedValidator(async (emailValue) => {
      if (!emailValue.trim()) {
        setEmailValidation({ isValid: true, errors: [], warnings: [], suggestion: null });
        setIsValidatingEmail(false);
        return;
      }

      setIsValidatingEmail(true);
      const validation = validateEmail(emailValue);
      setEmailValidation(validation);
      setShowSuggestion(!!validation.suggestion);
      setIsValidatingEmail(false);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedValidateEmail(email);
  }, [email, debouncedValidateEmail]);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setShowSuggestion(false);
    if (error && error.includes("email")) {
      setError("");
    }
  };

  const handleSuggestionClick = () => {
    if (emailValidation.suggestion) {
      setEmail(emailValidation.suggestion);
      setShowSuggestion(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Final email validation before submission
    const finalValidation = validateEmail(email);
    if (!finalValidation.isValid) {
      setError(finalValidation.errors[0]);
      setIsLoading(false);
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
            await signupWithEmail(email, password, name);
            alert("Account created successfully!");

            // Handle redirect after signup
            const urlParams = new URLSearchParams(window.location.search);
            const redirectPath = urlParams.get('redirect');

            if (redirectPath) {
                window.location.href = redirectPath;
            } else {
                window.location.href = '/';
            }
        } catch (error) {
      console.error("Signup error:", error);

      // Handle specific Firebase errors
      if (err.code === 'auth/email-already-in-use') {
        setError("An account with this email already exists");
      } else if (err.code === 'auth/weak-password') {
        setError("Password is too weak");
      } else if (err.code === 'auth/invalid-email') {
        setError("Invalid email address");
      } else {
        setError(err.message || "Failed to create account. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setIsLoading(true);

    try {
            await loginWithGoogle();
            alert("Google signup successful!");

            // Handle redirect after signup
            const urlParams = new URLSearchParams(window.location.search);
            const redirectPath = urlParams.get('redirect');

            if (redirectPath) {
                window.location.href = redirectPath;
            } else {
                window.location.href = '/';
            }
        } catch (error) {
      console.error("Google sign-in error:", err);

      // Handle specific errors
      if (err.message.includes('cancelled')) {
        setError(""); // Don't show error for user cancellation
      } else if (err.message.includes('blocked')) {
        setError("Popup was blocked. Please allow popups and try again.");
      } else {
        setError("Google sign-in failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getEmailInputClasses = () => {
    let baseClasses = "w-full rounded-md border px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none transition-colors";

    if (email && !isValidatingEmail) {
      if (emailValidation.isValid) {
        return `${baseClasses} border-green-300 focus:border-green-500 focus:ring-green-500`;
      } else {
        return `${baseClasses} border-red-300 focus:border-red-500 focus:ring-red-500`;
      }
    }

    return `${baseClasses} border-gray-300 focus:border-blue-500 focus:ring-blue-500`;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <Head>
        <title>Signup - RoadmapFinder</title>
      </Head>

      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-bold text-gray-900">Sign up</h2>
          <p className="mt-2 text-gray-600">Create your account to get started</p>
        </div>

        {error && (
          <div className="text-red-600 text-sm text-center bg-red-100 p-3 rounded-md border border-red-200">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 transition-colors"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              required
              className={getEmailInputClasses()}
              value={email}
              onChange={handleEmailChange}
            />

            {isValidatingEmail && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
              </div>
            )}

            {email && !isValidatingEmail && emailValidation.isValid && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}

            {email && !isValidatingEmail && !emailValidation.isValid && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}

            {/* Email validation feedback */}
            {email && !isValidatingEmail && (
              <div className="mt-1 text-sm">
                {emailValidation.errors.map((errorMsg, index) => (
                  <div key={index} className="text-red-600 flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMsg}
                  </div>
                ))}

                {emailValidation.warnings.map((warning, index) => (
                  <div key={index} className="text-yellow-600 flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    {warning}
                  </div>
                ))}

                {showSuggestion && emailValidation.suggestion && (
                  <div className="text-blue-600 text-sm mt-1">
                    <button
                      type="button"
                      onClick={handleSuggestionClick}
                      className="underline hover:text-blue-800 focus:outline-none"
                    >
                      Did you mean {emailValidation.suggestion}?
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password (min. 6 characters)"
              required
              minLength={6}
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password && password.length < 6 && (
              <div className="mt-1 text-sm text-yellow-600 flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Password must be at least 6 characters long
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || !emailValidation.isValid || isValidatingEmail}
            className="w-full rounded-md bg-blue-500 py-3 px-4 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Creating Account...
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-4 text-gray-500 text-sm">or continue with</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full flex items-center justify-center rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
        >
          <span className="mr-3">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </span>
          {isLoading ? "Signing in..." : "Continue with Google"}
        </button>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/Login"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}