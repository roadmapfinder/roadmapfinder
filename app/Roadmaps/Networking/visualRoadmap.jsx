import React from 'react';

export default function NetworkingRoadmap() {
  const roadmap = [
    {
      title: "Prerequisites",
      subtitle: "Must Know Before",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Binary & Mathematics", 
          category: "Number Systems",
          details: "Binary to decimal conversion, hexadecimal, powers of 2, subnetting calculations, bitwise operations"
        },
        { 
          step: "Step - 2", 
          topic: "Basic Computer Science", 
          category: "Fundamentals",
          details: "Operating systems basics, command line (Windows/Linux), basic scripting, understanding of hardware components"
        },
        { 
          step: "Step - 3", 
          topic: "Network Terminology", 
          category: "Core Concepts",
          details: "Bandwidth, latency, throughput, jitter, packet loss, protocol basics, client-server architecture"
        },
      ],
    },
    {
      title: "Fundamentals",
      subtitle: "Networking Core Concepts",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Network Models", 
          category: "Architecture Foundation",
          details: "OSI 7-layer model, TCP/IP 4-layer model, encapsulation/decapsulation, data flow between layers"
        },
        { 
          step: "Step - 5", 
          topic: "Network Devices", 
          category: "Hardware Components",
          details: "Hub vs Switch vs Router, Firewall, Access Point, Bridge, Gateway functions and differences"
        },
        { 
          step: "Step - 6", 
          topic: "Network Topologies", 
          category: "Physical Design",
          details: "Bus, Star, Ring, Mesh, Hybrid topologies, LAN, WAN, MAN, Internet architecture basics"
        },
        { 
          step: "Step - 7", 
          topic: "Cables & Physical Media", 
          category: "Layer 1 Foundation",
          details: "Ethernet cables (Cat5e, Cat6, Cat6a), Fiber optic, Wireless standards, signal transmission basics"
        },
      ],
    },
    {
      title: "IP & Protocols",
      subtitle: "Communication Standards",
      steps: [
        { 
          step: "Step - 8", 
          topic: "IP Addressing Mastery", 
          category: "Network Addressing",
          details: "IPv4 classes (A,B,C,D,E), IPv6 structure, private vs public IP, loopback, multicast addressing"
        },
        { 
          step: "Step - 9", 
          topic: "Subnetting & VLSM", 
          category: "Network Segmentation",
          details: "CIDR notation, subnet masks, VLSM calculations, supernetting, route summarization techniques"
        },
        { 
          step: "Step - 10", 
          topic: "Core Protocols", 
          category: "Layer 2-4 Protocols",
          details: "ARP, ICMP, DHCP, DNS, NTP, TCP vs UDP, 3-way handshake, flow control, congestion control"
        },
        { 
          step: "Step - 11", 
          topic: "Application Protocols", 
          category: "Layer 7 Services",
          details: "HTTP/HTTPS, SMTP/POP3/IMAP, FTP/SFTP, SNMP, Telnet/SSH, VoIP (SIP/RTP) basics"
        },
      ],
    },
    {
      title: "Switching & VLANs",
      subtitle: "Layer 2 Technologies",
      steps: [
        { 
          step: "Step - 12", 
          topic: "Ethernet Switching", 
          category: "Layer 2 Operations",
          details: "MAC addresses, CAM table, frame forwarding, collision/broadcast domains, duplex settings"
        },
        { 
          step: "Step - 13", 
          topic: "VLAN Implementation", 
          category: "Network Segmentation",
          details: "VLAN creation, 802.1Q trunking, native VLAN, VLAN assignment methods, inter-VLAN routing"
        },
        { 
          step: "Step - 14", 
          topic: "Spanning Tree Protocol", 
          category: "Loop Prevention",
          details: "STP, RSTP, MST, root bridge election, port states, PortFast, BPDU Guard, topology changes"
        },
        { 
          step: "Step - 15", 
          topic: "Advanced Switching", 
          category: "Performance & Security",
          details: "EtherChannel, Port security, DHCP snooping, ARP inspection, storm control, private VLANs"
        },
      ],
    },
    {
      title: "Routing & WAN",
      subtitle: "Layer 3 & Beyond",
      steps: [
        { 
          step: "Step - 16", 
          topic: "Routing Fundamentals", 
          category: "Path Selection",
          details: "Static routing, default routes, routing table, longest prefix match, administrative distance"
        },
        { 
          step: "Step - 17", 
          topic: "Dynamic Routing", 
          category: "Protocol Mastery",
          details: "RIP, OSPF areas, EIGRP, BGP basics, route redistribution, metrics, convergence time"
        },
        { 
          step: "Step - 18", 
          topic: "WAN Technologies", 
          category: "Wide Area Networks",
          details: "MPLS, Frame Relay, PPP, HDLC, VPN types, leased lines, broadband technologies"
        },
        { 
          step: "Step - 19", 
          topic: "Advanced Routing", 
          category: "Enterprise Features",
          details: "Policy-based routing, route maps, BGP path selection, OSPF LSAs, EIGRP feasible successors"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Fundamentals", project: "Small Office Network Design (10 devices)" },
    { level: "IP & Protocols", project: "Corporate Network with VLANs & DHCP" },
    { level: "Switching & VLANs", project: "Multi-site Network with STP & Trunking" },
    { level: "Routing & WAN", project: "Enterprise Network with OSPF & BGP" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-red-500 to-red-600'
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
                                <stop offset="0%" stopColor="#2563EB" />
                                <stop offset="100%" stopColor="#9333EA" />
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
            🏗️ Networking Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential Networking Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Routing Protocols</div>
              <div className="text-blue-100">OSPF, EIGRP, BGP, RIP, IS-IS</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Security</div>
              <div className="text-blue-100">Firewalls, VPN, IDS/IPS, ACLs</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Wireless</div>
              <div className="text-blue-100">802.11, WPA3, WLAN Controllers</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Monitoring</div>
              <div className="text-blue-100">SNMP, NetFlow, Syslog, Wireshark</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud Networking</div>
              <div className="text-blue-100">AWS VPC, Azure VNet, SD-WAN</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Automation</div>
              <div className="text-blue-100">Python, Ansible, NETCONF, APIs</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Data Center</div>
              <div className="text-blue-100">VXLAN, EVPN, Fabric, Storage</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">QoS & Traffic</div>
              <div className="text-blue-100">DSCP, Traffic Shaping, Policing</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Advanced Networking Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏢 Enterprise Campus Network</h3>
              <p className="text-sm text-gray-600 mb-3">Design multi-building campus with core/distribution/access layers, redundancy, and security zones.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">OSPF • HSRP • VLANs • QoS</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🌐 Multi-Site WAN Design</h3>
              <p className="text-sm text-gray-600 mb-3">Connect multiple branch offices with MPLS, backup internet, and centralized security policies.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">BGP • MPLS • SD-WAN • VPN</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">☁️ Hybrid Cloud Infrastructure</h3>
              <p className="text-sm text-gray-600 mb-3">Build secure connectivity between on-premises data center and multiple cloud providers.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">AWS • Azure • VPN • Direct Connect</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🔐 Zero Trust Network</h3>
              <p className="text-sm text-gray-600 mb-3">Implement microsegmentation, identity-based access, and continuous monitoring across infrastructure.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">NAC • Segmentation • SASE • Identity</div>
            </div>
          </div>
        </section>

        {/* Industry Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Industry Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🔧 Modern Tools (2025)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Packet Tracer / GNS3 / EVE-NG</li>
                <li>• Wireshark / tcpdump analysis</li>
                <li>• Python network automation</li>
                <li>• Ansible for configuration</li>
                <li>• Git for network configs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🏗️ Design Principles</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Hierarchical network design</li>
                <li>• Redundancy & high availability</li>
                <li>• Scalable addressing scheme</li>
                <li>• Security by design</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🚀 Career Specializations</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Network Security Engineer</li>
                <li>• Cloud Network Architect</li>
                <li>• Data Center Specialist</li>
                <li>• Network Automation Engineer</li>
                <li>• Wireless Network Designer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Tips Section */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 Networking Learning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🧮 Master Subnetting</div>
              <div className="text-gray-700">Subnetting is fundamental. Practice calculations daily until they become second nature.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🛠️ Hands-on Labs</div>
              <div className="text-gray-700">Theory alone isn't enough. Build networks in simulators and physical labs whenever possible.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📊 Understand Traffic Flow</div>
              <div className="text-gray-700">Always trace how packets move through your network. Use packet captures to verify your understanding.</div>
            </div>
          </div>
        </section>

        {/* Certification Path */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎓 Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-2">🔵 Cisco Track</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <div>• CCNA (200-301)</div>
                <div>• CCNP Enterprise</div>
                <div>• CCIE Enterprise</div>
                <div>• Specialist Certs</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-2">🟢 CompTIA Path</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <div>• Network+ (N10-008)</div>
                <div>• Security+ (SY0-601)</div>
                <div>• Cloud+ (CV0-003)</div>
                <div>• CySA+ Advanced</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-2">☁️ Cloud Networking</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <div>• AWS Solutions Architect</div>
                <div>• Azure Network Engineer</div>
                <div>• GCP Cloud Engineer</div>
                <div>• Multi-cloud Specialty</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-2">🔒 Security Focus</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <div>• PCNSE (Palo Alto)</div>
                <div>• NSE (Fortinet)</div>
                <div>• JNCIE (Juniper)</div>
                <div>• CISSP Advanced</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🌐 Remember: Networking is the foundation of all IT infrastructure. Master the fundamentals, then specialize based on your interests!
          </p>
        </div>
      </div>
    </main>
  );
}