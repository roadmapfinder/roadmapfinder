import React from 'react';

export default function OSMasteryRoadmap() {
  const roadmap = [
    {
      title: "OS Foundations",
      subtitle: "Understanding Core Concepts",
      steps: [
        { 
          step: "Step - 1", 
          topic: "What is an Operating System?", 
          category: "Foundation (Mandatory)",
          details: "OS purpose, types (Batch, Multi-tasking, Real-time, Distributed, Embedded), system architecture overview"
        },
        { 
          step: "Step - 2", 
          topic: "OS Components & Services", 
          category: "System Architecture",
          details: "Kernel (monolithic, microkernel, hybrid), Shell (CLI/GUI), System Programs, Libraries, boot process"
        },
        { 
          step: "Step - 3", 
          topic: "Linux/Unix Fundamentals", 
          category: "Practical OS Entry",
          details: "Linux installation, filesystem hierarchy (/bin, /etc, /dev, /proc), essential commands, shell scripting"
        },
      ],
    },
    {
      title: "Core OS Concepts",
      subtitle: "System Internals Mastery",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Process Management", 
          category: "System Processes",
          details: "Process states, scheduling algorithms (FCFS, SJF, Round Robin), context switching, threads vs processes"
        },
        { 
          step: "Step - 5", 
          topic: "Memory Management", 
          category: "Memory Systems",
          details: "Virtual memory, paging, segmentation, page replacement algorithms (LRU, FIFO), thrashing, stack vs heap"
        },
        { 
          step: "Step - 6", 
          topic: "Inter-Process Communication", 
          category: "Process Coordination",
          details: "Pipes, shared memory, message queues, semaphores, signals, synchronization primitives"
        },
        { 
          step: "Step - 7", 
          topic: "Synchronization & Concurrency", 
          category: "Concurrent Systems",
          details: "Race conditions, deadlocks, locks, monitors, producer-consumer problems, Banker's algorithm"
        },
      ],
    },
    {
      title: "Advanced OS Topics",
      subtitle: "Deep System Understanding",
      steps: [
        { 
          step: "Step - 8", 
          topic: "File Systems", 
          category: "Storage Management",
          details: "File allocation methods, directory structures, journaling (ext4, NTFS, XFS, ZFS), disk scheduling"
        },
        { 
          step: "Step - 9", 
          topic: "I/O Systems", 
          category: "Input/Output Management",
          details: "I/O hardware, device drivers, interrupts, DMA, blocking vs non-blocking I/O, network I/O basics"
        },
        { 
          step: "Step - 10", 
          topic: "Virtualization & Containers", 
          category: "Modern OS Concepts",
          details: "VMs vs Containers, Docker, hypervisors, resource isolation, container orchestration basics"
        },
        { 
          step: "Step - 11", 
          topic: "OS Security", 
          category: "System Security",
          details: "Authentication, access control lists, SELinux, sandboxing, OS hardening, security auditing"
        },
      ],
    },
    {
      title: "System Programming",
      subtitle: "Hands-on Implementation",
      steps: [
        { 
          step: "Step - 12", 
          topic: "C System Programming", 
          category: "Low-level Programming",
          details: "System calls (fork, exec, wait), file descriptors, error handling, signal handling, memory management"
        },
        { 
          step: "Step - 13", 
          topic: "Kernel Modules & Drivers", 
          category: "Kernel Development",
          details: "Loadable kernel modules, device drivers, kernel debugging, /proc filesystem, kernel data structures"
        },
        { 
          step: "Step - 14", 
          topic: "Performance & Debugging", 
          category: "System Optimization",
          details: "Performance profiling tools (perf, strace, gdb), system monitoring, bottleneck analysis, optimization"
        },
        { 
          step: "Step - 15", 
          topic: "Distributed Systems Basics", 
          category: "Scalable Systems",
          details: "Distributed OS concepts, cloud OS, microservices, fault tolerance, consistency models, CAP theorem"
        },
      ],
    },
    {
      title: "Industry Applications",
      subtitle: "Production-Ready Skills",
      steps: [
        { 
          step: "Step - 16", 
          topic: "DevOps & Cloud Integration", 
          category: "Infrastructure Management",
          details: "AWS/GCP/Azure VMs, configuration management (Ansible, Puppet), infrastructure as code, monitoring"
        },
        { 
          step: "Step - 17", 
          topic: "Real-Time & Embedded Systems", 
          category: "Specialized OS",
          details: "RTOS concepts, FreeRTOS, Zephyr, embedded programming, ARM architecture, interrupt handling"
        },
        { 
          step: "Step - 18", 
          topic: "System Administration", 
          category: "Production Systems",
          details: "Linux server management, log analysis, backup strategies, disaster recovery, capacity planning"
        },
        { 
          step: "Step - 19", 
          topic: "Advanced Security & Hardening", 
          category: "Enterprise Security",
          details: "OS exploits, reverse engineering, CIS benchmarks, compliance, incident response, forensics"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "OS Foundations", project: "Custom Shell Implementation (Bash Clone)" },
    { level: "Core OS Concepts", project: "Multi-threaded Process Scheduler Simulator" },
    { level: "Advanced OS Topics", project: "Simple File System Implementation" },
    { level: "System Programming", project: "Network Server with Custom Protocol" },
    { level: "Industry Applications", project: "Container Runtime from Scratch" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
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
              <span className="text-sm font-medium text-gray-700">⚡ 19 Essential Steps • 🎯 5 Skill Levels • 🏢 Industry Ready</span>
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
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#8B5CF6" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded">
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
            🏗️ Operating System Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential OS Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential OS Technologies & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Operating Systems</div>
              <div className="text-blue-100">Linux, Unix, Windows, macOS, FreeBSD</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">System Programming</div>
              <div className="text-blue-100">C, Rust, Assembly, POSIX APIs, System Calls</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Debugging Tools</div>
              <div className="text-blue-100">gdb, strace, perf, valgrind, ltrace</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Virtualization</div>
              <div className="text-blue-100">Docker, KVM, VirtualBox, VMware, Xen</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Embedded RTOS</div>
              <div className="text-blue-100">FreeRTOS, Zephyr, VxWorks, QNX</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">File Systems</div>
              <div className="text-blue-100">ext4, XFS, ZFS, NTFS, Btrfs, FUSE</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud & DevOps</div>
              <div className="text-blue-100">AWS, GCP, Kubernetes, Ansible, Terraform</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Security Tools</div>
              <div className="text-blue-100">SELinux, AppArmor, iptables, Wireshark</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level OS Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🔧 Custom Operating System Kernel</h3>
              <p className="text-sm text-gray-600 mb-3">Build a minimal OS kernel with process scheduling, memory management, and basic I/O handling.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">C • Assembly • x86_64 • GRUB</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🐳 Container Runtime Implementation</h3>
              <p className="text-sm text-gray-600 mb-3">Create a Docker-like container runtime with namespaces, cgroups, and overlay filesystems.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Go • Linux • Namespaces • Cgroups</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 System Performance Monitor</h3>
              <p className="text-sm text-gray-600 mb-3">Build comprehensive system monitoring tool with real-time metrics, alerting, and historical analysis.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">C • /proc • /sys • eBPF • Grafana</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🔒 Security Sandbox System</h3>
              <p className="text-sm text-gray-600 mb-3">Implement application sandboxing with seccomp-bpf, capabilities, and mandatory access controls.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">C • seccomp • SELinux • ptrace</div>
            </div>
          </div>
        </section>

        {/* Modern OS Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Modern OS Development Best Practices (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">⚡ Performance & Efficiency</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Zero-copy I/O operations</li>
                <li>• Lock-free data structures</li>
                <li>• CPU cache optimization</li>
                <li>• Memory-mapped file I/O</li>
                <li>• eBPF for kernel programming</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🛡️ Security & Isolation</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Principle of least privilege</li>
                <li>• Container security (seccomp, AppArmor)</li>
                <li>• Hardware security features</li>
                <li>• Kernel ASLR and CFI</li>
                <li>• Secure boot and TPM integration</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg p-4 shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🚀 Modern Development</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Rust for system programming</li>
                <li>• Cloud-native OS design</li>
                <li>• Microkernel architectures</li>
                <li>• Event-driven I/O (io_uring)</li>
                <li>• Distributed system concepts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">📚 Essential OS Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📖 Must-Read Books</div>
              <div className="text-gray-700">Operating System Concepts (Silberschatz), Modern Operating Systems (Tanenbaum), Linux Kernel Development (Love)</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎥 Video Resources</div>
              <div className="text-gray-700">MIT 6.828, Stanford CS140, UC Berkeley CS162, Gate Smashers OS playlist, CodeVault system programming</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">💻 Hands-on Practice</div>
              <div className="text-gray-700">xv6 OS lab, LeetCode concurrency problems, Linux From Scratch, kernel module development, container runtimes</div>
            </div>
          </div>
        </section>

        {/* Career Path Options */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Operating Systems Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">⚙️ System Engineer/SRE</div>
              <div className="text-gray-700">Linux administration, cloud infrastructure, monitoring, automation, DevOps practices</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🔧 Kernel Developer</div>
              <div className="text-gray-700">Linux kernel, device drivers, system calls, performance optimization, low-level programming</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">📱 Embedded Systems</div>
              <div className="text-gray-700">RTOS development, IoT devices, ARM programming, real-time constraints, hardware interfacing</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🔒 Security Specialist</div>
              <div className="text-gray-700">OS security, exploit development, reverse engineering, malware analysis, forensics</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🌟 Master operating systems from theory to practice! Build solid foundations, implement real projects, and become industry-ready.
          </p>
        </div>
      </div>
    </main>
  );
}