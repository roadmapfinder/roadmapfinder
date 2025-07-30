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
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const router = useRouter();

  // Handle Google redirect result on component mount
  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await handleGoogleRedirectResult();
        if (result?.user) {
          console.log("Google redirect successful:", result.user);
          router.push("/home");
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
        setTimeout(() => {
          router.push("/Home");
        }, 100);
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Password strength calculator
  useEffect(() => {
    const calculateStrength = (pass) => {
      let strength = 0;
      if (pass.length >= 6) strength += 1;
      if (pass.length >= 8) strength += 1;
      if (/[A-Z]/.test(pass)) strength += 1;
      if (/[0-9]/.test(pass)) strength += 1;
      if (/[^A-Za-z0-9]/.test(pass)) strength += 1;
      return strength;
    };

    setPasswordStrength(calculateStrength(password));
  }, [password]);

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
      console.log("Attempting to create user...");
      const result = await signupWithEmail(email.trim(), password, name);
      console.log("User created successfully:", result.user);
    } catch (err) {
      console.error("Signup error:", err);

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
      console.log("Attempting Google sign-in...");
      const result = await loginWithGoogle();
      console.log("Google sign-in successful:", result.user);
    } catch (err) {
      console.error("Google sign-in error:", err);

      if (err.message.includes('cancelled')) {
        setError("");
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
    let baseClasses = "w-full rounded-xl border-2 px-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300 bg-gray-50/50 backdrop-blur-sm";

    if (email && !isValidatingEmail) {
      if (emailValidation.isValid) {
        return `${baseClasses} border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 bg-emerald-50/30`;
      } else {
        return `${baseClasses} border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 bg-red-50/30`;
      }
    }

    return `${baseClasses} border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300`;
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 1) return "bg-red-400";
    if (passwordStrength <= 2) return "bg-yellow-400";
    if (passwordStrength <= 3) return "bg-blue-400";
    return "bg-emerald-400";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 1) return "Weak";
    if (passwordStrength <= 2) return "Fair";
    if (passwordStrength <= 3) return "Good";
    return "Strong";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center px-4 py-12">
      <Head>
        <title>Join RoadmapFinder - Start Your Journey</title>
        <meta name="description" content="Create your account and discover personalized learning paths" />
      </Head>



      <div className="w-full max-w-md relative">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
            Start Your Journey
          </h1>
          <p className="text-gray-600 text-lg">Join thousands of learners discovering their perfect roadmap</p>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-6 mb-8 text-sm text-gray-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-emerald-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secure & Private
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Trusted by 10k+
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center">
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Google Sign In */}
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 py-4 px-6 text-gray-700 font-semibold transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-gray-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-sm"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
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
              {isLoading ? "Signing in..." : "Continue with Google"}
            </button>
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50/50 backdrop-blur-sm hover:border-gray-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className={getEmailInputClasses()}
                  value={email}
                  onChange={handleEmailChange}
                />

                {isValidatingEmail && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
                  </div>
                )}

                {email && !isValidatingEmail && emailValidation.isValid && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="bg-emerald-100 rounded-full p-1">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}

                {email && !isValidatingEmail && !emailValidation.isValid && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="bg-red-100 rounded-full p-1">
                      <svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Email validation feedback */}
              {email && !isValidatingEmail && (
                <div className="space-y-1">
                  {emailValidation.errors.map((errorMsg, index) => (
                    <div key={index} className="text-red-600 text-xs flex items-center bg-red-50 px-3 py-2 rounded-lg">
                      <svg className="h-4 w-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errorMsg}
                    </div>
                  ))}

                  {emailValidation.warnings.map((warning, index) => (
                    <div key={index} className="text-yellow-600 text-xs flex items-center bg-yellow-50 px-3 py-2 rounded-lg">
                      <svg className="h-4 w-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {warning}
                    </div>
                  ))}

                  {showSuggestion && emailValidation.suggestion && (
                    <div className="bg-blue-50 px-3 py-2 rounded-lg">
                      <button
                        type="button"
                        onClick={handleSuggestionClick}
                        className="text-blue-600 text-xs hover:text-blue-800 focus:outline-none flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Did you mean <span className="font-semibold underline">{emailValidation.suggestion}</span>?
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  required
                  minLength={6}
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-4 pr-12 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50/50 backdrop-blur-sm hover:border-gray-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {password && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Password strength:</span>
                    <span className={`font-semibold ${passwordStrength <= 1 ? 'text-red-500' : passwordStrength <= 2 ? 'text-yellow-500' : passwordStrength <= 3 ? 'text-blue-500' : 'text-emerald-500'}`}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                      style={{ width: `${(passwordStrength / 5) * 100}%` }}
                    ></div>
                  </div>
                  {password.length < 6 && (
                    <div className="text-yellow-600 text-xs flex items-center bg-yellow-50 px-3 py-2 rounded-lg">
                      <svg className="h-4 w-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      Password must be at least 6 characters long
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !emailValidation.isValid || isValidatingEmail}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Creating Your Account...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <span>Create My Account</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center py-4">
            <div className="border-t border-gray-200 flex-grow"></div>
            <span className="mx-4 text-gray-400 text-sm font-medium">or continue with</span>
            <div className="border-t border-gray-200 flex-grow"></div>
          </div>

          {/* Login Link */}
          <div className="text-center pt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/Login"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}