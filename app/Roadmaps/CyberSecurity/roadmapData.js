export const phases = [
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