import React from 'react';

export default function DevOpsRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "OS & Networking Basics", 
          category: "System Fundamentals",
          details: "Linux fundamentals, file system, permissions, package management, shell scripting (Bash, Zsh)"
        },
        { 
          step: "Step - 2", 
          topic: "Network Concepts", 
          category: "Infrastructure",
          details: "DNS, TCP/IP, HTTP/HTTPS, SSH, FTP, firewalls, process management (ps, top, kill)"
        },
        { 
          step: "Step - 3", 
          topic: "Programming/Scripting", 
          category: "Development",
          details: "Python for automation scripts and API calls, Go for cloud-native tools like Kubernetes and Terraform"
        },
        { 
          step: "Step - 4", 
          topic: "Version Control", 
          category: "Code Management",
          details: "Git basics: commit, branch, merge, rebase, GitHub/GitLab/Bitbucket workflows, GitOps basics"
        },
        { 
          step: "Step - 5", 
          topic: "Operating Systems Mastery", 
          category: "System Administration",
          details: "Deep Linux administration, Systemd services, user/group management, disk partitioning, LVM"
        },
        { 
          step: "Step - 6", 
          topic: "Networking & Security", 
          category: "Security",
          details: "Subnetting, VPNs, NAT, firewalls (iptables, ufw), SSL/TLS certificates, security hardening"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Automation & Scale",
      steps: [
        { 
          step: "Step - 7", 
          topic: "CI/CD Pipelines", 
          category: "Automation",
          details: "Jenkins, GitHub Actions, GitLab CI, CircleCI, pipelines, runners, jobs, triggers, automated testing"
        },
        { 
          step: "Step - 8", 
          topic: "Docker Containers", 
          category: "Containerization",
          details: "Images, containers, volumes, networks, multi-stage builds, Docker Compose"
        },
        { 
          step: "Step - 9", 
          topic: "Kubernetes Orchestration", 
          category: "Container Orchestration",
          details: "Pods, deployments, services, ingress, ConfigMaps, Secrets, StatefulSets, DaemonSets, Helm"
        },
        { 
          step: "Step - 10", 
          topic: "Infrastructure as Code (IaC)", 
          category: "Infrastructure",
          details: "Terraform (providers, resources, variables, modules), Pulumi, CloudFormation for AWS"
        },
        { 
          step: "Step - 11", 
          topic: "Cloud Platforms", 
          category: "Cloud Computing",
          details: "AWS (EC2, S3, RDS, Lambda, IAM, VPC, ECS/EKS), Azure, GCP fundamentals"
        },
        { 
          step: "Step - 12", 
          topic: "Monitoring & Logging", 
          category: "Observability",
          details: "Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), OpenTelemetry"
        },
        { 
          step: "Step - 13", 
          topic: "Configuration Management", 
          category: "Automation",
          details: "Ansible (idempotent automation), Chef, Puppet for server configuration and provisioning"
        },
        { 
          step: "Step - 14", 
          topic: "DevSecOps", 
          category: "Security Integration",
          details: "HashiCorp Vault, SOPS, image scanning (Trivy, Clair), dependency scanning (Snyk)"
        },
      ],
    },
    {
      title: "Specialization",
      subtitle: "Expert Level",
      steps: [
        { 
          step: "Step - 15", 
          topic: "Site Reliability Engineering", 
          category: "SRE Practices",
          details: "SLIs, SLOs, SLAs, error budgets, chaos engineering (Litmus, Gremlin), incident postmortems"
        },
        { 
          step: "Step - 16", 
          topic: "GitOps & Advanced CD", 
          category: "Modern Deployment",
          details: "ArgoCD, Flux for GitOps workflows, advanced deployment strategies"
        },
        { 
          step: "Step - 17", 
          topic: "Service Mesh", 
          category: "Microservices",
          details: "Istio, Linkerd for service-to-service communication, traffic management, security"
        },
        { 
          step: "Step - 18", 
          topic: "Serverless DevOps", 
          category: "Serverless",
          details: "AWS Lambda, Azure Functions, serverless deployment patterns, edge computing"
        },
        { 
          step: "Step - 19", 
          topic: "AI in DevOps", 
          category: "AI Integration",
          details: "Predictive scaling, anomaly detection with AI tools, intelligent monitoring and alerting"
        },
      ],
    },
    {
      title: "Professional",
      subtitle: "Career Excellence",
      steps: [
        { 
          step: "Step - 20", 
          topic: "Real-World Projects", 
          category: "Hands-on Experience",
          details: "CI/CD with GitHub Actions + K8s, Terraform AWS infrastructure, monitoring dashboards"
        },
        { 
          step: "Step - 21", 
          topic: "Portfolio & Documentation", 
          category: "Professional Growth",
          details: "Document projects, create technical blogs, contribute to open source, build expertise reputation"
        },
        { 
          step: "Step - 22", 
          topic: "Team Leadership & Culture", 
          category: "Leadership Skills",
          details: "DevOps culture advocacy, cross-functional collaboration, mentoring, incident management"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Linux Server Setup & Automation" },
    { level: "Advanced", project: "Full CI/CD Pipeline with K8s" },
    { level: "Specialization", project: "Multi-Cloud Infrastructure with GitOps" },
    { level: "Professional", project: "Complete SRE Implementation" },
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
              <span className="text-sm font-medium text-gray-700">🛠️ 22 Essential Steps • ☁️ 4 Skill Levels • 🎯 Industry Ready</span>
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
            🛠️ Suggested Projects for Each Level
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

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🔧 Essential DevOps Tools & Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud Platforms</div>
              <div className="text-purple-100">AWS, Azure, GCP, Digital Ocean</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Container Tools</div>
              <div className="text-purple-100">Docker, Kubernetes, Helm, Rancher</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">CI/CD Tools</div>
              <div className="text-purple-100">Jenkins, GitHub Actions, GitLab CI</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Monitoring</div>
              <div className="text-purple-100">Prometheus, Grafana, ELK Stack</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Infrastructure</div>
              <div className="text-purple-100">Terraform, Ansible, Pulumi</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Version Control</div>
              <div className="text-purple-100">Git, GitHub, GitLab, Bitbucket</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Security</div>
              <div className="text-purple-100">HashiCorp Vault, Snyk, Trivy</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Learning</div>
              <div className="text-purple-100">A Cloud Guru, Linux Academy, Udemy</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Remember: DevOps is about culture, automation, measurement, and sharing. Start with the fundamentals and build up!
          </p>
        </div>
      </div>
    </main>
  );
}