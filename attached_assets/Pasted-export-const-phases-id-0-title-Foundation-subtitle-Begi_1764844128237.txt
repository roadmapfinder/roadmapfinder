export const phases = [
  {
    id: 0,
    title: "Foundation",
    subtitle: "Beginner Level",
    description: "Lock the basics before diving into AWS.",
    color: "bg-gray-500",
    sections: [
      {
        title: "🐧 Linux & System Basics",
        items: [
          "Linux shell commands (SSH, user management, systemd)",
          "File permissions and process management",
          "Basic scripting and automation",
          "System monitoring and troubleshooting"
        ]
      },
      {
        title: "🌐 Networking Fundamentals",
        items: [
          "IP addressing and subnetting",
          "DNS, ports, and protocols",
          "TCP/IP model and OSI layers",
          "Basic security concepts"
        ]
      },
      {
        title: "💻 Developer Essentials",
        items: [
          "Git + GitHub version control",
          "Python programming basics",
          "Basic CI/CD concepts",
          "Understanding cloud terminology"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Core AWS Services",
    subtitle: "Intermediate Level",
    description: "Essential building blocks every employer expects.",
    color: "bg-blue-500",
    sections: [
      {
        title: "⚡ Compute",
        items: [
          "EC2 (instances, AMI, autoscaling, load balancers)",
          "Lambda (serverless basics, triggers)",
          "Elastic Beanstalk basics",
          "Instance types and pricing models"
        ]
      },
      {
        title: "🌐 Networking",
        items: [
          "VPC (subnets, route tables, NAT, peering, Transit Gateway)",
          "Security Groups & NACLs",
          "VPN connectivity & Direct Connect basics",
          "DNS with Route 53"
        ]
      },
      {
        title: "💾 Storage & Databases",
        items: [
          "S3 (storage classes, lifecycle rules, versioning)",
          "EBS vs EFS",
          "RDS & Aurora",
          "Backup and disaster recovery strategies"
        ]
      },
      {
        title: "🔒 IAM & Security",
        items: [
          "IAM Users/Roles/Policies/STS",
          "AWS Organizations",
          "Secrets Manager & KMS",
          "MFA and access management best practices"
        ]
      },
      {
        title: "🚀 Core AWS Projects",
        items: [
          "✅ Deploy WordPress with EC2 + RDS + S3 backup",
          "✅ Host static website on S3 + CloudFront + Route53",
          "Build production-ready 3-tier app architecture",
          "Implement basic monitoring and alerts"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Industry Ops Skills: DevOps + Automation",
    subtitle: "Advanced Level",
    description: "Where 90% of demand is - become hireable.",
    color: "bg-green-500",
    sections: [
      {
        title: "🏗️ Infrastructure as Code",
        items: [
          "Terraform (MOST in demand) - modules, state management",
          "CloudFormation (good to know)",
          "IaC best practices and version control",
          "Multi-environment deployment strategies"
        ]
      },
      {
        title: "🔄 CI/CD",
        items: [
          "AWS CodePipeline, CodeBuild, CodeDeploy",
          "GitHub Actions (bonus)",
          "Blue-Green and Canary deployments",
          "Automated testing in pipelines"
        ]
      },
      {
        title: "🐳 Containers",
        items: [
          "Docker fundamentals and Dockerfile optimization",
          "ECS Fargate architecture",
          "EKS (Kubernetes on AWS)",
          "Container orchestration patterns"
        ]
      },
      {
        title: "📊 Monitoring",
        items: [
          "CloudWatch metrics, logs, and dashboards",
          "CloudWatch Alarms and SNS notifications",
          "X-Ray for distributed tracing",
          "Log aggregation and analysis"
        ]
      },
      {
        title: "🎯 DevOps Projects",
        items: [
          "✅ Build microservices on ECS Fargate with CI/CD",
          "✅ Terraform workspace deploying VPC + EC2 + RDS end-to-end",
          "Implement complete monitoring solution",
          "Set up multi-stage deployment pipeline"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced & Production Architecture",
    subtitle: "Advanced Level",
    description: "Design scalable and secure system diagrams.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🏢 Enterprise Architecture",
        items: [
          "AWS Well-Architected Framework (5 pillars)",
          "High Availability vs Fault Tolerance",
          "Scalability patterns and auto-scaling strategies",
          "Cost optimization and FinOps practices"
        ]
      },
      {
        title: "🌐 Advanced Networking",
        items: [
          "VPC Endpoint, PrivateLink",
          "NLB, ALB advanced configurations",
          "Multi-account architecture and AWS Control Tower",
          "Hybrid cloud networking patterns"
        ]
      },
      {
        title: "🔐 Security Deep Dive",
        items: [
          "Zero Trust security model",
          "AWS Security Hub, GuardDuty, WAF, Shield",
          "Compliance frameworks (SOC2, HIPAA, PCI-DSS)",
          "Incident response and forensics"
        ]
      },
      {
        title: "⚡ Serverless Mastery",
        items: [
          "EventBridge event-driven patterns",
          "API Gateway advanced features",
          "DynamoDB single table design",
          "Lambda optimization and best practices"
        ]
      },
      {
        title: "🚀 Advanced Projects",
        items: [
          "✅ Event-driven Serverless App: Lambda + S3 + DynamoDB + API Gateway + Cognito",
          "Multi-region disaster recovery system",
          "Complete security audit and remediation",
          "Cost optimization case study"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Specialization Track",
    subtitle: "Expert Level",
    description: "Pick your path - this gets you the high salary.",
    color: "bg-orange-500",
    sections: [
      {
        title: "☁️ Cloud / DevOps Engineer",
        items: [
          "EKS advanced deployments",
          "GitOps with ArgoCD",
          "Advanced CI/CD automation",
          "Blue-Green and Canary deployment strategies"
        ]
      },
      {
        title: "🔒 Security Engineer",
        items: [
          "IAM advanced policies and SCPs",
          "KMS encryption and key management",
          "CloudTrail, GuardDuty, SOAR",
          "Security automation and compliance"
        ]
      },
      {
        title: "📊 Data Engineer",
        items: [
          "AWS Glue ETL pipelines",
          "Redshift data warehousing",
          "EMR big data processing",
          "Kinesis real-time streaming, Athena queries"
        ]
      },
      {
        title: "🤖 Machine Learning Engineer",
        items: [
          "SageMaker model training and deployment",
          "Feature Store and ML pipelines",
          "MLOps best practices",
          "Model monitoring and optimization"
        ]
      },
      {
        title: "🏗️ Solutions Architect",
        items: [
          "Multi-cloud architecture design",
          "Hybrid networking solutions",
          "Disaster recovery planning",
          "Enterprise migration strategies"
        ]
      }
    ]
  }
];