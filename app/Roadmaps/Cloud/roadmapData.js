export const phases = [
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