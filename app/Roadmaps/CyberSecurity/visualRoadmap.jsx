import React from 'react';

export default function CybersecurityRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Computer & OS Basics", 
          category: "Core Systems",
          details: "Windows, Linux (Ubuntu, Kali), macOS, command-line skills (Bash, PowerShell), file systems, processes, permissions, virtualization"
        },
        { 
          step: "Step - 2", 
          topic: "Networking Essentials", 
          category: "Network Fundamentals",
          details: "OSI Model, TCP/IP, IP addressing, subnetting, VLANs, HTTP/HTTPS, DNS, FTP, SMTP, SSH protocols"
        },
        { 
          step: "Step - 3", 
          topic: "Cybersecurity Basics", 
          category: "Security Principles",
          details: "CIA Triad, attack types (Phishing, MITM, SQLi, XSS, DoS/DDoS, ransomware), threat actors and motivations"
        },
        { 
          step: "Step - 4", 
          topic: "Cryptography Foundations", 
          category: "Encryption & Hashing",
          details: "Symmetric & Asymmetric encryption (AES, RSA), hashing (SHA-256, MD5, bcrypt), digital signatures & certificates"
        },
        { 
          step: "Step - 5", 
          topic: "Authentication & Authorization", 
          category: "Access Control",
          details: "OAuth, Multi-Factor Authentication (MFA), Single Sign-On (SSO), identity management principles"
        },
        { 
          step: "Step - 6", 
          topic: "Security Policies & Frameworks", 
          category: "Compliance",
          details: "NIST Cybersecurity Framework, ISO 27001, CIS Controls, security governance and risk management"
        },
      ],
    },
    {
      title: "Defense",
      subtitle: "Blue Team Skills",
      steps: [
        { 
          step: "Step - 7", 
          topic: "System Hardening", 
          category: "System Security",
          details: "OS security configurations, patch management, secure boot, BIOS/UEFI settings, baseline security"
        },
        { 
          step: "Step - 8", 
          topic: "Network Defense", 
          category: "Network Security",
          details: "Firewalls (pfSense, Cisco ASA), IDS/IPS (Snort, Suricata), VPN setup, network segmentation"
        },
        { 
          step: "Step - 9", 
          topic: "Endpoint Security", 
          category: "Endpoint Protection",
          details: "EDR tools (CrowdStrike, SentinelOne), anti-virus solutions, malware analysis basics"
        },
        { 
          step: "Step - 10", 
          topic: "SIEM & Log Analysis", 
          category: "Security Monitoring",
          details: "SIEM tools (Splunk, ELK, QRadar), log analysis, correlation rules, security event monitoring"
        },
        { 
          step: "Step - 11", 
          topic: "Incident Response", 
          category: "IR Process",
          details: "IR methodology, forensic procedures, containment strategies, recovery planning, lessons learned"
        },
        { 
          step: "Step - 12", 
          topic: "Threat Hunting", 
          category: "Proactive Defense",
          details: "Threat intelligence, IOCs, behavioral analysis, hypothesis-driven hunting, threat landscape awareness"
        },
      ],
    },
    {
      title: "Offense",
      subtitle: "Red Team Skills",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Penetration Testing Methodology", 
          category: "Pentest Framework",
          details: "Reconnaissance, scanning, exploitation, post-exploitation, reporting, PTES and OWASP methodologies"
        },
        { 
          step: "Step - 14", 
          topic: "Web Application Security", 
          category: "Web App Testing",
          details: "OWASP Top 10, Burp Suite, web vulnerabilities (SQLi, XSS, CSRF), manual and automated testing"
        },
        { 
          step: "Step - 15", 
          topic: "Network Penetration Testing", 
          category: "Network Pentest",
          details: "Nmap, Metasploit, vulnerability scanning, lateral movement, privilege escalation techniques"
        },
        { 
          step: "Step - 16", 
          topic: "Wireless Security Testing", 
          category: "Wireless Attacks",
          details: "WiFi security protocols, Aircrack-ng, Kismet, wireless attack vectors, rogue AP detection"
        },
        { 
          step: "Step - 17", 
          topic: "Social Engineering", 
          category: "Human Factor",
          details: "Phishing campaigns, vishing, physical security testing, OSINT gathering, psychological manipulation"
        },
        { 
          step: "Step - 18", 
          topic: "Malware Analysis", 
          category: "Reverse Engineering",
          details: "Static and dynamic analysis, Ghidra, IDA Free, sandboxing, malware families and behavior"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Specialized Skills",
      steps: [
        { 
          step: "Step - 19", 
          topic: "Cloud Security", 
          category: "Cloud Platforms",
          details: "AWS, Azure, GCP security, IAM best practices, cloud-native security tools, container security"
        },
        { 
          step: "Step - 20", 
          topic: "Application Security", 
          category: "Secure Development",
          details: "Secure SDLC, code reviews, SAST/DAST tools, DevSecOps practices, security in CI/CD"
        },
        { 
          step: "Step - 21", 
          topic: "Digital Forensics", 
          category: "Forensic Investigation",
          details: "Autopsy, FTK, EnCase, evidence acquisition, chain of custody, forensic analysis techniques"
        },
        { 
          step: "Step - 22", 
          topic: "Industrial & IoT Security", 
          category: "OT Security",
          details: "SCADA systems, industrial protocols, IoT device security, air-gapped networks, safety systems"
        },
        { 
          step: "Step - 23", 
          topic: "Blockchain Security", 
          category: "DeFi & Web3",
          details: "Smart contract audits, cryptocurrency security, DeFi protocols, blockchain vulnerabilities"
        },
      ],
    },
  ];

  const certificationSuggestions = [
    { level: "Entry Level", certs: "CompTIA Security+, CC (ISC)²" },
    { level: "Intermediate", certs: "CEH, CySA+, eJPT" },
    { level: "Advanced", certs: "OSCP, CISSP, GSEC, GCIH" },
    { level: "Cloud Specialty", certs: "AWS Security, Azure Security Engineer" },
  ];

  const practiceResources = [
    { category: "Hands-On Labs", resources: "TryHackMe, HackTheBox, RangeForce" },
    { category: "Bug Bounties", resources: "HackerOne, Bugcrowd, Intigriti" },
    { category: "CTF Platforms", resources: "PicoCTF, OverTheWire, VulnHub" },
    { category: "Conferences", resources: "DEF CON, Black Hat, BSides" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-purple-500 to-purple-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-red-50 via-white to-blue-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
         

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🛡️ 23 Essential Steps • ⚔️ 4 Skill Areas • 🎯 Career Ready</span>
            </div>
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-12 sm:space-y-16">
          {roadmap.map((section, sectionIdx) => (
            <section key={sectionIdx} className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex items-start space-x-8 max-w-6xl mx-auto">
                  {/* Section Title */}
                  <div className="flex-shrink-0">
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
                      <div className="font-bold">{section.title}</div>
                      <div className="text-sm font-normal opacity-90 mt-1">{section.subtitle}</div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col space-y-6 flex-grow">
                    {section.steps.map((item, stepIdx) => (
                      <div key={stepIdx} className="group">
                        <div className="flex items-center space-x-6">
                          {/* Step Number */}
                          <div className="w-20 text-right text-sm font-medium text-gray-500">
                            {item.step}
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 100 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id={`gradient-${sectionIdx}-${stepIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#DC2626" />
                                <stop offset="100%" stopColor="#2563EB" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="12" x2="70" y2="12" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                            <polyline points="60,6 70,12 60,18" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                          </svg>

                          {/* Topic Box */}
                          <div className="bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <div className="text-base font-semibold text-gray-800 mb-1">
                              {item.topic}
                            </div>
                            <div className="text-xs text-gray-500 mb-2">
                              {item.category}
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                              {item.details}
                            </div>
                          </div>

                          {/* Connecting line */}
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"></div>

                          {/* Progress Indicator */}
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-red-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden">
                {/* Section Header */}
                <div className="flex items-center mb-6">
                  <div className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`}>
                    <div className="font-bold">{section.title}</div>
                    <div className="text-xs sm:text-sm font-normal opacity-90">{section.subtitle}</div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                </div>

                {/* Steps Grid */}
                <div className="space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8">
                  {section.steps.map((item, stepIdx) => (
                    <div key={stepIdx} className="relative group">
                      {/* Connection Point */}
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-red-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-red-50 px-2 py-1 rounded">
                            {item.category}
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                          {item.topic}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Certifications Section */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🏆 Industry Certifications by Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-red-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.certs}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Resources Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            💻 Hands-On Practice Platforms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {practiceResources.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.category}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.resources}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Essential Cybersecurity Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Network Analysis</div>
              <div className="text-red-100">Wireshark, Nmap, tcpdump, Nessus</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Penetration Testing</div>
              <div className="text-red-100">Metasploit, Burp Suite, Hydra, John</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">SIEM & Monitoring</div>
              <div className="text-red-100">Splunk, ELK Stack, Snort, Suricata</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Malware Analysis</div>
              <div className="text-red-100">Ghidra, IDA Free, Volatility, Yara</div>
            </div>
          </div>
        </section>

        {/* Career Path Section */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Career Path Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🛡️ Blue Team (Defense)</div>
              <div className="text-sm text-gray-600">SOC Analyst, Incident Response, Threat Hunter, Security Engineer</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-red-600 mb-2">⚔️ Red Team (Offense)</div>
              <div className="text-sm text-gray-600">Penetration Tester, Security Researcher, Bug Bounty Hunter</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">🎖️ Leadership & Strategy</div>
              <div className="text-sm text-gray-600">CISO, Security Architect, GRC Analyst, Security Consultant</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🔐 Remember: Cybersecurity is a continuous learning journey. Stay curious, practice ethically, and always keep security in mind!
          </p>
        </div>
      </div>
    </main>
  );
}