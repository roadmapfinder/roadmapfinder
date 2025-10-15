// components/OSFaq.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is an Operating System and why is it important?",
    answer:
      "An Operating System (OS) is system software that manages computer hardware and software resources, and provides common services for programs. It enables users and applications to interact with hardware efficiently, securely, and abstractly.",
  },
  {
    question: "What are the main components of an Operating System?",
    answer:
      "Core components include the Kernel (manages CPU, memory, and devices), Process Management, Memory Management, File System, I/O System, and User Interface (CLI or GUI).",
  },
  {
    question: "What is the difference between a process and a thread?",
    answer:
      "A process is an independent program with its own memory space. A thread is a lightweight subunit of a process that shares the same memory. Threads allow concurrent execution within a single process.",
  },
  {
    question: "How does the OS handle multitasking?",
    answer:
      "The OS uses CPU scheduling algorithms like Round Robin, Priority, and Multilevel Queue to allocate CPU time between multiple processes or threads, creating an illusion of parallelism.",
  },
  {
    question: "What is virtual memory and how does it work?",
    answer:
      "Virtual memory allows programs to use more memory than physically available by temporarily storing inactive data on disk (swap space). The OS handles mapping between virtual and physical addresses using page tables.",
  },
  {
    question: "What are system calls and why are they used?",
    answer:
      "System calls are APIs through which user-space applications request services from the kernel, such as file operations, process control, and communication. Examples include fork(), exec(), read(), and write().",
  },
  {
    question: "What is the difference between kernel mode and user mode?",
    answer:
      "Kernel mode has unrestricted access to system hardware and resources, while user mode is restricted for safety. The OS switches between these modes during system calls and interrupts.",
  },
  {
    question: "What is the purpose of device drivers?",
    answer:
      "Device drivers act as translators between the OS and hardware devices. They provide standardized interfaces so that software can communicate with hardware without knowing hardware-specific details.",
  },
  {
    question: "How can I practice OS concepts hands-on?",
    answer:
      "You can implement mini-projects like a shell, scheduler simulator, memory allocator, or file system. Using Linux, QEMU, and C is highly recommended for practical learning.",
  },
  {
    question: "Which programming languages are best for OS development?",
    answer:
      "C and C++ are the most common for kernel and low-level programming due to direct hardware control. Assembly is used for bootloaders, and Rust is gaining popularity for memory-safe systems programming.",
  },
  {
    question: "What is the difference between monolithic and microkernel architectures?",
    answer:
      "A monolithic kernel includes all OS services (file system, memory, drivers) in a single address space, whereas a microkernel runs minimal core services in kernel space and others as user-space processes, improving modularity and security.",
  },
  {
    question: "What are interrupts and how do they work?",
    answer:
      "Interrupts are signals that inform the CPU an event occurred (e.g., I/O completion). The CPU stops its current task, executes an interrupt handler, then resumes execution, ensuring responsiveness.",
  },
  {
    question: "What tools should I learn to debug and analyze OS behavior?",
    answer:
      "Tools include GDB for debugging, strace/ltrace for system call tracing, top/htop for process monitoring, and perf or ftrace for performance analysis and profiling.",
  },
  {
    question: "How do modern OSs handle security?",
    answer:
      "Security mechanisms include user authentication, permissions, sandboxing, encryption, kernel isolation, and mandatory access control systems like SELinux and AppArmor.",
  },
  {
    question: "How can I contribute to open-source OS projects?",
    answer:
      "You can start by exploring beginner issues in Linux, FreeBSD, or MINIX repositories, reading their contribution guidelines, and engaging with the developer mailing lists or forums.",
  },
];

export default function OSFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          💡 OS Engineering FAQ
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Genuine and frequently asked questions every Operating System learner
          should understand — from basic concepts to advanced kernel-level
          insights.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left p-5"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
