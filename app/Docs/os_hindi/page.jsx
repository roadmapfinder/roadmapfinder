"use client";
import React from "react";

const OperatingSystemsPlacementsCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4">
          Operating Systems for Placements 2022 — CodeHelp (Code with Babbar)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A <strong>YouTube playlist</strong> by{" "}
          <strong>CodeHelp (Love Babbar)</strong> titled{" "}
          <em>Operating Systems for Placements 2022</em>. This structured
          placement-focused OS course contains{" "}
          <strong>~32 lessons totaling about 9 hours</strong>, covering every
          essential topic from fundamentals to advanced OS concepts needed for
          interview preparation and campus exams.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <p className="mb-1">
            <strong>Instructor:</strong> Love Babbar (CodeHelp)
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube Playlist
          </p>
          <p className="mb-1">
            <strong>Duration:</strong> ~9 hours across ~32 lessons
          </p>
          <p className="mb-1">
            <strong>Focus:</strong> Placement-oriented OS mastery
          </p>
        </div>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Modules
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
          <li>
            <strong>OS Fundamentals & Categories:</strong> Types of operating
            systems, key responsibilities like scheduling, memory, and file
            management.
          </li>
          <li>
            <strong>Process & Thread Management:</strong> Process lifecycle,
            PCB, system calls, context switching, and process scheduling
            (FCFS, Round-Robin, SJF, Priority).
          </li>
          <li>
            <strong>CPU Scheduling Techniques:</strong> Dispatcher roles and
            algorithm comparisons.
          </li>
          <li>
            <strong>Inter-Process Communication & Concurrency:</strong> Shared
            memory, message passing, semaphores, pipes, synchronization.
          </li>
          <li>
            <strong>Memory Management & Virtualization:</strong> Paging,
            segmentation, demand paging, replacement algorithms, thrashing.
          </li>
          <li>
            <strong>File Systems, Storage, and RAID:</strong> File organization,
            directory structures, RAID levels, disk management.
          </li>
          <li>
            <strong>Deadlock Conditions & Solutions:</strong> Prevention,
            avoidance (Banker’s Algorithm), recovery strategies.
          </li>
          <li>
            <strong>Placement-Focused Reviews & Q&amp;A:</strong> Cheat sheets,
            quick summaries, and mock interview questions.
          </li>
        </ol>

        {/* Learning Flow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Flow
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Follow the playlist sequentially to build knowledge progressively.</li>
          <li>
            Reinforce topics with practice problems, diagrams, and simple C/Java
            programs.
          </li>
          <li>
            Use Love Babbar’s OS cheat sheets and notes for quick revision before
            interviews.
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Strong grasp of all OS fundamentals and advanced concepts.</li>
          <li>
            Ability to confidently answer placement interview questions on
            scheduling, IPC, memory, and file systems.
          </li>
          <li>
            Equipped with practical and theoretical knowledge to excel in exams
            and technical interviews.
          </li>
        </ul>

        {/* Why Valuable */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why This Course Is Valuable
        </h2>
        <p className="text-gray-700 leading-relaxed">
          This playlist is <strong>tailored for placements</strong>, covering
          exactly the OS concepts asked in interviews. With{" "}
          <strong>~9 hours of focused content</strong>, it’s both{" "}
          <em>comprehensive and efficient</em>. Love Babbar ensures{" "}
          <strong>structured learning</strong> that progresses logically from
          basics to advanced concepts, making it a{" "}
          <em>standalone placement preparation resource</em>.
        </p>
      </article>
    </div>
  );
};

export default OperatingSystemsPlacementsCourse;
