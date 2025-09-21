"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Link } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const DevOpsRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "Beginner Level",
      description: "Understand the fundamentals of OS, networking, and basic scripting",
      color: "bg-gray-600",
      sections: [
        {
          title: "Computer Science & OS Basics",
          items: [
            "Linux fundamentals → File system, processes, permissions, services",
            "Package management → apt, yum, dnf for software installation",
            "System monitoring → top, htop, journalctl for system analysis",
            "Practice: Set up Linux VM and practice basic system administration"
          ]
        },
        {
          title: "Networking Basics",
          items: [
            "TCP/IP, UDP → Network protocols and packet transmission",
            "DNS, HTTP/HTTPS → Domain resolution and web protocols",
            "Ports & Firewalls → Network security and access control",
            "SSH basics → Secure remote server access and key management"
          ]
        },
        {
          title: "Scripting",
          items: [
            "Bash scripting → Automation, cron jobs, system tasks",
            "Python for automation → requests, subprocess, paramiko libraries",
            "File manipulation → Text processing, log analysis, data extraction",
            "Practice: Create automated backup and monitoring scripts"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Version Control & Collaboration",
      subtitle: "Beginner Level", 
      description: "Learn to manage code and collaborate with teams",
      color: "bg-green-500",
      sections: [
        {
          title: "Git Fundamentals",
          items: [
            "Basic operations → clone, add, commit, push, pull workflows",
            "Branching strategies → Feature branches, git-flow, GitHub flow",
            "Merging & rebasing → Conflict resolution, history management",
            "Tags & releases → Version control, semantic versioning"
          ]
        },
        {
          title: "Collaboration Platforms",
          items: [
            "GitHub → Repository management, pull requests, issues",
            "GitLab → Integrated DevOps platform, merge requests",
            "Bitbucket → Atlassian ecosystem integration, code review",
            "Best practices → Commit messages, branch protection, workflows"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "CI/CD Basics",
      subtitle: "Intermediate Level",
      description: "Learn how DevOps automates builds and deployments",
      color: "bg-blue-500",
      sections: [
        {
          title: "CI/CD Platforms",
          items: [
            "Jenkins → Pipeline as code, plugin ecosystem, distributed builds",
            "GitHub Actions → Workflow automation, marketplace actions, secrets",
            "GitLab CI → Integrated pipelines, runners, multi-stage deployments",
            "CircleCI → Cloud-native builds, parallelization, orbs"
          ]
        },
        {
          title: "Pipeline Design",
          items: [
            "Build stages → Compile, test, package, security scanning",
            "Testing automation → Unit tests, integration tests, quality gates",
            "Deployment strategies → Blue-green, canary, rolling deployments",
            "Pipeline optimization → Caching, parallelization, artifact management"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Infrastructure as Code (IaC)",
      subtitle: "Intermediate Level",
      description: "Automate infrastructure provisioning and configuration",
      color: "bg-purple-500",
      sections: [
        {
          title: "Terraform",
          items: [
            "Resource provisioning → Servers, networks, storage, cloud services",
            "State management → Remote state, locking, workspace organization",
            "Modules → Reusable infrastructure components, versioning",
            "Multi-cloud → AWS, Azure, GCP provider configurations"
          ]
        },
        {
          title: "Configuration Management",
          items: [
            "Ansible → Playbooks, roles, inventory management, idempotency",
            "Configuration drift → Detection, remediation, compliance checking",
            "Secrets management → Ansible Vault, encrypted variables",
            "Infrastructure testing → Molecule, Test Kitchen, validation"
          ]
        },
        {
          title: "Package Management",
          items: [
            "Helm → Kubernetes package manager, charts, templating",
            "Chart development → Values, templates, dependencies, hooks",
            "Repository management → Chart museums, private registries",
            "Release management → Upgrades, rollbacks, versioning strategies"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Containers & Orchestration",
      subtitle: "Advanced Level",
      description: "Master containerization and orchestration platforms",
      color: "bg-red-500",
      sections: [
        {
          title: "Docker Fundamentals",
          items: [
            "Container basics → Images, containers, Dockerfile optimization",
            "Networking → Bridge, host, overlay networks, port mapping",
            "Storage → Volumes, bind mounts, tmpfs, data persistence",
            "Multi-stage builds → Build optimization, security, layer caching"
          ]
        },
        {
          title: "Kubernetes Core",
          items: [
            "Workloads → Pods, Deployments, StatefulSets, DaemonSets, Jobs",
            "Services & Networking → ClusterIP, NodePort, LoadBalancer, Ingress",
            "Configuration → ConfigMaps, Secrets, environment variables",
            "Storage → PersistentVolumes, StorageClasses, dynamic provisioning"
          ]
        },
        {
          title: "Advanced Kubernetes",
          items: [
            "Custom Resources → CRDs, Operators, custom controllers",
            "Security → RBAC, Pod Security Standards, Network Policies",
            "Scaling → HPA, VPA, cluster autoscaling, resource management",
            "Troubleshooting → Debugging pods, log analysis, performance tuning"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Cloud Platforms",
      subtitle: "Advanced Level",
      description: "Deploy and manage workloads in major cloud providers",
      color: "bg-yellow-500",
      sections: [
        {
          title: "Amazon Web Services (AWS)",
          items: [
            "Compute → EC2, Lambda, ECS, EKS, Auto Scaling Groups",
            "Storage → S3, EBS, EFS, backup strategies, lifecycle policies",
            "Networking → VPC, subnets, security groups, load balancers",
            "Security → IAM, KMS, Secrets Manager, CloudTrail, GuardDuty"
          ]
        },
        {
          title: "Microsoft Azure",
          items: [
            "Compute → Virtual Machines, App Service, AKS, Azure Functions",
            "Storage → Blob Storage, File Shares, managed disks",
            "Networking → Virtual Networks, Azure Load Balancer, Application Gateway",
            "Security → Azure AD, Key Vault, Security Center, RBAC"
          ]
        },
        {
          title: "Google Cloud Platform (GCP)",
          items: [
            "Compute → Compute Engine, GKE, Cloud Run, Cloud Functions",
            "Storage → Cloud Storage, Persistent Disks, Cloud SQL",
            "Networking → VPC, Cloud Load Balancing, Cloud Armor",
            "Security → IAM, Cloud KMS, Security Command Center, Binary Authorization"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Monitoring & Logging",
      subtitle: "Advanced Level", 
      description: "Ensure reliability, visibility and incident response",
      color: "bg-orange-500",
      sections: [
        {
          title: "Metrics & Monitoring",
          items: [
            "Prometheus → Time-series database, PromQL, alerting rules",
            "Grafana → Dashboards, visualizations, alerting, data sources",
            "Application metrics → Custom metrics, SLIs, SLOs, error budgets",
            "Infrastructure monitoring → Node exporter, cAdvisor, blackbox monitoring"
          ]
        },
        {
          title: "Logging & Analysis",
          items: [
            "ELK Stack → Elasticsearch, Logstash, Kibana log processing",
            "OpenSearch → Open-source alternative, log aggregation, search",
            "Log management → Structured logging, log rotation, retention policies",
            "Correlation → Metrics and logs correlation, root cause analysis"
          ]
        },
        {
          title: "Distributed Tracing",
          items: [
            "OpenTelemetry → Observability framework, auto-instrumentation",
            "Jaeger → Trace collection, storage, UI, performance analysis",
            "Distributed systems → Service dependencies, latency analysis",
            "APM integration → Application performance monitoring, error tracking"
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Security & Compliance",
      subtitle: "Expert Level",
      description: "Secure CI/CD pipelines and infrastructure",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Secrets Management",
          items: [
            "HashiCorp Vault → Dynamic secrets, encryption as a service",
            "Cloud KMS → AWS KMS, Azure Key Vault, GCP Cloud KMS",
            "Kubernetes secrets → Sealed Secrets, External Secrets Operator",
            "Secret rotation → Automated rotation, zero-downtime updates"
          ]
        },
        {
          title: "DevSecOps Tools",
          items: [
            "Container scanning → Trivy, Aqua Security, Twistlock vulnerability detection",
            "Code analysis → SonarQube, Snyk, CodeQL static analysis",
            "Infrastructure scanning → Checkov, tfsec, Terraform compliance",
            "Runtime security → Falco, OPA Gatekeeper, admission controllers"
          ]
        },
        {
          title: "Kubernetes Security",
          items: [
            "RBAC → Role-based access control, service accounts, permissions",
            "Pod Security → Pod Security Standards, security contexts, capabilities",
            "Network Security → Network Policies, service mesh, traffic encryption",
            "Image security → Image signing, admission webhooks, policy enforcement"
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Advanced Topics",
      subtitle: "Expert Level",
      description: "Industry-ready advanced DevOps practices and technologies",
      color: "bg-pink-500",
      sections: [
        {
          title: "GitOps",
          items: [
            "ArgoCD → Declarative continuous delivery, application synchronization",
            "FluxCD → GitOps operator, Helm integration, multi-tenancy",
            "GitOps workflows → Pull-based deployments, configuration drift detection",
            "Multi-cluster → Cross-cluster deployments, cluster bootstrapping"
          ]
        },
        {
          title: "Service Mesh",
          items: [
            "Istio → Traffic management, security policies, observability",
            "Linkerd → Lightweight service mesh, automatic mTLS",
            "Service communication → Load balancing, circuit breakers, retries",
            "Mesh federation → Multi-cluster service mesh, cross-cluster communication"
          ]
        },
        {
          title: "Serverless & SRE",
          items: [
            "AWS Lambda → Event-driven computing, serverless architectures",
            "Azure Functions → Serverless compute, triggers, bindings",
            "GCP Cloud Functions → HTTP triggers, Pub/Sub integration",
            "SRE principles → Error budgets, toil reduction, reliability engineering"
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
                🚀 Congratulations! You're DevOps Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the DevOps Development Roadmap and are now ready to build scalable infrastructure and lead DevOps initiatives.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-300 mt-4">
                <h3 className="font-semibold text-blue-600 mb-2">🏆 Final Tips to Become Industry-Ready</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Contribute to open-source DevOps tools (Kubernetes, Terraform, Ansible)</li>
                  <li>• Build comprehensive portfolio with CI/CD, IaC, and monitoring projects</li>
                  <li>• Obtain cloud certifications (AWS, Azure, GCP) and Kubernetes certifications</li>
                  <li>• Stay updated via DevOps communities, CNCF projects, and platform documentation</li>
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
            <Link className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              DevOps <span className="text-blue-600">Development Roadmap</span>
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

export default DevOpsRoadmap;