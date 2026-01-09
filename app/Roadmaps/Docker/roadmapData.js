export const phases = [
  {
    id: 0,
    title: "Foundations",
    subtitle: "Prerequisites (Before Starting)",
    description: "Essential knowledge required before learning Docker",
    color: "bg-gray-600",
    sections: [
      {
        title: "What You MUST Already Know",
        items: [
          "Linux basics → Files, permissions, and process management",
          "Networking basics → Ports, DNS, localhost, and TCP protocols",
          "Git fundamentals → Clone, commit, and push operations",
          "Backend stack → Node.js, Python, Java, or Go experience",
          "Why: Docker does not replace understanding OS and networking fundamentals"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Docker Basics",
    subtitle: "Week 1",
    description: "Understanding Docker fundamentals and core concepts",
    color: "bg-blue-500",
    sections: [
      {
        title: "What Docker Actually Is",
        items: [
          "Containers vs VMs → Process isolation, not OS virtualization",
          "Images → Immutable templates for containers",
          "Containers → Running processes from images",
          "Docker Engine → Core runtime and daemon",
          "Docker CLI → Command-line interface tools",
          "Docker Desktop → GUI application for Windows and Mac",
          "Outcome: Explain Docker in 2 minutes without buzzwords"
        ]
      },
      {
        title: "Install & Verify",
        items: [
          "Docker Desktop → Installation for Windows and Mac",
          "Docker Engine → Installation for Linux systems",
          "docker version → Verify installation and version",
          "docker info → Display system-wide information",
          "docker run hello-world → Test basic functionality",
          "Why: Everything depends on proper installation"
        ]
      },
      {
        title: "Core Commands (Non-Negotiable)",
        items: [
          "docker pull → Download images from registries",
          "docker images → List all local images",
          "docker run → Create and start containers",
          "docker ps → List running containers",
          "docker ps -a → List all containers including stopped",
          "docker stop → Stop running containers",
          "docker rm → Remove containers",
          "docker rmi → Remove images",
          "docker logs → View container logs",
          "docker exec -it → Execute commands in running containers",
          "Why: Drill these until muscle memory"
        ]
      },
      {
        title: "Run Real Containers",
        items: [
          "Run nginx → docker run -d -p 8080:80 nginx",
          "Run redis → docker run -d redis",
          "Run postgres → docker run -d -e POSTGRES_PASSWORD=pass postgres",
          "Understand ports → Port mapping between host and container",
          "Detached mode → Running containers in background",
          "Environment variables → Passing configuration to containers",
          "Outcome: Understand ports, detached mode, and env vars"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Dockerfile Mastery",
    subtitle: "Week 2",
    description: "Building custom images and optimization techniques",
    color: "bg-green-500",
    sections: [
      {
        title: "Dockerfile Basics",
        items: [
          "FROM → Specify base image for build",
          "RUN → Execute commands during build",
          "COPY vs ADD → Use COPY for files (ADD has extra features)",
          "WORKDIR → Set working directory in container",
          "EXPOSE → Document ports the container listens on",
          "CMD vs ENTRYPOINT → Default command vs fixed executable",
          "Why: This is where beginners break production"
        ]
      },
      {
        title: "Build & Run Your Own Image",
        items: [
          "docker build -t myapp . → Build image with tag",
          "docker run -p 3000:3000 myapp → Run custom image",
          "Understanding build context → Files sent to Docker daemon",
          "Tagging conventions → Naming and versioning images",
          "Why: If you can't do this, you're not using Docker"
        ]
      },
      {
        title: "Image Optimization (CRITICAL)",
        items: [
          "Layer caching → Understanding Docker layer reuse",
          ".dockerignore → Exclude files from build context",
          "Alpine vs Debian → Choosing minimal base images",
          "Multi-stage builds → Separate build and runtime environments",
          "Example: FROM node:20 AS build → Build stage separation",
          "COPY --from=build → Copy artifacts between stages",
          "Why: This alone separates juniors from pros"
        ]
      },
      {
        title: "Debugging Containers",
        items: [
          "docker logs → Inspect container output",
          "docker exec → Interactive debugging inside containers",
          "Container exits immediately → Troubleshooting startup issues",
          "Common mistakes → Wrong CMD, missing env vars, port mismatches",
          "Exit codes → Understanding container failure reasons"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Data, Volumes & Networking",
    subtitle: "Week 3",
    description: "Managing persistent data and container communication",
    color: "bg-purple-500",
    sections: [
      {
        title: "Volumes (State is King)",
        items: [
          "Named volumes → docker volume create data",
          "Bind mounts → Mount host directories into containers",
          "Volume usage → docker run -v data:/var/lib/mysql mysql",
          "Volume management → List, inspect, and remove volumes",
          "When NOT to use volumes → Temporary data and logs",
          "Data persistence → Understanding container ephemeral nature"
        ]
      },
      {
        title: "Docker Networking",
        items: [
          "Bridge network → Default network driver for containers",
          "Container-to-container communication → DNS-based discovery",
          "docker network create app-net → Create custom networks",
          "docker run --network app-net → Connect to networks",
          "Network isolation → Security through network separation",
          "Why: Stop using localhost incorrectly"
        ]
      },
      {
        title: "Environment Management",
        items: [
          ".env files → Storing configuration separately",
          "Secrets → Don't hardcode sensitive data",
          "docker run --env-file .env → Load environment files",
          "ENV instruction → Setting defaults in Dockerfile",
          "Security considerations → Keeping secrets out of images"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Docker Compose",
    subtitle: "Week 4",
    description: "Multi-container application orchestration",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Docker Compose Basics",
        items: [
          "services → Define application components",
          "ports → Port mapping configuration",
          "volumes → Persistent data management",
          "networks → Custom network configuration",
          "depends_on → Service startup dependencies",
          "Why: Compose is mandatory in industry"
        ]
      },
      {
        title: "Multi-Service Architecture",
        items: [
          "Backend + DB + Redis + Nginx → Full stack setup",
          "Reverse proxy → Nginx as API gateway",
          "Healthchecks → Container health monitoring",
          "Service discovery → DNS-based service location",
          "Scaling services → Running multiple instances"
        ]
      },
      {
        title: "Dev vs Prod Compose",
        items: [
          "docker-compose.override.yml → Development overrides",
          "Different environments → Staging and production configs",
          "Debug vs optimized builds → Build optimization per environment",
          "Environment-specific variables → Configuration management",
          "Compose profiles → Conditional service activation"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Security & Best Practices",
    subtitle: "Week 5",
    description: "Container security and production-ready configurations",
    color: "bg-red-500",
    sections: [
      {
        title: "Container Security",
        items: [
          "Non-root users → Run containers with limited privileges",
          "Minimal base images → Reduce attack surface",
          "Scan images → docker scan myimage for vulnerabilities",
          "Security updates → Keep base images updated",
          "Read-only filesystems → Prevent runtime modifications",
          "Why: Most devs are dangerously bad here"
        ]
      },
      {
        title: "Secrets Management",
        items: [
          ".env is NOT secure → Understanding environment limitations",
          "Docker secrets → Swarm and Compose secret management",
          "External secret managers → Vault, AWS Secrets Manager",
          "Runtime secrets → Injecting secrets at container start",
          "Never commit secrets → .gitignore and security practices"
        ]
      },
      {
        title: "Resource Limits",
        items: [
          "CPU limits → cpus: '0.5' configuration",
          "Memory limits → memory: 512M constraints",
          "Resource reservations → Guaranteed resources",
          "Why containers can kill hosts → Understanding resource exhaustion",
          "Monitoring resources → docker stats command"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Registries & CI/CD",
    subtitle: "Week 6",
    description: "Image distribution and automated workflows",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Image Registries",
        items: [
          "Docker Hub → Public registry for images",
          "GitHub Container Registry → GHCR for private images",
          "Private registries → Self-hosted solutions",
          "docker tag app user/app → Tagging for registries",
          "docker push user/app → Publishing images",
          "Registry authentication → Login and access tokens"
        ]
      },
      {
        title: "Docker in CI/CD",
        items: [
          "Build in GitHub Actions → Automated image building",
          "Cache layers → Speed up builds with layer caching",
          "Push on merge → Automatic deployment workflows",
          "Multi-platform builds → ARM and x86 support",
          "Why: You should never build manually in production"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Docker in Real Systems",
    subtitle: "Week 7-8",
    description: "Production deployment and integration patterns",
    color: "bg-orange-500",
    sections: [
      {
        title: "Docker + Nginx",
        items: [
          "Reverse proxy → Load balancing and routing",
          "SSL with Certbot → HTTPS certificate automation",
          "Multiple apps on one server → Virtual host configuration",
          "Static file serving → Optimized content delivery",
          "Nginx as API gateway → Request routing and authentication"
        ]
      },
      {
        title: "Docker + Databases",
        items: [
          "Backup strategies → Volume snapshots and exports",
          "Migrations → Database schema management",
          "Production data safety → Preventing data loss",
          "Replication → Database high availability",
          "Performance tuning → Database optimization in containers"
        ]
      },
      {
        title: "Docker vs Kubernetes",
        items: [
          "Why Docker alone fails at scale → Orchestration limitations",
          "Where K8s starts → Multi-host container management",
          "Service discovery → Advanced networking requirements",
          "Auto-scaling → Dynamic resource allocation",
          "Why: Learn Docker before Kubernetes, no shortcuts"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Advanced & Industry Level",
    subtitle: "Optional but Powerful",
    description: "Advanced features and enterprise patterns",
    color: "bg-pink-500",
    sections: [
      {
        title: "Advanced Topics",
        items: [
          "BuildKit → Next-generation build system",
          "Docker context → Managing multiple Docker hosts",
          "Rootless Docker → Running Docker without root privileges",
          "Docker swarm → Legacy orchestration knowledge",
          "Custom network drivers → Advanced networking plugins"
        ]
      },
      {
        title: "Observability",
        items: [
          "Logs aggregation → Centralized logging with ELK or Loki",
          "Prometheus exporters → Metrics collection and monitoring",
          "Health probes → Liveness and readiness checks",
          "Distributed tracing → Request flow visualization",
          "APM integration → Application performance monitoring"
        ]
      },
      {
        title: "Anti-Patterns (Memorize)",
        items: [
          "One container = many processes ❌ → Violates single responsibility",
          "Storing secrets in images ❌ → Security vulnerability",
          "Huge images ❌ → Slow builds and deployments",
          "latest tag in prod ❌ → Non-deterministic deployments",
          "Running as root ❌ → Security risk",
          "No healthchecks ❌ → Poor failure detection"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Final Industry Checklist",
    subtitle: "Job-Ready Skills",
    description: "Essential capabilities for professional Docker usage",
    color: "bg-teal-500",
    sections: [
      {
        title: "Core Competencies",
        items: [
          "✅ Containerize a backend → Full application dockerization",
          "✅ Use multi-stage builds → Optimized production images",
          "✅ Use Docker Compose for full stack → Multi-service applications",
          "✅ Persist DB data safely → Volume management and backups",
          "✅ Push images to registry → CI/CD integration",
          "✅ Deploy on VPS with Nginx → Production deployment",
          "✅ Debug failing containers fast → Troubleshooting skills"
        ]
      }
    ]
  }
];