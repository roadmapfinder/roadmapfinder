export const phases = [
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