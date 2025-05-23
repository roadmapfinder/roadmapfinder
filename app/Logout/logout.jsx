"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Logout() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    setError("");

    try {
      await signOut(auth);
      // Redirect to login page after successful logout
      router.push("/Login");
    } catch (err) {
      console.error("Logout error:", err);
      setError(err.message || "Failed to logout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    // Redirect back to home page if user cancels logout
    router.push("/Home");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <Head>
        <title>Logout - RoadmapFinder</title>
      </Head>

      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-gray-900">Log out</h2>
          <p className="mt-2 text-sm text-gray-600">
            Are you sure you want to log out of your account?
          </p>
        </div>

        {error && (
          <div className="text-red-600 text-sm text-center bg-red-100 p-2 rounded-md">
            {error}
          </div>
        )}

        <div className="mt-8 space-y-4">
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className="w-full flex justify-center rounded-md bg-red-600 py-3 px-4 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:bg-red-300 transition-colors"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Logging out...
              </div>
            ) : (
              "Yes, log me out"
            )}
          </button>

          <button
            onClick={handleCancel}
            disabled={isLoading}
            className="w-full flex justify-center rounded-md border border-gray-300 bg-white py-3 px-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
          >
            Cancel
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Want to switch accounts instead?{" "}
            <Link
              href="/Login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in with different account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}