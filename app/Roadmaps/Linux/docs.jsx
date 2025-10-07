// components/LinuxDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Linux Kernel Documentation",
    description:
      "The official kernel docs: architecture, subsystems, APIs, internal details and development guides.",
    url: "https://docs.kernel.org/",
    citation: "docs.kernel.org",
  },
  {
    title: "Linux man-pages Project",
    description:
      "Comprehensive reference for system calls, library functions, commands, interfaces.",
    url: "https://www.kernel.org/doc/man-pages/",
    citation: "man-pages Project",
  },
  {
    title: "The Linux Documentation Project (LDP)",
    description:
      "Classic collection of HOWTOs, guides, FAQs on various Linux topics. (Still valuable reference).",
    url: "https://tldp.org/",
    citation: "The Linux Documentation Project",
  },
  {
    title: "Linux Documentation (die.net)",
    description:
      "Aggregated man pages, HOWTOs, admin guides, scripting, kernel modules and more.",
    url: "https://linux.die.net/",
    citation: "linux.die.net",
  },
  {
    title: "Ubuntu Official Documentation",
    description:
      "Guides, tutorials, and reference for Ubuntu (server, desktop, cloud).",
    url: "https://help.ubuntu.com/",
    citation: "Ubuntu Docs",
  },
  {
    title: "Red Hat Enterprise Linux Documentation",
    description:
      "Official RHEL documentation: system administration, security, kernel, tools.",
    url: "https://docs.redhat.com/en/documentation/Red_Hat_Enterprise_Linux",
    citation: "Red Hat Docs",
  },
  {
    title: "Debian Documentation",
    description:
      "Installation manuals, reference guides, FAQs for Debian / Debian-based systems.",
    url: "https://www.debian.org/doc/",
    citation: "Debian Docs",
  },
  {
    title: "Rocky Linux Documentation",
    description:
      "Documentation hub for Rocky Linux: guides, labs, books, release notes.",
    url: "https://docs.rockylinux.org/",
    citation: "Rocky Linux Docs",
  },
];

export default function LinuxDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🐧 Essential Linux Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          A curated list of official and canonical Linux documentation resources for learners — from kernel internals, command references, distro guides, to admin HOWTOs.
        </p>

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
