"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const CloudEngineeringRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "0–3 months",
      description: "Understand cloud concepts, basics of infrastructure, networking, and programming",
      color: "bg-green-500",
      sections: [
        {
          title: "Core Concepts",
          items: [
            "Cloud basics: IaaS, PaaS, SaaS",
            "Deployment models: Public, Private, Hybrid, Multi-cloud",
            "Cloud providers overview: AWS, Azure, GCP",
            "Networking basics: IP, DNS, Subnet, VPN, Firewall",
            "Virtualization and Containers: VMs, Docker basics"
          ]
        },
        {
          title: "Programming/Scripting",
          items: [
            "Python fundamentals for automation",
            "Bash scripting for system administration",
            "Linux basics (CLI, file management, permissions)",
            "Git & GitHub for version control"
          ]
        },
        {
          title: "Tools to Learn",
          items: [
            "Docker containers and containerization",
            "AWS Free Tier for hands-on practice",
            "Azure/GCP equivalent services",
            "Basic command-line tools and utilities"
          ]
        },
        {
          title: "Foundation Projects",
          items: [
            "Deploy a static website on AWS S3 or Azure Blob Storage",
            "Launch a basic VM and install a web server (Apache/Nginx)",
            "Build a small containerized Python app with Docker",
            "Create basic automation scripts"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Core Cloud Engineering",
      subtitle: "3–6 months",
      description: "Learn to deploy and manage infrastructure, networking, and storage in the cloud",
      color: "bg-yellow-500",
      sections: [
        {
          title: "Compute Services",
          items: [
            "EC2 instances and configurations",
            "Azure Virtual Machines management",
            "GCP Compute Engine optimization",
            "Auto-scaling and load balancing"
          ]
        },
        {
          title: "Storage & Databases",
          items: [
            "S3, Azure Blob, GCP Cloud Storage",
            "RDS, DynamoDB, Cloud SQL setup",
            "Database backup and recovery strategies",
            "Storage optimization and cost management"
          ]
        },
        {
          title: "Networking & Security",
          items: [
            "VPC, Subnets, Security Groups configuration",
            "Load Balancers and CDN implementation",
            "IAM basics: Users, Roles, Policies",
            "Basic security best practices"
          ]
        },
        {
          title: "Infrastructure as Code",
          items: [
            "Terraform fundamentals and best practices",
            "CloudFormation templates",
            "Docker advanced: multi-container applications",
            "Kubernetes basics (EKS/GKE/AKS)"
          ]
        },
        {
          title: "Intermediate Projects",
          items: [
            "Multi-tier web application with database and load balancer",
            "Deploy Dockerized microservice on AWS ECS or Azure App Service",
            "Create IaC scripts to automate VM + Networking deployment",
            "Set up Cloud monitoring and alerts (CloudWatch, Azure Monitor)"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Advanced Cloud Engineering",
      subtitle: "6–12 months",
      description: "Manage large-scale production systems, automation, and high availability",
      color: "bg-orange-500",
      sections: [
        {
          title: "Container Orchestration",
          items: [
            "Kubernetes production deployments",
            "Helm charts and package management",
            "Service mesh implementation",
            "Container security and best practices"
          ]
        },
        {
          title: "CI/CD & DevOps",
          items: [
            "GitHub Actions workflow automation",
            "Jenkins pipeline configuration",
            "GitLab CI/CD implementation",
            "Automated testing and deployment strategies"
          ]
        },
        {
          title: "Serverless Architecture",
          items: [
            "AWS Lambda functions and triggers",
            "Azure Functions development",
            "Google Cloud Functions implementation",
            "Event-driven architecture patterns"
          ]
        },
        {
          title: "Monitoring & Security",
          items: [
            "Prometheus and Grafana setup",
            "ELK stack for logging",
            "Advanced IAM policies and KMS",
            "Secrets management and encryption"
          ]
        },
        {
          title: "Advanced Projects",
          items: [
            "Build fully automated CI/CD pipeline for microservices",
            "Deploy Kubernetes cluster with auto-scaling and ingress",
            "Implement serverless event-driven architecture",
            "Set up multi-region high availability with failover",
            "Monitor infrastructure with Prometheus + Grafana"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Industry-Ready Specializations",
      subtitle: "12+ months",
      description: "Become a versatile cloud engineer with domain expertise",
      color: "bg-blue-500",
      sections: [
        {
          title: "Cloud DevOps Engineer",
          items: [
            "Advanced CI/CD pipeline optimization",
            "Infrastructure automation at scale",
            "Performance monitoring and optimization",
            "Incident response and troubleshooting"
          ]
        },
        {
          title: "Cloud Security Engineer",
          items: [
            "Advanced IAM and access management",
            "Security compliance and auditing",
            "Penetration testing methodologies",
            "Web Application Firewall (WAF) configuration"
          ]
        },
        {
          title: "Cloud Data Engineer",
          items: [
            "BigQuery, Redshift, Snowflake implementation",
            "Data pipeline architecture and ETL processes",
            "Real-time data processing systems",
            "Data governance and security"
          ]
        },
        {
          title: "Solutions Architect",
          items: [
            "High-scale architecture design",
            "Cost optimization strategies",
            "Multi-cloud deployment patterns",
            "Disaster recovery planning"
          ]
        },
        {
          title: "Industry-Level Projects",
          items: [
            "Deploy microservices across multi-cloud with IaC",
            "Implement secure, scalable cloud data warehouse",
            "Disaster recovery setup with automated backups",
            "End-to-end DevOps: code → test → deploy → monitor",
            "Cost-optimized production environment"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Advanced Skills & Emerging Technologies",
      subtitle: "Future-proofing",
      description: "Stay ahead with cutting-edge cloud technologies and practices",
      color: "bg-purple-500",
      sections: [
        {
          title: "Multi-Cloud Management",
          items: [
            "Terraform for multi-cloud deployments",
            "Crossplane for cloud-native infrastructure",
            "Cloud-agnostic architecture patterns",
            "Hybrid cloud integration strategies"
          ]
        },
        {
          title: "AI/ML on Cloud",
          items: [
            "AWS SageMaker for machine learning",
            "Google Vertex AI platform",
            "Azure Machine Learning services",
            "MLOps pipeline implementation"
          ]
        },
        {
          title: "Edge Computing & IoT",
          items: [
            "Edge computing architectures",
            "IoT cloud integration patterns",
            "Content delivery optimization",
            "Real-time data processing at edge"
          ]
        },
        {
          title: "Cloud-Native Technologies",
          items: [
            "Service mesh (Istio, Linkerd)",
            "API gateways and management",
            "Event streaming platforms",
            "Observability and distributed tracing"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Professional Development & Soft Skills",
      subtitle: "Throughout Journey",
      description: "Essential skills for career growth and industry success",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Technical Leadership",
          items: [
            "Architecture decision making",
            "Technical documentation and communication",
            "Mentoring and knowledge sharing",
            "Cross-functional collaboration"
          ]
        },
        {
          title: "Business Skills",
          items: [
            "Cloud cost optimization and budgeting",
            "ROI analysis for cloud investments",
            "Vendor management and negotiations",
            "Risk assessment and mitigation"
          ]
        },
        {
          title: "Operational Excellence",
          items: [
            "Incident management and SRE practices",
            "Change management processes",
            "Capacity planning and forecasting",
            "Performance tuning and optimization"
          ]
        },
        {
          title: "Certifications",
          items: [
            "AWS Solutions Architect Professional",
            "Azure Solutions Architect Expert (AZ-305)",
            "Google Professional Cloud Architect",
            "Certified Kubernetes Administrator (CKA)",
            "DevOps and Security certifications"
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
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                ☁️ Congratulations! You're a Cloud Engineering Expert!
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                You've mastered the complete Cloud Engineering stack and are ready to architect, deploy, and manage enterprise-scale cloud solutions.
              </p>
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
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Cloud Engineering <span className="text-blue-600">Mastery Roadmap 2025</span>
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
                  ? 'bg-blue-500 text-white'
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

export default CloudEngineeringRoadmap;