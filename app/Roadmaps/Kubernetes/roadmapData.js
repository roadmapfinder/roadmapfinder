export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Non-negotiable Foundation",
    description: "If you skip this, Kubernetes will destroy you later.",
    color: "bg-slate-500",
    sections: [
      {
        title: "🐧 Linux (Must be practical)",
        items: [
          "Read logs: journalctl, /var/log",
          "Networking: ip a, ss, netstat, iptables",
          "Processes: ps, top, htop, signals",
          "Filesystems & permissions",
          "Bash scripting (loops, env vars)"
        ]
      },
      {
        title: "🌐 Networking Fundamentals (Critical)",
        items: [
          "TCP/IP, DNS, HTTP/HTTPS",
          "Load balancers (L4 vs L7)",
          "NAT, CIDR, subnets",
          "Proxies & reverse proxies",
          "TLS, certificates"
        ]
      },
      {
        title: "🐳 Containers & Docker (Deep, not surface)",
        items: [
          "Write optimized multi-stage Dockerfiles",
          "Understand image layers & caching",
          "Debug container crashes",
          "ENTRYPOINT vs CMD, EXPOSE, Volumes",
          "Security basics (non-root containers)",
          "Build 5+ production-grade images",
          "Break them intentionally and fix them"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Kubernetes Core Fundamentals",
    subtitle: "Beginner Level",
    description: "Now you're ready. Learn how Kubernetes actually works.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🏗️ Kubernetes Architecture",
        items: [
          "Control Plane: kube-apiserver, etcd, controller-manager, scheduler",
          "Worker Node: kubelet, kube-proxy, container runtime (containerd)",
          "Who talks to whom",
          "What breaks when etcd is down",
          "Why API server is the single source of truth"
        ]
      },
      {
        title: "⌨️ kubectl Mastery (No GUI dependency)",
        items: [
          "Commands: get, describe, logs, exec",
          "apply, delete, patch",
          "--dry-run, -o yaml",
          "Label & annotation management",
          "Debug without dashboards"
        ]
      },
      {
        title: "📦 Core Objects (Absolute fundamentals)",
        items: [
          "Pod (not for production)",
          "ReplicaSet",
          "Deployment",
          "Namespace",
          "Labels & selectors",
          "Deploy apps, scale them, rollback broken deployments",
          "Break deployments on purpose"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Networking & Traffic",
    subtitle: "Intermediate Level",
    description: "This separates juniors. Most devs fail here.",
    color: "bg-green-500",
    sections: [
      {
        title: "🔌 Services (Deep dive)",
        items: [
          "ClusterIP",
          "NodePort",
          "LoadBalancer",
          "Headless Services",
          "kube-proxy modes (iptables vs IPVS)",
          "Service discovery via DNS"
        ]
      },
      {
        title: "🌉 Ingress & Gateways (2026 standard)",
        items: [
          "Ingress controllers (NGINX, Traefik)",
          "TLS termination",
          "Path & host routing",
          "Rate limiting",
          "Gateway API (important for future-proofing)",
          "Expose apps securely with HTTPS"
        ]
      },
      {
        title: "🕸️ CNI & Networking Internals",
        items: [
          "Pod-to-Pod networking",
          "CNI plugins: Calico, Cilium (very important for 2026)",
          "NetworkPolicies (zero trust)",
          "Lock down traffic and explain how packets move"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Storage & State",
    subtitle: "Advanced Intermediate",
    description: "Hard but mandatory. Real systems are stateful.",
    color: "bg-purple-500",
    sections: [
      {
        title: "💾 Volumes & Storage",
        items: [
          "emptyDir",
          "ConfigMap",
          "Secret",
          "PersistentVolume",
          "PersistentVolumeClaim",
          "StorageClass",
          "Dynamic provisioning",
          "Stateful workloads"
        ]
      },
      {
        title: "🗄️ StatefulSets",
        items: [
          "Ordered startup/shutdown",
          "Stable network identity",
          "Volume retention",
          "Deploy: PostgreSQL, Redis, MongoDB"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Configuration & Security",
    subtitle: "Production Readiness",
    description: "This is where production readiness starts.",
    color: "bg-orange-500",
    sections: [
      {
        title: "⚙️ Configuration Management",
        items: [
          "ConfigMaps (env vs files)",
          "Secrets (base64 ≠ encryption)",
          "External secrets (Vault, cloud secret managers)"
        ]
      },
      {
        title: "🔒 Kubernetes Security (Very important)",
        items: [
          "RBAC (Roles, ClusterRoles, bindings)",
          "ServiceAccounts",
          "Pod Security Standards (PSS)",
          "SecurityContext",
          "NetworkPolicies",
          "Zero Trust inside clusters",
          "Least privilege by default"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Scaling, Reliability & Performance",
    subtitle: "Senior Territory",
    description: "Now you're entering senior territory.",
    color: "bg-red-500",
    sections: [
      {
        title: "📈 Autoscaling",
        items: [
          "HPA (CPU, memory, custom metrics)",
          "VPA (when NOT to use it)",
          "Cluster Autoscaler"
        ]
      },
      {
        title: "❤️ Probes & Health",
        items: [
          "Liveness probes",
          "Readiness probes",
          "Startup probes",
          "Bad probes kill apps. Good probes save incidents."
        ]
      },
      {
        title: "🎯 Resource Management",
        items: [
          "Requests vs Limits",
          "QoS classes",
          "OOMKilled debugging"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Observability & Debugging",
    subtitle: "Advanced Operations",
    description: "No observability = blind operations.",
    color: "bg-pink-500",
    sections: [
      {
        title: "📝 Logging",
        items: [
          "Centralized logging",
          "Fluent Bit / Fluentd",
          "Log aggregation patterns"
        ]
      },
      {
        title: "📊 Monitoring & Metrics",
        items: [
          "Prometheus",
          "Alertmanager",
          "Grafana",
          "Kubernetes metrics pipeline",
          "Write alerts that don't spam",
          "Read graphs during incidents"
        ]
      },
      {
        title: "🔍 Tracing (Advanced)",
        items: [
          "OpenTelemetry",
          "Distributed tracing",
          "Latency bottleneck analysis"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "GitOps & CI/CD",
    subtitle: "Modern Deployment",
    description: "Mandatory in 2026. Manual deployments are dead.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🚀 CI/CD with Kubernetes",
        items: [
          "Build → test → push → deploy",
          "Blue-green deployments",
          "Canary deployments"
        ]
      },
      {
        title: "🔄 GitOps",
        items: [
          "Argo CD",
          "Flux",
          "Declarative state",
          "Drift detection",
          "Rollbacks via Git"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Advanced Kubernetes",
    subtitle: "Expert Level",
    description: "Master Kubernetes internals and extensions.",
    color: "bg-teal-500",
    sections: [
      {
        title: "📦 Helm (Template mastery)",
        items: [
          "Chart structure",
          "Values",
          "Hooks",
          "Versioning"
        ]
      },
      {
        title: "🔧 Operators & CRDs",
        items: [
          "CustomResourceDefinitions",
          "Controllers",
          "Operator SDK",
          "Extend Kubernetes itself"
        ]
      },
      {
        title: "🌍 Multi-Cluster & Federation",
        items: [
          "Cluster-to-cluster communication",
          "Failover strategies",
          "Global services"
        ]
      },
      {
        title: "🕸️ Service Mesh (Selective)",
        items: [
          "Istio / Linkerd",
          "mTLS",
          "Traffic shaping",
          "When NOT to use a service mesh"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Cloud & Production Reality",
    subtitle: "Production Mastery",
    description: "Kubernetes ≠ cloud-agnostic in practice.",
    color: "bg-cyan-500",
    sections: [
      {
        title: "☁️ Managed Kubernetes",
        items: [
          "Learn at least ONE deeply: EKS, GKE, AKS",
          "IAM integration",
          "Cloud load balancers",
          "Storage classes",
          "Cost optimization"
        ]
      },
      {
        title: "🆘 Disaster Recovery",
        items: [
          "etcd backups",
          "Cluster restore",
          "Application recovery"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Certification & Real Proof",
    subtitle: "Industry Validation",
    description: "Prove your expertise with certifications and real projects.",
    color: "bg-amber-500",
    sections: [
      {
        title: "🎓 Certifications (Optional but useful)",
        items: [
          "CKA (Administrator)",
          "CKAD (Developer)",
          "CKS (Security — highly respected)"
        ]
      },
      {
        title: "🏗️ Real Projects (Non-optional)",
        items: [
          "Build microservices app",
          "Secure ingress with TLS",
          "HPA + monitoring",
          "GitOps pipeline",
          "Zero-trust network policies",
          "If it's not deployed, it doesn't count"
        ]
      }
    ]
  }
];