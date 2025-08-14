import React from 'react';

export default function SystemDesignRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Computer Science Essentials", 
          category: "Data Structures & Algorithms",
          details: "Hash maps, arrays, linked lists, trees, heaps, tries, bloom filters, sorting, searching, Big-O analysis"
        },
        { 
          step: "Step - 2", 
          topic: "Networking Fundamentals", 
          category: "Network Protocols",
          details: "OSI model, TCP vs UDP, HTTP/HTTPS, HTTP/2, HTTP/3, DNS & CDNs, load balancing concepts"
        },
        { 
          step: "Step - 3", 
          topic: "Operating System Basics", 
          category: "System Fundamentals",
          details: "Processes, threads, concurrency, file systems, caching in OS (page cache, swap), memory management"
        },
        { 
          step: "Step - 4", 
          topic: "System Design Principles", 
          category: "Design Concepts",
          details: "Scalability (vertical vs horizontal), high availability, fault tolerance, latency vs throughput trade-offs"
        },
        { 
          step: "Step - 5", 
          topic: "Consistency Models", 
          category: "Data Consistency",
          details: "Strong consistency, eventual consistency, causal consistency, CAP theorem, PACELC theorem"
        },
        { 
          step: "Step - 6", 
          topic: "Architectural Patterns", 
          category: "Architecture Styles",
          details: "Monolith vs Microservices, event-driven architecture, SOA, serverless architecture patterns"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "System Components",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Load Balancing", 
          category: "Traffic Management",
          details: "Nginx, HAProxy, AWS ELB, layer 4 vs layer 7 load balancing, health checks, session affinity"
        },
        { 
          step: "Step - 8", 
          topic: "Caching Strategies", 
          category: "Performance Optimization",
          details: "Client-side (browser, CDN edge), server-side (Redis, Memcached), cache patterns and invalidation"
        },
        { 
          step: "Step - 9", 
          topic: "Database Systems", 
          category: "Data Storage",
          details: "SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Cassandra, DynamoDB), NewSQL (CockroachDB, Yugabyte)"
        },
        { 
          step: "Step - 10", 
          topic: "Message Queues", 
          category: "Asynchronous Communication",
          details: "Apache Kafka, RabbitMQ, AWS SQS, Apache Pulsar, message patterns and delivery guarantees"
        },
        { 
          step: "Step - 11", 
          topic: "Search & Analytics", 
          category: "Data Processing",
          details: "Elasticsearch, OpenSearch, full-text search, indexing strategies, query optimization"
        },
        { 
          step: "Step - 12", 
          topic: "API Gateway", 
          category: "Service Management",
          details: "Kong, AWS API Gateway, rate limiting, authentication, request/response transformation"
        },
      ],
    },
    {
      title: "Specialization",
      subtitle: "Distributed Systems",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Distributed Consensus", 
          category: "Coordination",
          details: "Paxos, Raft algorithms, leader election, distributed coordination, consensus in practice"
        },
        { 
          step: "Step - 14", 
          topic: "Data Partitioning", 
          category: "Data Distribution",
          details: "Sharding strategies, partitioning, replication patterns, data locality, consistent hashing"
        },
        { 
          step: "Step - 15", 
          topic: "Distributed Transactions", 
          category: "Data Consistency",
          details: "Two-phase commit (2PC), Saga pattern, event sourcing, CQRS, distributed transaction patterns"
        },
        { 
          step: "Step - 16", 
          topic: "Event-Driven Architecture", 
          category: "Messaging Patterns",
          details: "Event sourcing, CQRS, gossip protocols, event streaming, choreography vs orchestration"
        },
        { 
          step: "Step - 17", 
          topic: "Data Storage Solutions", 
          category: "Storage Systems",
          details: "Data warehouses (Snowflake, BigQuery, Redshift), blob storage (S3, Azure Blob), data lakes"
        },
        { 
          step: "Step - 18", 
          topic: "Observability & Monitoring", 
          category: "System Health",
          details: "Prometheus, Grafana, ELK/EFK stack, OpenTelemetry, Jaeger, PagerDuty, chaos engineering"
        },
      ],
    },
    {
      title: "Mastery",
      subtitle: "Modern Systems",
      steps: [
        { 
          step: "Step - 19", 
          topic: "Security Architecture", 
          category: "System Security",
          details: "OAuth 2.0, OpenID Connect, JWT, API rate limiting, DDoS protection, encryption at rest/transit"
        },
        { 
          step: "Step - 20", 
          topic: "Edge Computing", 
          category: "2025 Trends",
          details: "Cloudflare Workers, AWS Lambda@Edge, global distribution, edge caching, CDN architectures"
        },
        { 
          step: "Step - 21", 
          topic: "AI-Driven Systems", 
          category: "Intelligent Infrastructure",
          details: "Predictive autoscaling, anomaly detection, AI-powered monitoring, machine learning pipelines"
        },
        { 
          step: "Step - 22", 
          topic: "Modern Data Streaming", 
          category: "Real-time Processing",
          details: "Apache Flink, Spark Streaming, GraphQL Federation, API composition, real-time analytics"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "URL Shortener (Bitly clone)" },
    { level: "Advanced", project: "Instagram Feed System" },
    { level: "Specialization", project: "WhatsApp Messaging System" },
    { level: "Mastery", project: "Netflix Streaming Platform" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-green-500 to-green-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
       

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🏗️ 22 Essential Steps • 🚀 4 Skill Levels • 💼 Interview Ready</span>
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
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#06B6D4" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-purple-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-purple-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-purple-50 px-2 py-1 rounded">
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
            🏗️ System Design Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Modern Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential System Design Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Databases</div>
              <div className="text-purple-100">PostgreSQL, MongoDB, Cassandra, Redis</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Message Queues</div>
              <div className="text-purple-100">Kafka, RabbitMQ, SQS, Pulsar</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Load Balancers</div>
              <div className="text-purple-100">Nginx, HAProxy, AWS ELB, Envoy</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Caching</div>
              <div className="text-purple-100">Redis, Memcached, CDN, Browser Cache</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Search & Analytics</div>
              <div className="text-purple-100">Elasticsearch, Solr, ClickHouse</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Monitoring</div>
              <div className="text-purple-100">Prometheus, Grafana, ELK Stack</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud Platforms</div>
              <div className="text-purple-100">AWS, Azure, GCP, Kubernetes</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">API & Security</div>
              <div className="text-purple-100">Kong, OAuth 2.0, JWT, Rate Limiting</div>
            </div>
          </div>
        </section>

        {/* Additional Practice Projects */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Advanced System Design Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🚗 Ride Sharing System</h3>
              <p className="text-sm text-gray-600 mb-3">Design Uber/Lyft with real-time matching, geolocation, pricing, and payment processing.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">Geospatial • Real-time • High Scale</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📺 Video Streaming Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Build YouTube/Netflix with video encoding, CDN distribution, and recommendation engine.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">CDN • Media Processing • ML</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💬 Chat Application</h3>
              <p className="text-sm text-gray-600 mb-3">Create WhatsApp/Discord with real-time messaging, presence, and group features.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">WebSocket • Real-time • Encryption</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🔍 Search Engine</h3>
              <p className="text-sm text-gray-600 mb-3">Design Google-like search with web crawling, indexing, ranking, and query processing.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">Crawling • Indexing • Ranking</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Remember: System design is about trade-offs, scalability, and real-world constraints. Practice with real scenarios!
          </p>
        </div>
      </div>
    </main>
  );
}