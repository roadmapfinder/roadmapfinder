"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Shield } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const CybersecurityRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "Beginner Level (0-3 months)",
      description: "Understanding core IT and security basics for cybersecurity foundation",
      color: "bg-gray-600",
      sections: [
        {
          title: "Basic Computer Networking",
          items: [
            "TCP/IP Protocol Suite → Understanding network layers and communication",
            "DNS (Domain Name System) → Name resolution and security implications", 
            "HTTP/HTTPS → Web protocols and encryption transport security",
            "DHCP → Dynamic host configuration and network assignment"
          ]
        },
        {
          title: "Operating Systems Fundamentals",
          items: [
            "Windows Administration → User management, services, registry basics",
            "Linux Basics → Command line, file systems, permissions, processes",
            "Computer Hardware → CPU, memory, storage, network components",
            "Virtualization → VirtualBox, VMware for lab environments"
          ]
        },
        {
          title: "Cybersecurity Core Concepts",
          items: [
            "CIA Triad → Confidentiality, Integrity, Availability principles",
            "Threat vs Vulnerability → Risk assessment and attack vectors",
            "Malware Types → Viruses, trojans, ransomware, rootkits, spyware",
            "Cyber Hygiene → Password security, updates, backups, antivirus"
          ]
        },
        {
          title: "Basic Scripting & Tools",
          items: [
            "Python Scripting → Automation, network tools, security scripts",
            "Bash Scripting → Linux automation and system administration",
            "Wireshark → Packet capture and network traffic analysis",
            "Home Lab Setup → Kali Linux, Ubuntu, virtualized environments"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Core Cybersecurity Knowledge",
      subtitle: "Intermediate Level (3-6 months)",
      description: "Learning core security skills and understanding attack/defense techniques",
      color: "bg-blue-500",
      sections: [
        {
          title: "Network Security",
          items: [
            "Firewalls → Packet filtering, stateful inspection, next-gen firewalls",
            "VPNs → Site-to-site, remote access, IPSec, SSL/TLS tunneling",
            "Proxies → Forward/reverse proxies, web application firewalls",
            "IDS/IPS → Intrusion detection and prevention systems, signatures"
          ]
        },
        {
          title: "System Hardening",
          items: [
            "Windows Hardening → Group policy, access controls, service configuration",
            "Linux Hardening → File permissions, service management, kernel security",
            "Configuration Management → Baseline configurations, compliance scanning",
            "Patch Management → Vulnerability management and update procedures"
          ]
        },
        {
          title: "Attack Techniques & Defense",
          items: [
            "Phishing Attacks → Email security, social engineering, user awareness",
            "Malware Analysis → Static/dynamic analysis, sandboxing, indicators",
            "DoS/DDoS Attacks → Traffic flooding, mitigation strategies, rate limiting",
            "SQL Injection → Database attacks, parameterized queries, input validation"
          ]
        },
        {
          title: "Web Security & Cryptography",
          items: [
            "OWASP Top 10 → Common web vulnerabilities and countermeasures",
            "XSS & CSRF → Cross-site scripting and request forgery prevention",
            "Encryption Basics → AES, RSA, hashing algorithms, digital signatures",
            "Incident Response → Detection, containment, eradication, recovery"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Intermediate Hands-on Skills",
      subtitle: "Advanced Level (6-12 months)",
      description: "Practical attack & defense skills with scripting for automation",
      color: "bg-green-500",
      sections: [
        {
          title: "Advanced Network Security",
          items: [
            "Firewall Rules → Advanced filtering, NAT, port forwarding configuration",
            "VPN Tunneling → IPSec implementation, SSL VPN deployment",
            "Network Segmentation → VLANs, subnetting, micro-segmentation",
            "Wireless Security → WPA3, enterprise authentication, rogue AP detection"
          ]
        },
        {
          title: "System Administration & AD",
          items: [
            "Active Directory → Domain services, group policy, authentication",
            "Linux Administration → Advanced permissions, SELinux, system monitoring",
            "PowerShell Security → Execution policies, constrained language mode",
            "Container Security → Docker hardening, Kubernetes security policies"
          ]
        },
        {
          title: "Malware Analysis & Threat Intel",
          items: [
            "Static Analysis → File structure, strings, imports, metadata analysis",
            "Dynamic Analysis → Behavioral analysis, network indicators, sandbox",
            "Threat Intelligence → IOCs, threat feeds, STIX/TAXII, attribution",
            "Forensics Tools → Autopsy, FTK Imager, volatility, timeline analysis"
          ]
        },
        {
          title: "Penetration Testing Basics",
          items: [
            "Reconnaissance → OSINT, footprinting, enumeration techniques",
            "Vulnerability Scanning → Nmap, OpenVAS, Nessus, result analysis",
            "Exploitation → Metasploit framework, custom exploits, payload delivery",
            "Post-exploitation → Privilege escalation, persistence, lateral movement"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Advanced Specialization",
      subtitle: "Expert Level (12-18 months)",
      description: "Industry-ready skills with chosen specialization focus",
      color: "bg-purple-500",
      sections: [
        {
          title: "Red Team Operations",
          items: [
            "Advanced Penetration Testing → Custom exploits, zero-day research",
            "Social Engineering → Phishing campaigns, physical security, OSINT",
            "Post-exploitation → Advanced persistence, steganography, covert channels",
            "Red Team Tools → Cobalt Strike, custom C2, living-off-the-land techniques"
          ]
        },
        {
          title: "Blue Team Defense",
          items: [
            "Incident Response → NIST framework, playbooks, evidence collection",
            "Digital Forensics → Memory analysis, disk imaging, network forensics",
            "Threat Hunting → Hypothesis-driven hunting, behavioral analytics",
            "SOC Operations → SIEM management, alert triage, case management"
          ]
        },
        {
          title: "Cloud Security",
          items: [
            "AWS Security → IAM, CloudTrail, GuardDuty, security groups, compliance",
            "Azure Security → Azure AD, Security Center, Key Vault, monitoring",
            "GCP Security → Cloud IAM, Security Command Center, audit logging",
            "Container Security → Kubernetes security, image scanning, runtime protection"
          ]
        },
        {
          title: "Application Security",
          items: [
            "Secure SDLC → Security requirements, design review, code review",
            "SAST/DAST → Static and dynamic application security testing",
            "API Security → Authentication, authorization, rate limiting, fuzzing",
            "DevSecOps → CI/CD security, infrastructure as code, policy as code"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Industry Ready Professional",
      subtitle: "Production Level (18-24+ months)",
      description: "Full-time job ready with real-world exposure and advanced skills",
      color: "bg-red-500",
      sections: [
        {
          title: "Security Architecture",
          items: [
            "Zero Trust Architecture → Identity verification, micro-segmentation, least privilege",
            "Security Frameworks → NIST, ISO 27001, CIS Controls implementation",
            "Risk Management → Risk assessment, treatment, monitoring, reporting",
            "Business Continuity → Disaster recovery, incident response, crisis management"
          ]
        },
        {
          title: "Advanced Threat Intelligence",
          items: [
            "Threat Modeling → STRIDE, PASTA, attack trees, risk analysis",
            "Attribution Analysis → APT tracking, TTPs, infrastructure analysis", 
            "Threat Intelligence Platforms → MISP, OpenCTI, threat feed integration",
            "Cyber Threat Hunting → Advanced persistent threats, behavioral analytics"
          ]
        },
        {
          title: "Compliance & Governance",
          items: [
            "Regulatory Compliance → GDPR, HIPAA, PCI-DSS, SOX requirements",
            "Audit Management → Internal audits, external assessments, remediation",
            "Policy Development → Security policies, procedures, standards, guidelines",
            "Security Metrics → KPIs, dashboards, reporting, continuous improvement"
          ]
        },
        {
          title: "Leadership & Communication",
          items: [
            "Security Awareness → Training programs, phishing simulations, culture",
            "Incident Communication → Stakeholder updates, breach notification, PR",
            "Technical Leadership → Team management, project coordination, mentoring",
            "Strategic Planning → Security roadmap, budget planning, technology evaluation"
          ]
        }
      ]
    }
  ];

  // Handle PDF download with loading state
  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      const result = await downloadRoadmapPDF(phases);
      if (result.success) {
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
      }
    } catch (error) {
      console.error('PDF download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'documentation':
        return <Docs />;
      case 'projects':
        return <Projects />;
      default:
        return (
          <div className="relative">
            {/* Timeline */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"></div>
                  )}

                  {/* Phase Card */}
                  <div className="flex flex-col items-center">
                    {/* Phase Header */}
                    <div className="text-center mb-4 md:mb-6 px-4">
                      <div className={`inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`}>
                        Phase {phase.id}: {phase.title}
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
                    </div>

                    {/* Phase Content */}
                    <div className="w-full max-w-5xl px-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        {phase.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="bg-white rounded-lg border-2 border-red-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-red-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                              {section.title}
                            </h3>
                            <ol className="space-y-2">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                  <span className="font-medium text-gray-900">{itemIndex + 1}.</span> {item}
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicators */}
                    {index < phases.length - 1 && (
                      <div className="mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4">
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform -rotate-12">
                          Phase {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Phase {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-red-50 to-red-50 rounded-lg border border-red-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🛡️ Congratulations! You're Cybersecurity Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the Cybersecurity Mastery Roadmap and are now ready to protect organizations and lead security initiatives.
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-300 mt-4">
                <h3 className="font-semibold text-red-600 mb-2">🎯 Final Tips to Excel in Cybersecurity</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Participate in bug bounty programs (HackerOne, Bugcrowd) and CTF competitions</li>
                  <li>• Contribute to open-source security tools and join communities (DEFCON, OWASP)</li>
                  <li>• Stay updated via security blogs (Krebs, Threatpost, BleepingComputer)</li>
                  <li>• Maintain continuous learning - cybersecurity landscape evolves rapidly</li>
                  <li>• Build a strong professional network and consider security certifications</li>
                </ul>
              </div>
            </div>

            {/* Additional Resources Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">📚 Key Certifications by Career Path</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">🔴 Red Team / Offensive</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• OSCP (Offensive Security)</li>
                    <li>• CEH (EC-Council)</li>
                    <li>• GPEN (SANS)</li>
                    <li>• CRTP (Altered Security)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">🔵 Blue Team / Defensive</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Security+ (CompTIA)</li>
                    <li>• CySA+ (CompTIA)</li>
                    <li>• GCIH (SANS)</li>
                    <li>• GNFA (SANS)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">☁️ Cloud Security</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AWS Security Specialty</li>
                    <li>• Azure Security Engineer</li>
                    <li>• CCSP (ISC²)</li>
                    <li>• Google Cloud Security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Shield className="text-red-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Cybersecurity <span className="text-red-600">Mastery Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`}>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit">
            <button
              onClick={() => {
                setActiveTab('roadmap');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'roadmap'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Map size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText size={18} className="mr-2" />
              Documentation
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'projects'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen size={18} className="mr-2" />
              Projects
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default CybersecurityRoadmap;