"use client";
import React from "react";

const DartFlutterCompleteCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          The Complete Dart & Flutter Developer Course — Rivaan Ranawat
        </h1>

        {/* Short summary / Intro */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a single, long “all-in-one” Dart + Flutter course by{" "}
          <strong>Rivaan Ranawat</strong>. The tutorial walks you from Dart
          fundamentals through Flutter UI, state management, offline + online
          data, authentication, and several full apps (todo, e-commerce,
          chat, social media, and more). Course video and many project repositories
          are available on <span className="text-blue-600">YouTube</span> and{" "}
          <span className="text-blue-600">GitHub</span>.
        </p>

        {/* Where to get the code */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course overview & where to get the code
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Title (YouTube):</strong> “The Complete Dart &amp; Flutter Developer Course | Full Tutorial For Beginners to Advanced”
          </li>
          <li>
            <strong>Code & projects:</strong> Rivaan’s GitHub repos with many referenced builds/clones.
          </li>
        </ul>

        {/* High-level table of contents */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          High-level table of contents
        </h2>
        <p className="text-gray-700 mb-6">
          The video covers multiple major sections and apps — Todo app, Sneaker
          shop, Themes (light/dark), Provider state management, E-commerce
          (cart), Null safety, Offline notes app, Habit tracker, Authentication,
          Firebase, Chat app, Social Media app, Weather API examples, and more.
        </p>

        {/* Detailed syllabus */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Detailed syllabus — module by module
        </h2>

        {/* Module A */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module A — Dart fundamentals (language essentials)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong>Syntax & tooling:</strong> Install Dart/Flutter SDK, Flutter CLI, emulator setup</li>
          <li><strong>Language basics:</strong> Types (int, double, bool, String), var/final/const, operators</li>
          <li><strong>Control flow:</strong> if/else, switch, loops (for, while, forEach)</li>
          <li><strong>Functions:</strong> declaration, optional/required params, arrow funcs, higher-order functions</li>
          <li><strong>Collections:</strong> Lists, Sets, Maps — common ops & iteration</li>
          <li><strong>Null-safety:</strong> Nullable types, ?, !, late, sound null safety</li>
          <li><strong>OOP in Dart:</strong> Classes, constructors, inheritance, abstract classes, interfaces, mixins</li>
          <li><strong>Advanced features:</strong> Extensions, generics, factory constructors, enums</li>
          <li><strong>Asynchronous Dart:</strong> Futures, async/await, Streams, StreamBuilder patterns</li>
        </ul>

        {/* Module B */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module B — Flutter basics & UI fundamentals
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong>Everything is a widget:</strong> StatelessWidget vs StatefulWidget, widget tree, build()</li>
          <li><strong>Core layout widgets:</strong> Container, Row, Column, Stack, Center, Padding, Align, ListView</li>
          <li><strong>Material vs Cupertino:</strong> Theming, icons, typography</li>
          <li><strong>Input & forms:</strong> TextField/TextFormField, validation, controllers</li>
          <li><strong>Images & assets:</strong> pubspec.yaml, local & network images</li>
          <li><strong>Navigation:</strong> Navigator push/pop, named routes, intro to navigation packages</li>
          <li><strong>State lifecycle:</strong> initState, dispose, setState best practices</li>
        </ul>

        {/* Module C */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module C — Practical small apps (applied UI)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong>Todo app:</strong> input, list, CRUD, local persistence pattern</li>
          <li><strong>Sneaker Shop / Product UI:</strong> responsive product listing & details</li>
          <li><strong>Themes:</strong> Light & Dark theming and runtime switching</li>
        </ul>

        {/* Module D */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module D — State management
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong>setState:</strong> Local/simple state handling</li>
          <li><strong>Provider:</strong> App-wide state & dependency injection (used in Amazon clone)</li>
          <li><strong>Riverpod:</strong> Used in larger projects (e.g., Reddit clone uses Riverpod 2)</li>
          <li>Practical patterns: cart syncing, auth state, theme state</li>
        </ul>

        {/* Module E */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module E — Persistence (offline storage)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Notes/offline app examples</li>
          <li>Typical packages: sqflite, hive, shared preferences; provider-backed local storage patterns</li>
        </ul>

        {/* Module F */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module F — Networking & APIs
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong>HTTP & REST:</strong> http package or Dio, JSON parsing, DTO ↔ model mapping</li>
          <li><strong>Practical apps:</strong> Weather API example</li>
          <li><strong>Error handling:</strong> Loading states, retries, graceful error UIs</li>
        </ul>

        {/* Module G */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module G — Authentication & Firebase (online backend)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Auth patterns: Email/password, Google Sign-in, session persistence</li>
          <li>Firebase: Firestore, Firebase Auth, Storage (files/images), realtime examples (chat)</li>
        </ul>

        {/* Module H */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module H — Real-time & media apps
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong>Chat app:</strong> Real-time messaging using Firestore or sockets</li>
          <li><strong>Zoom/Video clone:</strong> Integrations like Jitsi + Firebase (repo available)</li>
        </ul>

        {/* Module I */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module I — Full-stack project examples (available repos)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong>Reddit clone:</strong> Firebase-backed multi-feature app (auth, posts, communities)</li>
          <li><strong>Amazon clone:</strong> Flutter client + Node/Express + MongoDB server (cart, checkout, admin)</li>
          <li><strong>Zoom clone:</strong> Jitsi + Firebase real-time meetings</li>
          <li>Each repo includes README with setup, API keys, and server instructions</li>
        </ul>

        {/* Module J */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module J — App polish, testing & publishing
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Theming & UX polish: animations, transitions, shared elements</li>
          <li>Testing basics: widget tests & integration test patterns</li>
          <li>Packaging & publishing: release bundles, Play/App Store basics</li>
        </ul>

        {/* Projects you'll be able to build */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Projects — what you WILL be able to build
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Todo app (local persistence)</li>
          <li>Sneaker shop / product listing UI</li>
          <li>Ecommerce app with cart + checkout (full-stack Amazon clone)</li>
          <li>Notes app (offline DB)</li>
          <li>Habit tracker</li>
          <li>Auth flows & Firebase-backed apps</li>
          <li>Real-time chat app (Firebase)</li>
          <li>Social-media style app (posts, likes, comments)</li>
          <li>Reddit clone (responsive, multi-platform)</li>
          <li>Zoom clone (video meetings)</li>
        </ul>

        {/* Technologies & packages */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Technologies & packages shown
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>State management: Provider, Riverpod</li>
          <li>Backend / cloud: Firebase Auth, Firestore, Firebase Storage</li>
          <li>Full-stack server (Amazon clone): Node.js, Express, MongoDB, Cloudinary</li>
          <li>Persistence: sqflite, hive</li>
          <li>Networking: http, Dio</li>
        </ul>

        {/* How to use the course as a one-shot full course */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          How to use the course as a one-shot full course
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch the main video front-to-end once to understand the full flow (use playback speed).</li>
          <li>Clone the GitHub repo for the app you want to reproduce and follow its README for env/Firebase/server setup.</li>
          <li>Rebuild step-by-step on your machine; stop after each feature and experiment (theme switch, state changes, persistence).</li>
          <li>Extend & customize: add features like push notifications, offline sync, or new UI interactions.</li>
          <li>Ship: build a release APK / IPA (and optionally a web build) and test on devices.</li>
        </ol>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>End-to-end exposure: language, UI, state mgmt, persistence, networking, auth, realtime</li>
          <li>Hands-on projects with available source code to clone and learn from</li>
          <li>Learn modern Flutter patterns used in production apps</li>
          <li>Strong foundation for building full-stack mobile apps</li>
        </ul>

        {/* Meta */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Rivaan Ranawat</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Code:</strong> GitHub repositories with example projects</p>
          <p className="mb-1"><strong>Format:</strong> Single long-form tutorial + multiple repos</p>
          <p><strong>Recommended use:</strong> Treat the video as a syllabus — clone repos and implement features step-by-step.</p>
        </div>

      </article>
    </div>
  );
};

export default DartFlutterCompleteCourse;
