"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Cpu } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const SystemDesignRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Fundamentals",
      subtitle: "Beginner Level",
      description: "Build a strong foundation in computer science and system basics",
      color: "bg-gray-600",
      sections: [
        {
          title: "Computer Science Basics",
          items: [
            "Data Structures & Algorithms → Arrays, Linked Lists, Trees, Graphs, Sorting, Searching",
            "Complexity Analysis → Big O, Big Θ, Big Ω notations and analysis",
            "Algorithm Design → Divide & Conquer, Dynamic Programming, Greedy algorithms",
            "Practice: Solve 150+ LeetCode problems focusing on system design patterns"
          ]
        },
        {
          title: "Networking Basics",
          items: [
            "OSI Model → 7-layer model, TCP vs UDP protocols",
            "HTTP/HTTPS → REST basics, status codes, headers, caching",
            "DNS, CDN → Domain resolution, content delivery networks",
            "Load Balancers → Round-robin, weighted, least connections algorithms"
          ]
        },
        {
          title: "Operating Systems",
          items: [
            "Process vs Thread → Concurrency, parallelism, synchronization",
            "CPU Scheduling → FIFO, Round Robin, Priority scheduling",
            "Memory Management → Virtual memory, paging, segmentation",
            "File Systems → NTFS, ext4, distributed file systems basics"
          ]
        },
        {
          title: "Databases (Basics)",
          items: [
            "Relational Databases → SQL, normalization, ACID properties",
            "NoSQL Introduction → Document, Key-Value, Columnar, Graph databases",
            "Database Design → ER diagrams, schema design, indexing basics",
            "Practice: Design schemas for e-commerce, social media applications"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Core System Design",
      subtitle: "Intermediate Level",
      description: "Learn to design scalable, reliable, and maintainable systems",
      color: "bg-blue-500",
      sections: [
        {
          title: "System Design Basics",
          items: [
            "Latency vs Throughput → Performance metrics, optimization trade-offs",
            "Vertical vs Horizontal Scaling → Scale-up vs scale-out strategies",
            "Load Balancing & Caching → Distribution strategies, cache patterns",
            "Stateless vs Stateful → Session management, scalability implications"
          ]
        },
        {
          title: "Databases (Advanced)",
          items: [
            "Indexing → B-trees, hash indexes, composite indexes, query optimization",
            "Sharding → Horizontal partitioning, shard keys, rebalancing",
            "Replication → Master-slave, master-master, eventual consistency",
            "CAP Theorem → Consistency, Availability, Partition tolerance trade-offs"
          ]
        },
        {
          title: "APIs & Communication",
          items: [
            "REST APIs → HTTP methods, status codes, resource design",
            "GraphQL → Schema design, resolvers, N+1 problem solutions",
            "gRPC → Protocol Buffers, streaming, service mesh integration",
            "Message Queues → Kafka, RabbitMQ, SQS, pub/sub patterns"
          ]
        },
        {
          title: "Storage Systems",
          items: [
            "Blob Storage → S3, GCS, Azure Blob, object storage patterns",
            "File Systems → Distributed file systems, HDFS, Ceph",
            "Data Warehousing → OLTP vs OLAP, ETL processes, data lakes",
            "Backup & Recovery → Point-in-time recovery, disaster recovery planning"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Distributed Systems & Scalability",
      subtitle: "Advanced Level",
      description: "Dive deep into large-scale distributed systems architecture",
      color: "bg-green-500",
      sections: [
        {
          title: "Scalability & Reliability",
          items: [
            "Replication → Synchronous vs asynchronous, conflict resolution",
            "Partitioning → Range-based, hash-based, directory-based partitioning",
            "Leader Election → Raft, Paxos, ZooKeeper coordination",
            "Consistent Hashing → Ring topology, virtual nodes, load distribution"
          ]
        },
        {
          title: "Caching Strategies",
          items: [
            "Client-side Caching → Browser cache, mobile app caching",
            "CDN → Geographic distribution, edge computing, cache invalidation",
            "Reverse Proxy → Varnish, Nginx, load balancing with caching",
            "Cache Patterns → Write-through, write-around, write-back strategies"
          ]
        },
        {
          title: "Search & Indexing",
          items: [
            "Inverted Index → Full-text search, tokenization, scoring algorithms",
            "Elasticsearch → Document storage, aggregations, cluster management",
            "Ranking Algorithms → TF-IDF, PageRank, machine learning ranking",
            "Query Optimization → Index selection, query planning, performance tuning"
          ]
        },
        {
          title: "Observability",
          items: [
            "Logging → ELK stack, Fluentd, structured logging, log aggregation",
            "Monitoring → Prometheus, Grafana, metrics collection, alerting",
            "Distributed Tracing → Jaeger, OpenTelemetry, span correlation",
            "APM → Application performance monitoring, error tracking, profiling"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Industry-Level Mastery",
      subtitle: "Advanced Level",
      description: "Build production-grade, FAANG-scale system design expertise",
      color: "bg-purple-500",
      sections: [
        {
          title: "High-Performance Architectures",
          items: [
            "Microservices → Service decomposition, API gateways, service mesh",
            "Event-driven Architecture → Event sourcing, CQRS, saga patterns",
            "Serverless → AWS Lambda, Azure Functions, cold starts, scaling",
            "Monolith vs Microservices → Migration strategies, trade-offs analysis"
          ]
        },
        {
          title: "Cloud & DevOps",
          items: [
            "Kubernetes → Orchestration, pods, services, ingress, autoscaling",
            "Docker → Containerization, multi-stage builds, registry management",
            "Service Mesh → Istio, Linkerd, traffic management, security policies",
            "Infrastructure as Code → Terraform, CloudFormation, Ansible automation"
          ]
        },
        {
          title: "Security in System Design",
          items: [
            "Authentication & Authorization → OAuth2, JWT, OpenID Connect, RBAC",
            "Encryption → TLS, HTTPS, encryption at rest vs in transit",
            "API Security → Rate limiting, API keys, throttling, DDoS protection",
            "Security Patterns → Zero-trust architecture, defense in depth"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Case Studies & Real-World Systems",
      subtitle: "Expert Level",
      description: "Master FAANG-style system design through real-world examples",
      color: "bg-red-500",
      sections: [
        {
          title: "Social Media Systems",
          items: [
            "Twitter Feed → Timeline generation, fan-out strategies, caching layers",
            "Instagram → Image storage, CDN optimization, recommendation algorithms",
            "LinkedIn → Professional networking, graph databases, search indexing",
            "TikTok → Video processing, real-time recommendations, global distribution"
          ]
        },
        {
          title: "Media & Content Systems",
          items: [
            "YouTube → Video transcoding, storage optimization, global CDN",
            "Netflix → Content recommendation, A/B testing, adaptive streaming",
            "Spotify → Music streaming, playlist algorithms, real-time analytics",
            "Zoom → Real-time video, WebRTC, load balancing, quality adaptation"
          ]
        },
        {
          title: "E-commerce & Marketplace",
          items: [
            "Amazon → Product catalog, inventory management, order processing",
            "Uber → Real-time matching, location services, pricing algorithms",
            "Airbnb → Search & filtering, booking system, payment processing",
            "DoorDash → Restaurant management, delivery optimization, real-time tracking"
          ]
        },
        {
          title: "Communication Systems",
          items: [
            "WhatsApp → Message delivery, end-to-end encryption, presence system",
            "Slack → Real-time messaging, file sharing, notification system",
            "Discord → Voice chat, gaming integration, server management",
            "Email System → SMTP, spam filtering, attachment handling, scalability"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Continuous Growth",
      subtitle: "Expert Level",
      description: "Keep updated with latest trends, research, and emerging technologies",
      color: "bg-orange-500",
      sections: [
        {
          title: "Research Papers & Innovation",
          items: [
            "Google Papers → Spanner, MapReduce, Bigtable, Borg distributed systems",
            "Amazon Papers → DynamoDB, Aurora, S3 architecture and design decisions",
            "Facebook Papers → TAO, Cassandra, React architecture patterns",
            "Microsoft Papers → Orleans, Service Fabric, distributed computing research"
          ]
        },
        {
          title: "Emerging Technologies",
          items: [
            "Edge Computing → 5G networks, IoT systems, latency optimization",
            "Machine Learning Systems → MLOps, model serving, A/B testing for ML",
            "Blockchain → Distributed ledgers, consensus mechanisms, smart contracts",
            "Quantum Computing → Future implications for distributed systems"
          ]
        },
        {
          title: "Interview Preparation",
          items: [
            "Mock Interviews → Practice 45-60 minute system design sessions",
            "Whiteboard Skills → Clear communication, structured thinking, trade-offs",
            "Company-specific → Google, Meta, Amazon, Netflix interview formats",
            "Behavioral Questions → Leadership principles, problem-solving approach"
          ]
        },
        {
          title: "Community & Learning",
          items: [
            "Tech Blogs → High Scalability, Engineering blogs of major companies",
            "Conferences → QCon, Strange Loop, Velocity, distributed systems conferences",
            "Open Source → Contribute to distributed systems projects, Kubernetes",
            "Mentorship → Share knowledge, teach others, build engineering community"
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
                            className="bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
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
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🚀 Congratulations! You're System Design Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the System Design Engineering Mastery Roadmap and are now ready to design large-scale distributed systems and ace FAANG interviews.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-300 mt-4">
                <h3 className="font-semibold text-blue-600 mb-2">🏆 Final Tips to Become Industry-Ready</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Practice system design interviews with peers and mentors regularly</li>
                  <li>• Read engineering blogs from Google, Meta, Amazon, Netflix, Uber</li>
                  <li>• Build personal projects demonstrating distributed systems concepts</li>
                  <li>• Stay updated with Papers We Love and distributed systems research</li>
                  <li>• Contribute to open-source distributed systems projects</li>
                </ul>
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
            <Cpu className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              System Design <span className="text-blue-600">Engineering Mastery</span>
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
            className="md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
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
                  ? 'bg-blue-600 text-white'
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
                  ? 'bg-blue-500 text-white'
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
                  ? 'bg-blue-500 text-white'
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

export default SystemDesignRoadmap;