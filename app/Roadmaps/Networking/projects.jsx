// components/NetworkingProjects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-lan",
    level: "Phase 1 — Beginner",
    title: "Small Office LAN Setup",
    description:
      "Design and configure a small office LAN with switches, routers, and wireless APs. Implement VLANs, DHCP, and basic connectivity for 10–20 users.",
    url: "https://youtu.be/kkNRHqyyXmA?si=RWC9Gwn7kOXxopHV", // replace with your repo, lab guide, or tutorial
  },
  {
    id: "phase1-vlan-acl",
    level: "Phase 1 — Beginner",
    title: "Inter-VLAN Routing & ACL Configuration",
    description:
      "Create multiple VLANs and route traffic between them. Apply Access Control Lists to restrict sensitive network segments.",
    url: "https://youtu.be/X0fjXh6BVcg?si=SGAwQ2V_o9S1NjTR",
  },
  // Phase 2 — Intermediate
  {
    id: "phase2-wan",
    level: "Phase 2 — Intermediate",
    title: "Enterprise WAN Topology Simulation",
    description:
      "Simulate multiple branch offices connected to HQ. Implement OSPF or EIGRP, configure backup links, and test routing across WAN links.",
    url: "https://youtu.be/DNH09qjRCSw?si=-HVquYcz-VcSoC5M",
  },
  {
    id: "phase2-firewall-vpn",
    level: "Phase 2 — Intermediate",
    title: "Firewall & VPN Configuration Lab",
    description:
      "Configure a firewall (pfSense, Cisco ASA, or FortiGate) and set up site-to-site and remote VPNs. Test NAT, packet filtering, and IPS.",
    url: "#",
  },
  {
    id: "phase2-monitoring",
    level: "Phase 2 — Intermediate",
    title: "Network Monitoring & Logging System",
    description:
      "Set up SNMP-based monitoring with Grafana, Zabbix, or Prometheus. Collect Syslog and NetFlow data, and create dashboards and alerts.",
    url: "https://youtu.be/ieqSi5Aicxc?si=mq8rtSr6pt5o_-0c",
  },
  // Phase 3 — Advanced / Industry-Ready
  {
    id: "phase3-cloud-vpc",
    level: "Phase 3 — Advanced",
    title: "Cloud VPC Design & Hybrid Connectivity",
    description:
      "Design a VPC in AWS or Azure with public/private subnets. Configure routing tables, security groups, and site-to-site VPN to on-prem lab.",
    url: "https://youtu.be/rmVAhAmvY00?si=X-znQQEJy1ZXrDkT",
  },
  {
    id: "phase3-sdn",
    level: "Phase 3 — Advanced",
    title: "SDN Lab with Controller",
    description:
      "Set up a Software-Defined Networking lab using OpenDaylight or Cisco DNA Center. Automate routing policy or VLAN deployment from the controller.",
    url: "https://youtu.be/SuEuvx4dLPM?si=tYVI5dJBZKj3vFNc",
  },
  {
    id: "phase3-automation",
    level: "Phase 3 — Advanced",
    title: "Network Automation with Python & Ansible",
    description:
      "Automate network device configurations using Python (Netmiko/NAPALM) and Ansible playbooks. Backup configs, push VLAN/interface changes, and log results.",
    url: "https://youtu.be/OWKPxAgh9DU?si=__BfAG7rJ1sIwHoS",
  },
  {
    id: "phase3-capstone",
    level: "Phase 3 — Advanced",
    title: "Full Enterprise Infrastructure Simulation",
    description:
      "Combine VLANs, routing, VPNs, firewalls, monitoring, and automation into a complete HQ + branch + cloud network simulation.",
    url: "https://youtu.be/OlaxMfL4WvI?si=eZl7WuGpg62ZQKcV",
  },
];

export default function NetworkingProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ Networking Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to industry-ready networking projects. Configure, automate, and monitor real-world networks to strengthen your portfolio.
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
          Follow the sequence, implement features step by step, and showcase your top networking projects in a polished portfolio.
        </footer>
      </div>
    </section>
  );
}
