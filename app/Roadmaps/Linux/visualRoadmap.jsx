import React from 'react';

export default function LinuxRoadmap() {
  const roadmap = [
    {
      title: "Linux Foundations",
      subtitle: "Beginner Essential Skills",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Linux Basics & Installation", 
          category: "Foundation (Mandatory)",
          details: "Understanding Linux, distros (Ubuntu, Fedora, Debian), dual boot, VM setup, WSL, filesystem hierarchy"
        },
        { 
          step: "Step - 2", 
          topic: "Basic Navigation & Commands", 
          category: "Command Line Mastery",
          details: "pwd, ls, cd, mkdir, rm, cp, mv, cat, nano, less, head, tail, filesystem structure"
        },
        { 
          step: "Step - 3", 
          topic: "File Permissions & Users", 
          category: "Security Fundamentals",
          details: "chmod, chown, ls -l, users, groups, root privileges, basic permission management"
        },
      ],
    },
    {
      title: "Intermediate Linux",
      subtitle: "Power User Stage",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Shell Mastery & Scripting", 
          category: "Command Line Power",
          details: "Bash shell, aliases, wildcards, pipes, redirection, history, command chaining, job control"
        },
        { 
          step: "Step - 5", 
          topic: "File Operations & Search", 
          category: "Data Management",
          details: "find, locate, grep, awk, sed, regular expressions, advanced file manipulation"
        },
        { 
          step: "Step - 6", 
          topic: "Process & System Monitoring", 
          category: "System Management",
          details: "top, htop, ps, kill, jobs, bg, fg, df, du, free, uptime, dmesg monitoring"
        },
        { 
          step: "Step - 7", 
          topic: "Networking & SSH", 
          category: "Network Operations",
          details: "ping, curl, wget, netstat, ss, SSH, scp, rsync, basic firewall (ufw, iptables)"
        },
      ],
    },
    {
      title: "System Administration",
      subtitle: "Industry Essentials",
      steps: [
        { 
          step: "Step - 8", 
          topic: "User & Group Management", 
          category: "Access Control",
          details: "useradd, usermod, passwd, groupadd, sudo configuration, privilege escalation"
        },
        { 
          step: "Step - 9", 
          topic: "Storage & Disk Management", 
          category: "Storage Systems",
          details: "mount, umount, fstab, fdisk, lsblk, partitioning, LVM, RAID basics"
        },
        { 
          step: "Step - 10", 
          topic: "Services & Systemd", 
          category: "Service Management",
          details: "systemctl commands, service management, systemd, journalctl, service logs"
        },
        { 
          step: "Step - 11", 
          topic: "Logging & Monitoring", 
          category: "System Observability",
          details: "/var/log/, syslog, logrotate, htop, iotop, iftop, glances, system monitoring"
        },
      ],
    },
    {
      title: "Advanced Linux",
      subtitle: "Production Level Skills",
      steps: [
        { 
          step: "Step - 12", 
          topic: "Network Configuration & Security", 
          category: "Network & Security",
          details: "Static IP, DHCP, DNS, SSH hardening, firewalls, Fail2Ban, SELinux/AppArmor basics"
        },
        { 
          step: "Step - 13", 
          topic: "Kernel & Performance Tuning", 
          category: "System Optimization",
          details: "Boot process, kernel modules, sysctl tuning, performance profiling, strace, perf"
        },
        { 
          step: "Step - 14", 
          topic: "Automation & Scripting", 
          category: "Process Automation",
          details: "Advanced bash scripting, cron jobs, automation scripts, xargs, tmux, expect"
        },
        { 
          step: "Step - 15", 
          topic: "Containerization & Virtualization", 
          category: "Modern Infrastructure",
          details: "Docker basics, LXC/LXD containers, KVM/QEMU virtualization, container management"
        },
      ],
    },
    {
      title: "DevOps Integration",
      subtitle: "Industry Ready Skills",
      steps: [
        { 
          step: "Step - 16", 
          topic: "Web Server & Database Setup", 
          category: "Server Administration",
          details: "Apache, Nginx configuration, MySQL/PostgreSQL setup, reverse proxy, load balancing"
        },
        { 
          step: "Step - 17", 
          topic: "Cloud Integration", 
          category: "Cloud Operations",
          details: "AWS CLI, GCP CLI, Azure CLI, Terraform, Ansible automation, cloud deployment"
        },
        { 
          step: "Step - 18", 
          topic: "Monitoring & High Availability", 
          category: "Production Systems",
          details: "ELK stack, Prometheus + Grafana, HAProxy, Keepalived, system monitoring"
        },
        { 
          step: "Step - 19", 
          topic: "Security & Hardening", 
          category: "Enterprise Security",
          details: "System hardening, CIS benchmarks, VPNs, OpenVPN, WireGuard, security best practices"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundations", project: "Personal Linux Server Setup (Home Lab)" },
    { level: "Intermediate", project: "Automated Backup System with Bash Scripts" },
    { level: "System Admin", project: "Web Server with SSL & Monitoring Dashboard" },
    { level: "DevOps Integration", project: "CI/CD Pipeline with Docker & Cloud Deployment" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-orange-500 to-orange-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">

          

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🚀 19 Essential Steps • 🎯 5 Skill Levels • 🏢 Industry Ready</span>
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
                                <stop offset="0%" stopColor="#10B981" />
                                <stop offset="100%" stopColor="#3B82F6" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-green-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-green-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-green-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-green-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-green-50 px-2 py-1 rounded">
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

        {/* Project Suggestions */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🏗️ Linux Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential Linux Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Distributions</div>
              <div className="text-green-100">Ubuntu, RHEL, Debian, CentOS, Fedora</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Shell & Scripting</div>
              <div className="text-green-100">Bash, Zsh, Python, Perl, AWK, SED</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Containerization</div>
              <div className="text-green-100">Docker, Podman, LXC, Kubernetes</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Monitoring</div>
              <div className="text-green-100">Prometheus, Grafana, ELK, Nagios</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Web Servers</div>
              <div className="text-green-100">Apache, Nginx, HAProxy, Traefik</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Automation</div>
              <div className="text-green-100">Ansible, Terraform, Puppet, Chef</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud Platforms</div>
              <div className="text-green-100">AWS, GCP, Azure, DigitalOcean</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Security Tools</div>
              <div className="text-green-100">Fail2Ban, iptables, SELinux, OpenVPN</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level Project Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏗️ High-Availability Web Infrastructure</h3>
              <p className="text-sm text-gray-600 mb-3">Build scalable web infrastructure with load balancers, auto-scaling, monitoring, and disaster recovery.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Nginx • HAProxy • Ansible • Prometheus</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛡️ Security Hardened Linux Environment</h3>
              <p className="text-sm text-gray-600 mb-3">Implement enterprise security with firewalls, intrusion detection, log analysis, and compliance monitoring.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">SELinux • Fail2Ban • OSSEC • CIS Benchmarks</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🐳 Container Orchestration Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Deploy and manage containerized applications with Kubernetes, service mesh, and GitOps workflows.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">Kubernetes • Istio • ArgoCD • Helm</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Centralized Logging & Monitoring</h3>
              <p className="text-sm text-gray-600 mb-3">Build comprehensive monitoring solution with log aggregation, metrics collection, and alerting systems.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">ELK Stack • Prometheus • Grafana • AlertManager</div>
            </div>
          </div>
        </section>

        {/* Modern Linux Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Modern Linux Best Practices (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🔐 Security First</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Zero-trust architecture</li>
                <li>• Automated security patching</li>
                <li>• Principle of least privilege</li>
                <li>• Container security scanning</li>
                <li>• Compliance automation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">⚡ Infrastructure as Code</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Terraform for provisioning</li>
                <li>• Ansible for configuration</li>
                <li>• GitOps workflows</li>
                <li>• Immutable infrastructure</li>
                <li>• Version controlled configs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">📊 Observability</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Metrics, logs, and traces</li>
                <li>• Proactive monitoring</li>
                <li>• SLI/SLO implementation</li>
                <li>• Chaos engineering</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Tips Section */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 Linux Learning Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🖥️ Hands-On Practice</div>
              <div className="text-gray-700">Set up home labs, use virtual machines, break things and fix them. Practice is key to Linux mastery.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📚 Read the Manual</div>
              <div className="text-gray-700">Master the 'man' command, read documentation, understand system internals, and explore source code.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🌐 Join Communities</div>
              <div className="text-gray-700">Participate in Linux forums, contribute to open source, attend conferences, and learn from experts.</div>
            </div>
          </div>
        </section>

        {/* Career Path Options */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Linux Career Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🔧 Systems Administrator</div>
              <div className="text-gray-700">Server management, networking, user administration, backup strategies</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">☁️ DevOps Engineer</div>
              <div className="text-gray-700">CI/CD, containerization, cloud platforms, infrastructure automation</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🛡️ Security Engineer</div>
              <div className="text-gray-700">System hardening, penetration testing, security monitoring, compliance</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🏗️ Site Reliability Engineer</div>
              <div className="text-gray-700">Production systems, monitoring, performance, incident response</div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-purple-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">📚 Essential Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
              <div className="font-semibold text-purple-800 mb-2">📖 Essential Books</div>
              <ul className="text-gray-700 space-y-1">
                <li>• The Linux Command Line</li>
                <li>• How Linux Works</li>
                <li>• Linux System Administration</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
              <div className="font-semibold text-purple-800 mb-2">🎓 Certifications</div>
              <ul className="text-gray-700 space-y-1">
                <li>• LFCS (Linux Foundation)</li>
                <li>• RHCSA (Red Hat)</li>
                <li>• CompTIA Linux+</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
              <div className="font-semibold text-purple-800 mb-2">🔬 Practice Labs</div>
              <ul className="text-gray-700 space-y-1">
                <li>• OverTheWire Wargames</li>
                <li>• TryHackMe Linux Rooms</li>
                <li>• HackTheBox Machines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🐧 Remember: Linux powers the world's infrastructure! Master these skills, practice regularly, and join the open source community.
          </p>
        </div>
      </div>
    </main>
  );
}