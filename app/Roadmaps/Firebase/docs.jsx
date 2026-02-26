// components/Docs.jsx
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Firebase Official Documentation",
    description:
      "The central official Firebase documentation hub covering all Firebase products, guides, SDKs, best practices, and architecture patterns.",
    url: "https://firebase.google.com/docs",
    citation: "Firebase Docs",
  },
  {
    title: "Firebase Console",
    description:
      "Official Firebase Console for managing projects, enabling services, monitoring usage, analytics, authentication, databases, and deployments.",
    url: "https://console.firebase.google.com/",
    citation: "Firebase Console",
  },
  {
    title: "Firebase Authentication Documentation",
    description:
      "Official documentation for Firebase Authentication including email/password, OAuth providers, phone auth, custom tokens, MFA, and security best practices.",
    url: "https://firebase.google.com/docs/auth",
    citation: "Firebase Auth",
  },
  {
    title: "Cloud Firestore Documentation",
    description:
      "Official Cloud Firestore documentation covering data modeling, queries, indexing, pagination, offline support, and scalability best practices.",
    url: "https://firebase.google.com/docs/firestore",
    citation: "Firestore Docs",
  },
  {
    title: "Firebase Security Rules",
    description:
      "Official documentation for writing secure Firebase Security Rules for Firestore, Realtime Database, and Cloud Storage.",
    url: "https://firebase.google.com/docs/rules",
    citation: "Security Rules",
  },
  {
    title: "Cloud Functions for Firebase",
    description:
      "Official documentation for Firebase Cloud Functions including HTTPS functions, callable functions, background triggers, cron jobs, and integrations.",
    url: "https://firebase.google.com/docs/functions",
    citation: "Cloud Functions",
  },
  {
    title: "Cloud Storage for Firebase",
    description:
      "Official documentation for securely uploading, downloading, and managing user-generated files such as images and videos.",
    url: "https://firebase.google.com/docs/storage",
    citation: "Firebase Storage",
  },
  {
    title: "Firebase Hosting Documentation",
    description:
      "Official Firebase Hosting documentation for deploying static sites, SPAs, SSR apps, custom domains, HTTPS, and CDN-backed hosting.",
    url: "https://firebase.google.com/docs/hosting",
    citation: "Firebase Hosting",
  },
  {
    title: "Firebase Emulator Suite",
    description:
      "Official documentation for running Firebase services locally including Auth, Firestore, Functions, Hosting, and Rules testing.",
    url: "https://firebase.google.com/docs/emulator-suite",
    citation: "Emulator Suite",
  },
  {
    title: "Firebase CLI Documentation",
    description:
      "Official Firebase CLI documentation for initializing projects, deploying services, managing environments, and CI/CD workflows.",
    url: "https://firebase.google.com/docs/cli",
    citation: "Firebase CLI",
  },
  {
    title: "Firebase Extensions",
    description:
      "Official Firebase Extensions documentation for prebuilt solutions like Stripe payments, email triggers, image resizing, and search indexing.",
    url: "https://firebase.google.com/docs/extensions",
    citation: "Firebase Extensions",
  },
  {
    title: "Firebase Analytics",
    description:
      "Official documentation for Firebase Analytics covering event tracking, user properties, funnels, and integration with Google Analytics.",
    url: "https://firebase.google.com/docs/analytics",
    citation: "Firebase Analytics",
  },
  {
    title: "Firebase Performance Monitoring",
    description:
      "Official documentation for monitoring app performance, network requests, app startup time, and backend latency.",
    url: "https://firebase.google.com/docs/perf-mon",
    citation: "Performance Monitoring",
  },
  {
    title: "Firebase Crashlytics",
    description:
      "Official documentation for Firebase Crashlytics to track crashes, non-fatal errors, stack traces, and stability metrics.",
    url: "https://firebase.google.com/docs/crashlytics",
    citation: "Crashlytics",
  },
  {
    title: "Firebase Admin SDK",
    description:
      "Official documentation for Firebase Admin SDK used in trusted server environments for privileged access to Firebase services.",
    url: "https://firebase.google.com/docs/admin/setup",
    citation: "Admin SDK",
  },
  {
    title: "Firebase Blog",
    description:
      "Official Firebase Blog featuring announcements, new features, best practices, case studies, and ecosystem updates.",
    url: "https://firebase.blog/",
    citation: "Firebase Blog",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🔥 Firebase Developer Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Essential official Firebase resources — from fundamentals to
          production-grade backend and full-stack application architecture.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>

              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}