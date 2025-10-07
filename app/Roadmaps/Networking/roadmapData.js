// Network Engineering Mastery Roadmap data structured according to the roadmap content
export const phases = [
  {
    id: 1,
    title: "Networking Fundamentals",
    subtitle: "Phase 1 (0-2 Months)",
    description: "Understand core networking concepts and build a foundation.",
    color: "bg-blue-500",
    sections: [
      {
        title: "📘 Networking Basics",
        items: [
          "What is a Network, LAN/WAN/MAN/PAN",
          "OSI & TCP/IP Models (7 Layers)",
          "IP Addressing (IPv4, IPv6)",
          "Subnetting, CIDR, and VLSM",
          "MAC Address, ARP, DHCP, DNS",
          "NAT, PAT, Port Numbers"
        ]
      },
      {
        title: "🔌 Networking Devices",
        items: [
          "Switches, Routers, Firewalls, Access Points",
          "Hub vs Switch vs Router differences",
          "Cables (UTP, STP, Fiber)"
        ]
      },
      {
        title: "📦 Packet Flow & Protocols",
        items: [
          "ICMP, TCP/UDP, HTTP, HTTPS, DNS, FTP, SSH, Telnet",
          "How data flows through a network (packet encapsulation/decapsulation)"
        ]
      },
      {
        title: "🧠 Practice",
        items: [
          "Simulate networks using Cisco Packet Tracer or GNS3",
          "Subnetting challenges (manual + calculator)",
          "Ping, traceroute, ipconfig, netstat, nslookup in CLI"
        ]
      },
      {
        title: "🎯 Certifications (Optional)",
        items: [
          "CompTIA Network+",
          "Cisco CCNA: Networking Fundamentals"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Switching, Routing & VLANs",
    subtitle: "Phase 2 (2-4 Months)",
    description: "Learn how enterprise networks actually move traffic.",
    color: "bg-green-500",
    sections: [
      {
        title: "🔀 Switching Concepts",
        items: [
          "VLANs, Trunking (802.1Q)",
          "STP (Spanning Tree Protocol)",
          "Port Security",
          "EtherChannel"
        ]
      },
      {
        title: "🛣️ Routing Concepts",
        items: [
          "Static Routing",
          "Dynamic Routing Protocols: RIP, OSPF, EIGRP, BGP (Intro)",
          "Routing Tables, Route Summarization",
          "Inter-VLAN Routing",
          "DHCP Relay, HSRP, VRRP"
        ]
      },
      {
        title: "🧠 Practice",
        items: [
          "Configure VLANs, Trunking, and STP in Packet Tracer/GNS3",
          "Create multiple subnets and route between them",
          "Use Wireshark to analyze traffic flows"
        ]
      },
      {
        title: "🎯 Certifications (Optional)",
        items: [
          "Cisco CCNA (200-301)",
          "Juniper JNCIA-Junos"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Network Infrastructure & Services",
    subtitle: "Phase 3 (4-6 Months)",
    description: "Learn how to design, deploy, and secure enterprise-grade infrastructure.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🌐 WAN Technologies",
        items: [
          "MPLS, Leased Lines, Metro Ethernet",
          "SD-WAN Fundamentals (Cisco vManage, Fortinet, VMware SD-WAN)"
        ]
      },
      {
        title: "⚙️ Network Services",
        items: [
          "DHCP, DNS, NTP, Syslog, SNMP, NetFlow",
          "QoS (Quality of Service)",
          "Network Segmentation"
        ]
      },
      {
        title: "🌍 IPv6 Deep Dive",
        items: [
          "Addressing, Tunneling, Dual Stack, Transition Mechanisms"
        ]
      },
      {
        title: "🔒 Firewalls & Security Basics",
        items: [
          "Access Control Lists (ACL)",
          "Stateful vs Stateless Firewalls",
          "NAT Types and Firewall Rules",
          "VPNs (Site-to-Site, Remote Access)"
        ]
      },
      {
        title: "🧠 Practice",
        items: [
          "Configure ACLs and VLAN segmentation",
          "Build site-to-site VPNs using simulation tools",
          "Set up Syslog and SNMP monitoring in lab"
        ]
      },
      {
        title: "🎯 Certifications (Optional)",
        items: [
          "Cisco CCNP Enterprise",
          "Fortinet NSE 3-4",
          "Palo Alto PCNSA"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Cloud & Virtual Networking",
    subtitle: "Phase 4 (6-9 Months)",
    description: "Adapt to cloud-native and hybrid networking (industry standard in 2025).",
    color: "bg-orange-500",
    sections: [
      {
        title: "💻 Virtual Networking Basics",
        items: [
          "vSwitches, vRouters, SDN concepts",
          "Network Virtual Appliances"
        ]
      },
      {
        title: "☁️ Cloud Networking (AWS, Azure, GCP)",
        items: [
          "AWS VPC, Subnets, Route Tables, NACLs, Security Groups",
          "Azure VNets, NSGs, Peering",
          "GCP VPC, Firewalls, Cloud Interconnect",
          "Hybrid Networking - VPNs, Direct Connect, ExpressRoute",
          "Load Balancers, CDN, and DNS Routing (Route 53, Cloudflare)"
        ]
      },
      {
        title: "🧠 Practice",
        items: [
          "Build VPCs with multiple subnets on AWS/Azure",
          "Peer two VPCs and establish VPN tunnels",
          "Set up Application Load Balancer and test failover"
        ]
      },
      {
        title: "🎯 Certifications (Optional)",
        items: [
          "AWS Certified Advanced Networking - Specialty",
          "Microsoft Azure Network Engineer Associate"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Network Automation & Programmability",
    subtitle: "Phase 5 (9-11 Months)",
    description: "Automate configuration, monitoring, and deployment - modern skill in demand.",
    color: "bg-red-500",
    sections: [
      {
        title: "💻 Scripting Languages",
        items: [
          "Python for Network Engineers (Netmiko, NAPALM, Paramiko)",
          "YAML, JSON basics"
        ]
      },
      {
        title: "🤖 Automation Tools",
        items: [
          "Ansible for Network Configuration Management",
          "REST APIs (Cisco DNA Center, Arista, Juniper)",
          "Terraform for Infrastructure as Code (IaC)",
          "Git/GitHub for version control"
        ]
      },
      {
        title: "📊 Monitoring Automation",
        items: [
          "NetBox, Grafana, Prometheus integration"
        ]
      },
      {
        title: "🧠 Practice",
        items: [
          "Automate VLAN or interface configs via Ansible",
          "Use Python scripts to backup router configs",
          "Push changes via API to network devices"
        ]
      },
      {
        title: "🎯 Certifications (Optional)",
        items: [
          "Cisco DevNet Associate (DEVASC)",
          "Red Hat Ansible Automation",
          "HashiCorp Terraform Associate"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Network Security, Troubleshooting & Optimization",
    subtitle: "Phase 6 (11-13 Months)",
    description: "Be production-ready - secure, monitor, and optimize enterprise networks.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🔐 Advanced Security",
        items: [
          "IDS/IPS, Firewalls, Zero Trust Network Access",
          "Secure Access (802.1X, NAC)",
          "DDoS Mitigation, Threat Intelligence"
        ]
      },
      {
        title: "🔍 Network Monitoring & Troubleshooting",
        items: [
          "Tools: Wireshark, SolarWinds, PRTG, Zabbix, NetFlow Analyzer",
          "Troubleshoot using ping, traceroute, show/debug commands",
          "Analyze latency, packet loss, and bandwidth usage"
        ]
      },
      {
        title: "⚡ Performance Optimization",
        items: [
          "QoS tuning, traffic shaping, caching, load balancing",
          "Redundancy (HSRP, VRRP, GLBP)"
        ]
      },
      {
        title: "🧠 Practice",
        items: [
          "Simulate attacks and troubleshoot in a lab environment",
          "Capture live packets and diagnose issues with Wireshark",
          "Create a full monitoring dashboard for a simulated network"
        ]
      },
      {
        title: "🎯 Certifications (Optional)",
        items: [
          "Cisco CCNP Security",
          "Palo Alto PCNSE",
          "CompTIA Security+"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Industry Projects & Career Prep",
    subtitle: "Phase 7 (13-15 Months)",
    description: "Build production-level labs, documentation, and get job-ready.",
    color: "bg-pink-500",
    sections: [
      {
        title: "🚀 Hands-on Projects",
        items: [
          "✅ Enterprise Campus Network Design (3-tier model)",
          "✅ Hybrid Cloud Network Setup (on-prem + AWS)",
          "✅ Network Automation Dashboard (Python + Netmiko + Grafana)",
          "✅ Network Monitoring Solution (SNMP + Syslog + Grafana)",
          "✅ SD-WAN Implementation Demo"
        ]
      },
      {
        title: "📄 Documentation Skills",
        items: [
          "Document network topologies",
          "Create network diagrams using draw.io or Lucidchart",
          "Write Standard Operating Procedures (SOPs)"
        ]
      },
      {
        title: "💼 Job Prep",
        items: [
          "Mock interviews on subnetting, routing, troubleshooting",
          "Portfolio on GitHub (configs, projects, scripts)",
          "Study real job descriptions (Network Engineer, NOC, Cloud Network Engineer)"
        ]
      }
    ]
  }
];


