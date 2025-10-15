// components/OSProjects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-mini-shell",
    level: "Phase 1 — Beginner",
    title: "Mini Shell (Command Interpreter)",
    description:
      "Build a lightweight shell like bash to execute system commands, handle redirection, pipes, and background processes using fork and exec.",
    url: "https://youtu.be/uSXWTkGDDnM?si=zWO4TaHVGMQeq_jo", // reference or tutorial
  },
  {
    id: "phase1-scheduler-sim",
    level: "Phase 1 — Beginner",
    title: "CPU Scheduler Simulator",
    description:
      "Simulate CPU scheduling algorithms such as FCFS, Round Robin, and SJF. Visualize process states and context switching in a console app.",
    url: "https://youtu.be/zFnrUVqtiOY?si=FBwxDxKFXDNhg0l2",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-malloc-clone",
    level: "Phase 2 — Intermediate",
    title: "Memory Allocator (malloc/free Clone)",
    description:
      "Implement a custom malloc, calloc, and free using system calls like brk and mmap. Manage heap blocks and reduce fragmentation.",
    url: "https://danluu.com/malloc-tutorial/",
  },
  {
    id: "phase2-file-system",
    level: "Phase 2 — Intermediate",
    title: "Simple File System (User Space)",
    description:
      "Design a basic file system with inodes and directories. Support file create, delete, read, and write using simulated disk blocks.",
    url: "https://youtu.be/0LtuQhNFFe0?si=X4UUkrxq05vIuQxc",
  },
  {
    id: "phase2-process-monitor",
    level: "Phase 2 — Intermediate",
    title: "Process Monitor (top/htop Clone)",
    description:
      "Build a live process monitor using data from /proc filesystem. Display CPU, memory, and thread statistics in real time.",
    url: "https://youtu.be/SvQPuOY5qxk?si=TzIVIyhD-CWHUWxJ",
  },

  // Phase 3 — Advanced
  {
    id: "phase3-http-server",
    level: "Phase 3 — Advanced",
    title: "Multi-Threaded HTTP Server",
    description:
      "Implement a simple HTTP server using sockets and multithreading. Handle GET/POST requests, serve static files, and manage concurrency.",
    url: "https://youtu.be/eTvSgOoc_BE?si=zuBMNLRjJSovUHT3",
  },
  {
    id: "phase3-kernel-module",
    level: "Phase 3 — Advanced",
    title: "Linux Kernel Module (LKM)",
    description:
      "Develop and load a kernel module that logs messages, exposes data through /proc or sysfs, and handles interrupts safely.",
    url: "https://youtu.be/7w_rFyl6zk0?si=5M3LyQ96I4c_bw_n",
  },
  {
    id: "phase3-toy-os",
    level: "Phase 3 — Advanced",
    title: "Toy Operating System (Bootloader + Kernel)",
    description:
      "Write a simple x86 OS that boots via GRUB, enters protected mode, and prints to screen. Implement keyboard input and basic task switching.",
    url: "https://youtu.be/FkrpUaGThTQ?si=fIx6ABcBe0KSd7Ya",
  },

  // Phase 4 — Expert
  {
    id: "phase4-hypervisor",
    level: "Phase 4 — Expert",
    title: "Mini Hypervisor or Emulator",
    description:
      "Build a minimal hypervisor using KVM or QEMU. Manage guest OS state and emulate virtualized CPU and memory operations.",
    url: "https://youtu.be/pUV45923yqQ?si=XaoruVY7i8L2ZflR",
  },
];

export default function OSProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚙️ OS Engineering Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Progress from beginner to expert by building real-world Operating System projects.
            Each project deepens your understanding of processes, memory, file systems, and kernel internals.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow this roadmap to master OS internals — from user-space utilities
          to kernel modules and virtualization. Each build takes you closer to
          becoming an industry-ready systems engineer.
        </footer>
      </div>
    </section>
  );
}
