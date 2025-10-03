"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do I need a computer science degree to start in cybersecurity?",
    answer:
      "No, a degree is not mandatory. Many professionals come from IT, networking, or self-taught backgrounds. What matters is practical skills, certifications, and projects.",
  },
  {
    question: "What are the prerequisites for learning cybersecurity?",
    answer:
      "A good foundation in computer networks, Linux, operating systems, and basic programming (Python, Bash, or PowerShell) is highly recommended before diving deep.",
  },
  {
    question: "Which programming languages are most useful in cybersecurity?",
    answer:
      "Python is widely used for automation and scripting. C/C++ helps in reverse engineering and exploit development. JavaScript and SQL knowledge help in web security.",
  },
  {
    question: "What certifications should I pursue first?",
    answer:
      "Start with entry-level certifications like CompTIA Security+, CEH (Certified Ethical Hacker), or try free training like TryHackMe and HackTheBox before investing in advanced certs.",
  },
  {
    question: "How can I practice cybersecurity skills at home?",
    answer:
      "Set up a virtual lab using VirtualBox/VMware with Kali Linux, vulnerable machines (Metasploitable, DVWA), and practice on platforms like HackTheBox, TryHackMe, or OverTheWire.",
  },
  {
    question: "What areas of cybersecurity should I focus on as a beginner?",
    answer:
      "Focus on basics of networking, Linux commands, firewalls, cryptography, penetration testing, malware analysis, and cloud security fundamentals.",
  },
  {
    question: "Do I need to be good at coding to work in cybersecurity?",
    answer:
      "Not always, but scripting knowledge helps a lot in automating tasks, writing exploits, analyzing malware, and customizing tools.",
  },
  {
    question: "What are common tools used in cybersecurity?",
    answer:
      "Popular tools include Wireshark, Nmap, Burp Suite, Metasploit, Nessus, John the Ripper, and Snort. Familiarity with these tools is expected in real-world jobs.",
  },
  {
    question: "How do I stay updated in cybersecurity?",
    answer:
      "Follow security blogs, Twitter/X accounts, and platforms like HackerOne, Bugcrowd, OWASP, and CVE databases. Cybersecurity is a fast-moving field, so continuous learning is key.",
  },
  {
    question: "What kind of projects can I build to showcase my cybersecurity skills?",
    answer:
      "Build a home lab, write scripts for log monitoring, create a simple IDS/IPS system, perform penetration testing on vulnerable apps, or contribute to open-source security tools.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        🔐 Cybersecurity FAQ
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{faq.question}</h3>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
