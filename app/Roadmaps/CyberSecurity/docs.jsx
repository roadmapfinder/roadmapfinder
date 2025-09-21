// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "NIST Computer Security Resource Center (CSRC)",
    description:
      "Comprehensive cybersecurity frameworks, guidelines, and publications. Includes NIST CSF, SP 800 series, and CMMC guidance.",
    url: "https://csrc.nist.gov/",
    citation: "NIST CSRC",
  },
  {
    title: "CISA (Cybersecurity and Infrastructure Security Agency)",
    description:
      "Resources and tools to improve cybersecurity posture of critical infrastructure. Includes threat analysis, incident response, and free services.",
    url: "https://www.cisa.gov/",
    citation: "CISA",
  },
  {
    title: "CIS (Center for Internet Security)",
    description:
      "Globally recognized best practices and expert communities. Includes CIS Controls and CIS Benchmarks for securing IT systems and data.",
    url: "https://www.cisecurity.org/",
    citation: "CIS",
  },
  {
    title: "NSA Cybersecurity Advisories & Guidance",
    description:
      "Advisories, technical reports, and mitigation strategies on emerging cybersecurity threats from the National Security Agency.",
    url: "https://www.nsa.gov/press-room/cybersecurity-advisories-guidance/",
    citation: "NSA",
  },
  {
    title: "Microsoft Security Documentation",
    description:
      "Comprehensive docs on securing cloud services, identity management, and compliance. Includes Security, Compliance, Identity Fundamentals, and Azure Security Center.",
    url: "https://learn.microsoft.com/en-us/security/",
    citation: "Microsoft Docs",
  },
  {
    title: "CMMC Resources & Documentation (DoD CIO)",
    description:
      "Official documentation on the Cybersecurity Maturity Model Certification for defense contractors.",
    url: "https://www.acq.osd.mil/cmmc/",
    citation: "CMMC Docs",
  },
  {
    title: "FDIC Cybersecurity Resources",
    description:
      "Guidance and resources for financial institutions to enhance their cybersecurity measures.",
    url: "https://www.fdic.gov/regulations/examinations/cybersecurity/",
    citation: "FDIC",
  },
  {
    title: "SANS Security Resources",
    description:
      "Collection of research papers, tools, and training materials developed by cybersecurity professionals.",
    url: "https://www.sans.org/resources/",
    citation: "SANS",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🛡️ Cybersecurity Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation and resources for cybersecurity learners. Essential for building foundational knowledge and industry-ready skills.
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
