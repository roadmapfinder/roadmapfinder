export const phases = [
  {
    id: 0,
    title: "Foundations",
    subtitle: "Mandatory Basics",
    description: "Understand what NGINX is, why it exists, and web fundamentals.",
    color: "bg-gray-500",
    sections: [
      {
        title: "🌐 What NGINX Is & Why It Exists",
        items: [
          "What problem NGINX solved (C10K problem)",
          "Event-driven vs process-based servers",
          "NGINX vs Apache (real-world differences)"
        ]
      },
      {
        title: "🎯 Use Cases",
        items: [
          "Web server",
          "Reverse proxy",
          "Load balancer",
          "API gateway",
          "CDN edge"
        ]
      },
      {
        title: "🌍 Internet & Web Basics (Don't Skip)",
        items: [
          "HTTP/HTTPS lifecycle",
          "DNS resolution",
          "TCP vs UDP",
          "TLS handshake basics",
          "Ports, sockets, IPs",
          "HTTP methods & status codes"
        ]
      },
      {
        title: "📌 Checkpoint",
        items: [
          "You should clearly explain how a browser request reaches your server"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Beginner NGINX",
    subtitle: "Web Server Basics",
    description: "Install, configure, and serve static content.",
    color: "bg-blue-500",
    sections: [
      {
        title: "💻 Installation & Setup",
        items: [
          "Install NGINX on Ubuntu / Debian",
          "Install NGINX on Amazon Linux",
          "Install NGINX on Docker"
        ]
      },
      {
        title: "📁 Directory Structure",
        items: [
          "/etc/nginx/nginx.conf",
          "/etc/nginx/sites-available/",
          "/etc/nginx/sites-enabled/",
          "/etc/nginx/conf.d/"
        ]
      },
      {
        title: "🧠 Core Concepts",
        items: [
          "Master process vs worker processes",
          "Worker_connections & event loop",
          "Configuration file hierarchy",
          "Reload vs restart"
        ]
      },
      {
        title: "⚙️ First Configs",
        items: [
          "Serve static HTML",
          "Root & index directives",
          "Server blocks (virtual hosts)",
          "Listening on ports",
          "Default server behavior"
        ]
      },
      {
        title: "📝 Logs & Debugging",
        items: [
          "access.log",
          "error.log",
          "Log formats",
          "Common beginner errors"
        ]
      },
      {
        title: "🛠 Mini Projects",
        items: [
          "✅ Host a static website",
          "✅ Multiple domains on one server",
          "✅ Custom 404 & 500 pages"
        ]
      },
      {
        title: "📌 Checkpoint",
        items: [
          "You can confidently write a basic server {} block without Google"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Reverse Proxy & Backend Integration",
    subtitle: "Intermediate Level",
    description: "Connect NGINX to backend applications.",
    color: "bg-green-500",
    sections: [
      {
        title: "🔄 Reverse Proxy Fundamentals",
        items: [
          "What is reverse proxy (deep understanding)",
          "Proxy vs forward proxy",
          "When and why to use NGINX as proxy"
        ]
      },
      {
        title: "⚙️ Proxy Configuration",
        items: [
          "proxy_pass",
          "Headers (Host, X-Forwarded-For)",
          "Timeouts",
          "Buffering",
          "WebSocket support"
        ]
      },
      {
        title: "🔌 Backend Integration",
        items: [
          "Node.js",
          "Python (Django / FastAPI)",
          "Java (Spring Boot)",
          "PHP-FPM"
        ]
      },
      {
        title: "🎨 Static + Dynamic Setup",
        items: [
          "Serving frontend + backend",
          "SPA routing (React / Next.js)",
          "API versioning"
        ]
      },
      {
        title: "🛠 Projects",
        items: [
          "✅ React frontend + Node API via NGINX",
          "✅ Reverse proxy for multiple microservices",
          "✅ WebSocket chat app via NGINX"
        ]
      },
      {
        title: "📌 Checkpoint",
        items: [
          "You fully understand how NGINX sits between users and applications"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Load Balancing & High Availability",
    subtitle: "Scaling Traffic",
    description: "Distribute traffic and ensure fault tolerance.",
    color: "bg-purple-500",
    sections: [
      {
        title: "⚖️ Load Balancing Concepts",
        items: [
          "Why load balancing matters",
          "Layer 4 vs Layer 7",
          "Sticky sessions",
          "Health checks"
        ]
      },
      {
        title: "🔧 Load Balancing in NGINX",
        items: [
          "upstream blocks",
          "Round robin algorithm",
          "Least connections algorithm",
          "IP hash algorithm",
          "Failover behavior"
        ]
      },
      {
        title: "📈 Scaling Architectures",
        items: [
          "Horizontal scaling",
          "Blue-Green deployments",
          "Canary releases (basic)"
        ]
      },
      {
        title: "🛠 Projects",
        items: [
          "✅ Load balance 3 backend servers",
          "✅ Failover testing (kill one backend)",
          "✅ Sticky session demo app"
        ]
      },
      {
        title: "📌 Checkpoint",
        items: [
          "You can design fault-tolerant traffic flow"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Security & HTTPS",
    subtitle: "Very Important",
    description: "Secure production systems with TLS and hardening.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🔐 TLS / SSL Mastery",
        items: [
          "SSL vs TLS",
          "Certificates (self-signed vs CA)",
          "Let's Encrypt",
          "Auto-renewal"
        ]
      },
      {
        title: "🔒 HTTPS Configuration",
        items: [
          "Strong cipher suites",
          "HTTP → HTTPS redirects",
          "HSTS",
          "OCSP stapling"
        ]
      },
      {
        title: "🛡️ Security Hardening",
        items: [
          "Rate limiting",
          "IP whitelisting / blacklisting",
          "Basic auth",
          "JWT auth gateway patterns",
          "CORS handling"
        ]
      },
      {
        title: "⚔️ Attack Protection",
        items: [
          "DDoS mitigation basics",
          "Slowloris protection",
          "Request size limits",
          "WAF integration basics"
        ]
      },
      {
        title: "🛠 Projects",
        items: [
          "✅ HTTPS production setup",
          "✅ Rate-limited login API",
          "✅ Secure admin dashboard behind auth"
        ]
      },
      {
        title: "📌 Checkpoint",
        items: [
          "You can deploy secure internet-facing servers"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Performance Optimization",
    subtitle: "Industry Critical",
    description: "Tune NGINX for high performance and scale.",
    color: "bg-red-500",
    sections: [
      {
        title: "⚡ Performance Internals",
        items: [
          "Worker_processes tuning",
          "Event models (epoll, kqueue)",
          "File caching",
          "Sendfile & TCP optimizations"
        ]
      },
      {
        title: "💾 Caching Strategies",
        items: [
          "Static asset caching",
          "Proxy cache",
          "Cache keys",
          "Cache invalidation"
        ]
      },
      {
        title: "🗜️ Compression",
        items: [
          "Gzip",
          "Brotli"
        ]
      },
      {
        title: "🚀 HTTP/2 & HTTP/3",
        items: [
          "Multiplexing",
          "Server push",
          "QUIC basics"
        ]
      },
      {
        title: "🛠 Projects",
        items: [
          "✅ High-performance static site",
          "✅ API caching layer",
          "✅ Benchmark before & after tuning"
        ]
      },
      {
        title: "📌 Checkpoint",
        items: [
          "You know why NGINX is fast, not just that it is"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Advanced NGINX",
    subtitle: "Senior-Level Skills",
    description: "Master complex configurations and architecture.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🎯 Advanced Configuration",
        items: [
          "map",
          "geo",
          "if pitfalls",
          "Variable usage",
          "Includes & modular configs"
        ]
      },
      {
        title: "🌐 NGINX as API Gateway",
        items: [
          "Authentication gateway",
          "Rate limiting per user",
          "Header-based routing",
          "Version routing"
        ]
      },
      {
        title: "📺 Streaming & Media",
        items: [
          "RTMP",
          "HLS",
          "Video streaming basics"
        ]
      },
      {
        title: "➕ NGINX Plus (Conceptual)",
        items: [
          "What Plus offers",
          "Metrics & dashboards",
          "Dynamic upstreams"
        ]
      },
      {
        title: "🛠 Projects",
        items: [
          "✅ API gateway with auth",
          "✅ Feature-flag routing",
          "✅ Media streaming server"
        ]
      },
      {
        title: "📌 Checkpoint",
        items: [
          "You think like an infrastructure architect, not just a config writer"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "NGINX in Modern DevOps",
    subtitle: "Cloud Native",
    description: "Deploy NGINX in containerized and cloud environments.",
    color: "bg-pink-500",
    sections: [
      {
        title: "🐳 Containers & Kubernetes",
        items: [
          "NGINX + Docker",
          "NGINX Ingress Controller",
          "Service mesh basics"
        ]
      },
      {
        title: "🔄 CI/CD Integration",
        items: [
          "Zero-downtime reloads",
          "Canary deploys",
          "Config testing pipelines"
        ]
      },
      {
        title: "📊 Observability",
        items: [
          "Metrics",
          "Logs",
          "Prometheus + Grafana",
          "Tracing basics"
        ]
      },
      {
        title: "🛠 Projects",
        items: [
          "✅ Dockerized NGINX setup",
          "✅ Kubernetes ingress routing",
          "✅ Monitoring dashboard"
        ]
      },
      {
        title: "📌 Checkpoint",
        items: [
          "You're production-ready for cloud-native environments"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Debugging, Failures & Real-World Scenarios",
    subtitle: "Production Skills",
    description: "Handle outages and troubleshoot like a pro.",
    color: "bg-teal-500",
    sections: [
      {
        title: "🔧 Troubleshooting Skills",
        items: [
          "Common production issues",
          "502 / 504 errors",
          "SSL failures",
          "Memory leaks",
          "Connection exhaustion"
        ]
      },
      {
        title: "🚨 Incident Handling",
        items: [
          "Log-driven debugging",
          "Rollbacks",
          "Traffic draining",
          "Emergency config changes"
        ]
      },
      {
        title: "🌪️ Real Scenarios",
        items: [
          "Traffic spikes",
          "DDoS attempts",
          "Certificate expiry",
          "Misconfigured deployments"
        ]
      },
      {
        title: "📌 Checkpoint",
        items: [
          "You can handle outages calmly like a real engineer"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Industry Readiness Checklist",
    subtitle: "Final Validation",
    description: "Confirm you're ready for production roles.",
    color: "bg-cyan-500",
    sections: [
      {
        title: "🎯 You're Industry-Ready When You Can",
        items: [
          "✅ Design NGINX architectures",
          "✅ Secure production systems",
          "✅ Optimize for performance",
          "✅ Scale traffic reliably",
          "✅ Debug real outages",
          "✅ Work with DevOps & cloud teams"
        ]
      },
      {
        title: "💼 Recommended Roles After This Roadmap",
        items: [
          "DevOps Engineer",
          "Site Reliability Engineer (SRE)",
          "Backend Infrastructure Engineer",
          "Platform Engineer",
          "Cloud Engineer"
        ]
      }
    ]
  }
];