// components/OSDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Linux Kernel Official Documentation",
    description:
      "The official and up-to-date Linux kernel documentation covering architecture, subsystems, drivers, and APIs.",
    url: "https://docs.kernel.org/",
    citation: "Linux Kernel Docs",
  },
  {
    title: "Kernel.org (Source & Releases)",
    description:
      "Central hub for Linux kernel source code, stable releases, changelogs, and additional documentation.",
    url: "https://www.kernel.org/",
    citation: "Linux Kernel Docs",
  },
  {
    title: "Linux Source Repository (GitHub)",
    description:
      "The official Linux source tree maintained by Linus Torvalds, including the Documentation/ directory.",
    url: "https://github.com/torvalds/linux",
    citation: "GitHub Linux Source",
  },
  {
    title: "The Linux Documentation Project (LDP)",
    description:
      "A long-standing collection of Linux and Unix HOWTOs, guides, and technical references for system learners.",
    url: "https://www.tldp.org/",
    citation: "The Linux Documentation Project",
  },
  {
    title: "Linux API Reference (man7.org)",
    description:
      "Comprehensive reference of Linux system calls, C library functions, file formats, and inter-process mechanisms.",
    url: "https://man7.org/linux/man-pages/",
    citation: "man7.org",
  },
  {
    title: "Linux Kernel Labs",
    description:
      "Hands-on tutorials, labs, and teaching material for learning kernel internals and driver development.",
    url: "https://linux-kernel-labs.github.io/",
    citation: "Linux Kernel Labs",
  },
  {
    title: "xv6 Teaching OS (MIT PDOS)",
    description:
      "A simple Unix-like teaching operating system used at MIT to understand process management, syscalls, and file systems.",
    url: "https://pdos.csail.mit.edu/6.S081/2023/xv6/book-riscv-rev3.pdf",
    citation: "MIT PDOS xv6",
  },
  {
    title: "xv6 RISC-V Source Repository",
    description:
      "The official MIT PDOS GitHub repository containing xv6 source code and book content for RISC-V architecture.",
    url: "https://github.com/mit-pdos/xv6-riscv-book",
    citation: "MIT PDOS GitHub",
  },
  {
    title: "Zephyr RTOS Official Docs",
    description:
      "Modern real-time operating system documentation including getting started guides, APIs, and hardware board support.",
    url: "https://docs.zephyrproject.org/latest/develop/getting_started/index.html",
    citation: "Zephyr Project Docs",
  },
  {
    title: "Zephyr QEMU Board Documentation",
    description:
      "Official Zephyr documentation for running and emulating Zephyr OS on QEMU-supported virtual boards.",
    url: "https://docs.zephyrproject.org/latest/boards/qemu/index.html",
    citation: "Zephyr Project Docs",
  },
  {
    title: "FreeRTOS Official Documentation",
    description:
      "Comprehensive documentation and reference manual for FreeRTOS kernel, APIs, and architecture.",
    url: "https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book",
    citation: "FreeRTOS Docs",
  },
  {
    title: "FreeRTOS Reference Manual (PDF)",
    description:
      "The official FreeRTOS reference manual detailing kernel configuration, APIs, and task management.",
    url: "https://www.freertos.org/media/2018/FreeRTOS_Reference_Manual_V10.0.0.pdf",
    citation: "FreeRTOS Docs",
  },
  {
    title: "Fuchsia OS Documentation",
    description:
      "The official Fuchsia developer documentation, including system architecture, kernel (Zircon), and build setup.",
    url: "https://fuchsia.dev/fuchsia-src",
    citation: "Fuchsia Docs",
  },
  {
    title: "Fuchsia OS Reference",
    description:
      "Detailed API, SDK, and system reference for Fuchsia OS, including tools, tracing, and testing infrastructure.",
    url: "https://fuchsia.dev/reference",
    citation: "Fuchsia Docs",
  },
  {
    title: "POSIX / IEEE Standards (The Open Group)",
    description:
      "The official POSIX and UNIX specification documentation, defining system interfaces and API standards.",
    url: "https://pubs.opengroup.org/onlinepubs/9699919799/",
    citation: "The Open Group POSIX",
  },
  {
    title: "System V ABI / ELF Specification",
    description:
      "The official System V Application Binary Interface documentation, defining ELF format and ABI standards.",
    url: "https://refspecs.linuxfoundation.org/elf/",
    citation: "Linux Foundation Refspecs",
  },
];

export default function OSDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🧠 Official OS & Kernel Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Authoritative documentation sources for learning Operating System
          engineering — covering Linux kernel, educational OSes like xv6, RTOS
          projects like Zephyr and FreeRTOS, and open standards like POSIX and
          ELF.
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
