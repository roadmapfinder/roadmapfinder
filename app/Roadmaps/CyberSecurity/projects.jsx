// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  // Phase 1 — Beginner
  {
    title: "Personal Home Network Security Audit",
    description:
      "Learn how to use Wireshark to capture and analyze network traffic, identifying potential security issues in your home network.",
    url: "https://www.youtube.com/watch?v=qTaOZrDnMzQ",
    citation: "Wireshark Tutorial",
  },
  {
    title: "Password Strength Checker Tool (Python)",
    description:
      "Step-by-step guide to building a password strength checker using Python.",
    url: "https://www.youtube.com/watch?v=ueIb_EtFHhA",
    citation: "Python Password Strength Checker",
  },
  {
    title: "Basic Malware Analysis",
    description:
      "Understand the basics of malware analysis and how to safely analyze suspicious files.",
    url: "https://www.youtube.com/watch?v=qA0YcYMRWyI",
    citation: "Malware Analysis Full Course",
  },

  // Phase 2 — Intermediate
  {
    title: "Vulnerable Web App Pentest (DVWA)",
    description:
      "Comprehensive guide to setting up and exploiting vulnerabilities in DVWA.",
    url: "https://www.youtube.com/watch?v=yYhTYBRe5Bg",
    citation: "DVWA Tutorial",
  },
  {
    title: "Network Sniffing & Packet Analysis",
    description:
      "Learn how to use Nmap for network discovery and security auditing.",
    url: "https://www.youtube.com/watch?v=4t4kBkMsDbQ",
    citation: "Nmap Tutorial",
  },
  {
    title: "Basic Firewall / IDS Setup",
    description:
      "Beginner's guide to configuring pfSense as a firewall and IDS.",
    url: "https://www.youtube.com/watch?v=he3ENpMLMsc",
    citation: "pfSense Tutorial",
  },
  {
    title: "Phishing Simulation",
    description:
      "Learn how to set up and execute phishing simulations using GoPhish.",
    url: "https://www.youtube.com/watch?v=dktthMkQF-Q",
    citation: "GoPhish Tutorial",
  },

  // Phase 3 — Advanced / Hands-On
  {
    title: "Metasploit Lab Exploitation",
    description:
      "Deep dive into using Metasploit for penetration testing.",
    url: "https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBmwvjJoWhM4Lg5MceSbsja",
    citation: "Metasploit Tutorial Playlist",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🛡️ Cybersecurity Project Roadmap & Tutorials
        </h1>
        <p className="text-gray-600 mb-10">
          Step-by-step projects from beginner to advanced level, with YouTube tutorials for each project.
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
