import React from 'react';

export default function IoTEngineeringRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Electronics & Programming",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Electronics Fundamentals", 
          category: "Hardware Basics",
          details: "Ohm's Law, voltage, current, resistance, breadboards, resistors, capacitors, digital vs analog signals"
        },
        { 
          step: "Step - 2", 
          topic: "Programming Foundations", 
          category: "Coding Skills",
          details: "C/C++ for microcontrollers, Python for prototyping, embedded C basics, memory management"
        },
        { 
          step: "Step - 3", 
          topic: "Microcontrollers & Boards", 
          category: "Development Platforms",
          details: "Arduino UNO/Nano basics, ESP8266/ESP32 WiFi modules, Raspberry Pi mini computer setup"
        },
        { 
          step: "Step - 4", 
          topic: "Basic Sensors & Actuators", 
          category: "Input/Output Components",
          details: "Temperature sensors (DHT11, DHT22), motion sensors (PIR), light sensors (LDR), basic motors"
        },
        { 
          step: "Step - 5", 
          topic: "Circuit Design & Prototyping", 
          category: "Hardware Development",
          details: "Schematic reading, PCB basics, soldering techniques, component selection, testing methods"
        },
        { 
          step: "Step - 6", 
          topic: "Networking Fundamentals", 
          category: "Communication Basics",
          details: "TCP/IP basics, HTTP protocols, WiFi configuration, Bluetooth fundamentals, IP addressing"
        },
      ],
    },
    {
      title: "Intermediate",
      subtitle: "IoT Systems Development",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Advanced Sensors Integration", 
          category: "Sensor Networks",
          details: "Gas sensors, pressure sensors, proximity sensors, sensor calibration, data filtering techniques"
        },
        { 
          step: "Step - 8", 
          topic: "IoT Communication Protocols", 
          category: "Networking Protocols",
          details: "MQTT publish/subscribe, CoAP protocol, REST APIs, WebSocket communication, data serialization"
        },
        { 
          step: "Step - 9", 
          topic: "Cloud Integration Basics", 
          category: "Cloud Connectivity",
          details: "AWS IoT Core, Azure IoT Hub, Firebase integration, cloud databases, data visualization"
        },
        { 
          step: "Step - 10", 
          topic: "Wireless Technologies", 
          category: "Communication Methods",
          details: "WiFi optimization, Bluetooth LE, Zigbee, LoRa networks, cellular IoT, NFC implementation"
        },
        { 
          step: "Step - 11", 
          topic: "Data Processing & Storage", 
          category: "Data Management",
          details: "Time-series databases, data aggregation, real-time processing, MongoDB, InfluxDB basics"
        },
        { 
          step: "Step - 12", 
          topic: "IoT Security Fundamentals", 
          category: "Security Basics",
          details: "Device authentication, data encryption basics, secure communication, OTA updates, SSL/TLS"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Professional IoT Systems",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Embedded Systems & RTOS", 
          category: "Real-Time Systems",
          details: "FreeRTOS implementation, task scheduling, interrupt handling, memory optimization, power management"
        },
        { 
          step: "Step - 14", 
          topic: "Edge Computing & AI", 
          category: "Intelligent Systems",
          details: "TensorFlow Lite, edge AI processing, machine learning on IoT data, computer vision integration"
        },
        { 
          step: "Step - 15", 
          topic: "Industrial IoT (IIoT)", 
          category: "Industry 4.0",
          details: "SCADA systems, OPC-UA protocol, PLCs integration, industrial sensors, predictive maintenance"
        },
        { 
          step: "Step - 16", 
          topic: "Advanced IoT Platforms", 
          category: "Development Tools",
          details: "Node-RED visual programming, ThingsBoard platform, Grafana dashboards, Home Assistant"
        },
        { 
          step: "Step - 17", 
          topic: "Mesh Networks & Scaling", 
          category: "Network Architecture",
          details: "Zigbee mesh networks, Thread protocol, network topology design, device management at scale"
        },
        { 
          step: "Step - 18", 
          topic: "IoT DevOps & Deployment", 
          category: "Production Systems",
          details: "Docker containers, Kubernetes for edge, CI/CD pipelines, monitoring, fleet management"
        },
      ],
    },
    {
      title: "Specialization",
      subtitle: "Expert Level & 2025 Trends",
      steps: [
        { 
          step: "Step - 19", 
          topic: "5G & Next-Gen Connectivity", 
          category: "Future Networks",
          details: "5G IoT integration, network slicing, ultra-low latency applications, massive IoT deployments"
        },
        { 
          step: "Step - 20", 
          topic: "Digital Twins & Simulation", 
          category: "Virtual Systems",
          details: "Digital twin modeling, real-time simulation, predictive analytics, system optimization"
        },
        { 
          step: "Step - 21", 
          topic: "Blockchain & IoT Security", 
          category: "Advanced Security",
          details: "Distributed ledger for IoT, smart contracts, identity management, zero-trust architecture"
        },
        { 
          step: "Step - 22", 
          topic: "Sustainable IoT & Green Tech", 
          category: "Environmental Focus",
          details: "Energy harvesting, low-power design, carbon footprint optimization, sustainable manufacturing"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Smart Home Temperature Monitor" },
    { level: "Intermediate", project: "IoT Weather Station with Cloud" },
    { level: "Advanced", project: "Industrial Machine Monitoring System" },
    { level: "Specialization", project: "AI-Powered Smart City Solution" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-cyan-600',
      'bg-gradient-to-r from-green-500 to-emerald-600',
      'bg-gradient-to-r from-purple-500 to-violet-600',
      'bg-gradient-to-r from-orange-500 to-amber-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
         

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">⚡ 22 Progressive Steps • 🔧 4 Skill Levels • 🚀 Industry Ready</span>
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
            ⚡ IoT Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential IoT Tools & Technologies */}
        <section className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Essential IoT Tools & Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Development Boards</div>
              <div className="text-blue-100">Arduino, ESP32, Raspberry Pi, STM32, NodeMCU</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Programming Languages</div>
              <div className="text-blue-100">C/C++, Python, JavaScript, MicroPython</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud Platforms</div>
              <div className="text-blue-100">AWS IoT, Azure IoT, Google Cloud IoT, Firebase</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Communication</div>
              <div className="text-blue-100">MQTT, WiFi, Bluetooth, LoRa, Zigbee, 5G</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Databases</div>
              <div className="text-blue-100">InfluxDB, MongoDB, Firebase, PostgreSQL</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Visualization</div>
              <div className="text-blue-100">Grafana, ThingsBoard, Node-RED, Blynk</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">AI & ML</div>
              <div className="text-blue-100">TensorFlow Lite, Edge Impulse, OpenCV</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Security</div>
              <div className="text-blue-100">SSL/TLS, AES Encryption, PKI, Secure Boot</div>
            </div>
          </div>
        </section>

        {/* Advanced IoT Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Advanced IoT Project Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏭 Smart Factory System</h3>
              <p className="text-sm text-gray-600 mb-3">Build an IIoT system with predictive maintenance, real-time monitoring, and automated quality control.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Industrial IoT • Machine Learning • SCADA</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🌱 Smart Agriculture Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Create precision farming solution with soil monitoring, automated irrigation, and crop health AI.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Sensors • LoRa • AI Analytics</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏙️ Smart City Infrastructure</h3>
              <p className="text-sm text-gray-600 mb-3">Design connected city systems with traffic management, environmental monitoring, and energy optimization.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">5G • Edge Computing • Digital Twins</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">⚡ Energy Management System</h3>
              <p className="text-sm text-gray-600 mb-3">Develop smart grid solution with renewable energy integration, demand prediction, and load balancing.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">Smart Grid • Blockchain • Sustainability</div>
            </div>
          </div>
        </section>

        {/* Specialization Paths */}
        <section className="mt-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🎯 IoT Career Specialization Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-3 text-blue-300">🔧 Embedded IoT Engineer</h3>
              <ul className="space-y-1 text-gray-300 text-xs">
                <li>• Firmware Development</li>
                <li>• RTOS Programming</li>
                <li>• Hardware Optimization</li>
                <li>• Low-Power Design</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-3 text-green-300">☁️ IoT Cloud Engineer</h3>
              <ul className="space-y-1 text-gray-300 text-xs">
                <li>• Cloud Architecture</li>
                <li>• Data Pipelines</li>
                <li>• DevOps for IoT</li>
                <li>• Scalable Systems</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-3 text-purple-300">🤖 IoT AI Engineer</h3>
              <ul className="space-y-1 text-gray-300 text-xs">
                <li>• Edge AI Implementation</li>
                <li>• TinyML Development</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-3 text-orange-300">🏭 Industrial IoT Specialist</h3>
              <ul className="space-y-1 text-gray-300 text-xs">
                <li>• SCADA Systems</li>
                <li>• OPC-UA Protocol</li>
                <li>• PLCs Integration</li>
                <li>• Industry 4.0</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Remember: Great IoT solutions solve real problems efficiently. Focus on reliability, security, and scalability!
          </p>
        </div>
      </div>
    </main>
  );
}