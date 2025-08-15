import React from 'react';

export default function CloudRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Prerequisites & Core Skills",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Networking & Internet Basics", 
          category: "Network Fundamentals",
          details: "Master IP addressing (IPv4, IPv6), DNS, DHCP, NAT protocols. Understand HTTP/HTTPS, load balancing concepts, VPNs & firewall configurations for cloud connectivity"
        },
        { 
          step: "Step - 2", 
          topic: "Operating Systems & Linux", 
          category: "System Administration",
          details: "Linux mastery (Ubuntu, CentOS, Amazon Linux), command-line proficiency, bash scripting, file permissions, process management, and system monitoring"
        },
        { 
          step: "Step - 3", 
          topic: "Programming for Cloud", 
          category: "Development Skills",
          details: "Python for automation & scripting, JavaScript/Node.js for APIs, Go or Java for backend services. Focus on cloud SDK integration and API interactions"
        },
      ],
    },
    {
      title: "Cloud Core",
      subtitle: "Fundamental Concepts & Services",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Cloud Computing Models", 
          category: "Cloud Fundamentals",
          details: "Understand Public, Private, Hybrid, Multi-cloud strategies. Master IaaS, PaaS, SaaS service models. Compare AWS, Azure, GCP major cloud providers"
        },
        { 
          step: "Step - 5", 
          topic: "Compute Services", 
          category: "Virtual Infrastructure",
          details: "AWS EC2, Azure VMs, GCP Compute Engine. Auto-scaling, load balancers, serverless computing (Lambda, Azure Functions, Cloud Functions)"
        },
        { 
          step: "Step - 6", 
          topic: "Storage & Databases", 
          category: "Data Management",
          details: "Object storage (S3, Blob, Cloud Storage), block & file storage. Managed databases: RDS, DynamoDB, Azure SQL, Cloud SQL, BigQuery, Redshift"
        },
        { 
          step: "Step - 7", 
          topic: "Cloud Networking", 
          category: "Network Architecture",
          details: "VPC setup, subnets, route tables, gateways. VPC peering, transit gateways, CDN implementation (CloudFront, Azure CDN, Cloud CDN)"
        },
      ],
    },
    {
      title: "Security",
      subtitle: "Identity & Protection",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Identity & Access Management", 
          category: "Cloud Security",
          details: "IAM policies, role-based access control (RBAC), multi-factor authentication, identity federation, least privilege principles"
        },
        { 
          step: "Step - 9", 
          topic: "Encryption & Key Management", 
          category: "Data Protection",
          details: "Encryption at rest and in transit, Key Management Systems (KMS), certificate management, secrets management, zero trust architecture"
        },
        { 
          step: "Step - 10", 
          topic: "Cloud Security Posture", 
          category: "Security Governance",
          details: "Cloud Security Posture Management (CSPM), compliance frameworks, security monitoring, threat detection, incident response planning"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "DevOps & Modern Architecture",
      steps: [
        { 
          step: "Step - 11", 
          topic: "Infrastructure as Code", 
          category: "Automation",
          details: "Terraform mastery, AWS CloudFormation, Azure ARM templates. Version control for infrastructure, CI/CD for IaC, drift detection and remediation"
        },
        { 
          step: "Step - 12", 
          topic: "Containers & Orchestration", 
          category: "Container Platform",
          details: "Docker fundamentals, Kubernetes (EKS, AKS, GKE), service mesh (Istio, Linkerd), container registries, microservices architecture"
        },
        { 
          step: "Step - 13", 
          topic: "Monitoring & Observability", 
          category: "Operations",
          details: "CloudWatch, Azure Monitor, GCP Operations Suite. Logging strategies, alerting, distributed tracing, SLA/SLO management, incident response"
        },
        { 
          step: "Step - 14", 
          topic: "CI/CD & DevOps", 
          category: "Development Pipeline",
          details: "GitHub Actions, GitLab CI, AWS CodePipeline, Azure DevOps. Automated testing, deployment strategies, blue-green deployments, canary releases"
        },
        { 
          step: "Step - 15", 
          topic: "Modern Cloud Technologies", 
          category: "2025 Innovations",
          details: "Multi-cloud architectures, AI in Cloud (Bedrock, Azure AI, Vertex AI), Edge Computing, FinOps cost optimization, disaster recovery automation"
        },
      ],
    },
  ];

  const certificationSuggestions = [
    { level: "Entry Level", certs: "AWS Cloud Practitioner, Azure AZ-900, GCP Associate" },
    { level: "Associate", certs: "AWS Solutions Architect Associate, Azure AZ-104, GCP ACE" },
    { level: "Professional", certs: "AWS Solutions Architect Professional, Azure AZ-400, GCP Professional" },
    { level: "Specialty", certs: "AWS DevOps Engineer Professional, Azure Security Engineer" },
  ];

  const practiceResources = [
    { category: "Hands-on Labs", resources: "AWS Well-Architected Labs, Azure Labs, GCP Qwiklabs" },
    { category: "Cloud Sandboxes", resources: "AWS Free Tier, Azure Free Account, GCP Free Credits" },
    { category: "Learning Platforms", resources: "A Cloud Guru, Cloud Academy, Linux Academy, Pluralsight" },
    { category: "Communities", resources: "AWS re:Post, Azure Community, GCP Community, Reddit r/aws" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-purple-500 to-purple-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-[#ffffff] via-white to-[#f3f3f3] min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
          
          </div>
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">☁️ 15 Essential Steps • 🎯 4 Core Areas • 🏆 Industry Ready</span>
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

        {/* Certifications Section */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🏆 Cloud Certifications by Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.certs}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Resources Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            💻 Cloud Practice Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {practiceResources.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.category}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.resources}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">☁️ Major Cloud Platforms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🟠 Amazon Web Services</div>
              <div className="text-blue-100">EC2, S3, Lambda, RDS, VPC, CloudFormation, EKS</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🔵 Microsoft Azure</div>
              <div className="text-blue-100">VMs, Blob Storage, Functions, SQL Database, ARM, AKS</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🟡 Google Cloud Platform</div>
              <div className="text-blue-100">Compute Engine, Cloud Storage, Cloud Functions, GKE</div>
            </div>
          </div>
        </section>

        {/* Career Path Section */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Cloud Career Paths</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">☁️ Cloud Engineer</div>
              <div className="text-sm text-gray-600">Cloud Infrastructure Engineer, Platform Engineer, Site Reliability Engineer (SRE)</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🏗️ Cloud Architect</div>
              <div className="text-sm text-gray-600">Solutions Architect, Cloud Architect, Technical Architect, Principal Engineer</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">🔐 Cloud Security</div>
              <div className="text-sm text-gray-600">Cloud Security Engineer, DevSecOps Engineer, Compliance Specialist</div>
            </div>
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section className="mt-12 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🚀 Cloud Portfolio Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">🌐 Infrastructure Projects</div>
              <div className="text-sm text-gray-600">Static website with S3 + CloudFront + Route53, Serverless REST API with Lambda + DynamoDB, Multi-tier web application</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-pink-600 mb-2">🏗️ Advanced Architecture</div>
              <div className="text-sm text-gray-600">Kubernetes app deployment on EKS/GKE, Multi-region disaster recovery, Data analytics pipeline with BigQuery/Redshift</div>
            </div>
          </div>
        </section>

        {/* Modern Cloud Technologies Section */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🔮 Emerging Cloud Technologies 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🤖 AI/ML in Cloud</div>
              <div className="text-sm text-gray-600">AWS Bedrock, Azure OpenAI, Vertex AI, Machine Learning Ops</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🌐 Edge Computing</div>
              <div className="text-sm text-gray-600">AWS Outposts, Azure Stack, GCP Edge, IoT integration</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">💰 FinOps & Optimization</div>
              <div className="text-sm text-gray-600">Cost optimization, Cloud financial management, Resource rightsizing</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ☁️ Remember: Cloud engineering is about building scalable, resilient, and cost-effective infrastructure. Focus on hands-on practice, understand business value, and always think about security and compliance!
          </p>
        </div>
      </div>
    </main>
  );
}