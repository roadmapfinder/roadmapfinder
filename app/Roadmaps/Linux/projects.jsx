// components/LinuxProjects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-backup",
    level: "Phase 1 — Beginner",
    title: "Automated Backup & Restore System",
    description:
      "Build a Bash script that automatically backs up directories (like /etc, /home, /var/log) into compressed archives and restores them when needed. Learn file I/O, cron jobs, and basic automation.",
    url: "https://youtu.be/QE0lyWodWdU?si=uOTjKXazHkNBKF-G",
  },
  {
    id: "phase1-firewall",
    level: "Phase 1 — Beginner",
    title: "Secure SSH-Only Server Setup",
    description:
      "Configure a Linux server to use only SSH key authentication, disable root login, enable UFW or firewalld, and install Fail2Ban for brute-force protection.",
    url: "https://youtu.be/Ei3nU-fHI6E?si=YL0A2va68GyDAG6l",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-monitoring",
    level: "Phase 2 — Intermediate",
    title: "Linux System Monitoring Dashboard",
    description:
      "Create a shell or Python script to monitor CPU, memory, disk, and network usage in real time. Learn process monitoring, parsing logs, and scheduling tasks with cron.",
    url: "https://youtu.be/Nr92b1eFRE0?si=kZaVt1igzCaB19SW",
  },
  {
    id: "phase2-logmanager",
    level: "Phase 2 — Intermediate",
    title: "Process & Log Management Automation",
    description:
      "Develop a script that detects zombie processes, rotates logs, and restarts failed services automatically using systemctl and journalctl commands.",
    url: "https://youtu.be/6uP_f_z3CbM?si=8ZCdhGCtYIPXGLrD",
  },
  {
    id: "phase2-webserver",
    level: "Phase 2 — Intermediate",
    title: "Web Server Stack Deployment (Nginx + SSL)",
    description:
      "Deploy a production-ready web server with Nginx or Apache, enable HTTPS using Let's Encrypt SSL, and optimize configuration for performance and security.",
    url: "https://youtu.be/NTOcdjMs8E4?si=QKx5CPstZ69v6RQu",
  },

  // Phase 3 — Advanced / Industry-Ready
  {
    id: "phase3-permission-manager",
    level: "Phase 3 — Advanced",
    title: "Linux File Permissions & ACL Manager",
    description:
      "Build a CLI tool that lists and manages user/group permissions and ACLs. Learn getfacl, setfacl, chmod, and chown deeply for secure system configurations.",
    url: "https://youtu.be/4p2zkY8Q-LQ?si=vx-aYvfCgy-OrZ0o",
  },
  {
    id: "phase3-cloudinit",
    level: "Phase 3 — Advanced",
    title: "Cloud-Init & Auto-Provisioning Script",
    description:
      "Create a cloud-init compatible script that provisions servers with users, SSH keys, packages, firewalls, and monitoring agents automatically.",
    url: "https://youtu.be/piZU2VzAH8o?si=7IyRQzjocGiSu-Pf",
  },
  {
    id: "phase3-containerlab",
    level: "Phase 3 — Advanced",
    title: "Containerized Linux Lab (Docker + System Tools)",
    description:
      "Set up a mini Linux lab using Docker to run multiple isolated services like Nginx, MySQL, and Prometheus. Learn container networking, volumes, and health checks.",
    url: "https://youtu.be/gcfjWF_H5SU?si=uv3GwkJJ0m-LMKMz",
  },
  {
    id: "phase3-patchautomation",
    level: "Phase 3 — Advanced",
    title: "Linux Patch Management & Update Automation",
    description:
      "Automate security updates across multiple servers using SSH and Bash scripting. Generate update reports and configure email notifications for system admins.",
    url: "https://youtu.be/B891mVH5bjQ?si=1O5iuRQ8lwQnmAOe",
  },
];

export default function LinuxProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🐧 Linux Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Progress from beginner to industry-ready Linux engineer through
            hands-on projects focused on automation, security, cloud, and
            DevOps practices.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Complete each phase to master Linux administration, automation, and
          deployment. Each project builds your confidence toward becoming an
          industry-ready Linux engineer.
        </footer>
      </div>
    </section>
  );
}
