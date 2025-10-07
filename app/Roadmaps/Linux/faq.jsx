// components/LinuxFAQ.jsx
import React from "react";

const faqs = [
  {
    question: "What is Linux and why is it used in the industry?",
    answer:
      "Linux is an open-source operating system kernel used in servers, cloud platforms, DevOps, cybersecurity, and embedded systems. It’s popular because of its stability, security, flexibility, and open-source nature.",
  },
  {
    question: "Which Linux distribution should I start with as a beginner?",
    answer:
      "Start with Ubuntu or Linux Mint for a user-friendly experience. Once comfortable, you can explore CentOS, Fedora, or Arch Linux to understand system internals and package management differences.",
  },
  {
    question: "What are the most important Linux commands to learn first?",
    answer:
      "Start with essential commands like ls, cd, pwd, mkdir, rm, cp, mv, cat, grep, chmod, chown, ps, top, kill, tar, and systemctl. Mastering these builds a strong foundation for automation and system administration.",
  },
  {
    question: "How do I become comfortable using the Linux terminal?",
    answer:
      "Use the terminal daily for file management, software installation, and navigation. Practice small tasks like editing files with nano/vim and writing shell scripts to automate repetitive tasks.",
  },
  {
    question: "What should I learn after basic Linux commands?",
    answer:
      "After mastering basic commands, learn system administration (users, permissions, processes), networking, bash scripting, cron jobs, and package management (apt, yum, dnf, pacman).",
  },
  {
    question: "Is shell scripting still important in 2025?",
    answer:
      "Yes. Shell scripting is critical for automation, DevOps, and system management. It’s widely used in CI/CD pipelines, cron automation, server maintenance, and configuration management.",
  },
  {
    question: "How can I practice Linux without installing it?",
    answer:
      "Use online sandboxes like Linux Survival, JSLinux, or install Linux on a virtual machine using VirtualBox or WSL (Windows Subsystem for Linux). You can also use free cloud instances like AWS Free Tier or Google Cloud Shell.",
  },
  {
    question: "What real-world projects can I build to master Linux?",
    answer:
      "Try projects like server setup automation with Bash/Ansible, network monitoring tools, log analyzers, backup scripts, Docker deployments, and creating custom Linux services with systemd.",
  },
  {
    question: "What Linux skills do companies look for in professionals?",
    answer:
      "Companies value strong command-line fluency, scripting skills (Bash/Python), system administration, networking, security hardening, package management, and experience with containers (Docker, Kubernetes).",
  },
  {
    question: "How do I prepare for Linux job interviews?",
    answer:
      "Practice real tasks — configuring users, managing permissions, debugging logs, writing automation scripts. Study common tools like SSH, systemctl, journalctl, netstat, and ps. Review Linux-related interview questions and hands-on challenges.",
  },
];

export default function LinuxFAQ() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Linux Mastery FAQ
          </h2>
          <p className="mt-2 text-gray-600">
            Genuine and frequently asked questions for learners aiming to master
            Linux — from basics to industry readiness.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-10 text-center text-sm text-gray-500">
          Explore these FAQs as you advance through your Linux learning roadmap.
          Each answer points toward the next skill to master.
        </footer>
      </div>
    </section>
  );
}
