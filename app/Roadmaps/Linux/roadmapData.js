export const phases = [
  {
    id: 1,
    title: "Linux Basics",
    subtitle: "Phase 1 (0-2 Months)",
    description: "Get comfortable using Linux daily — commands, file systems, and terminal navigation.",
    color: "bg-blue-500",
    sections: [
      {
        title: "📘 Introduction to Linux",
        items: [
          "What is Linux? Kernel, distributions, shells",
          "Difference between Linux, Unix, macOS, Windows",
          "Popular distros: Ubuntu, Debian, CentOS, Fedora, Arch"
        ]
      },
      {
        title: "💻 Basic Command-Line Usage",
        items: [
          "Navigating the filesystem: pwd, cd, ls, tree",
          "File management: cat, cp, mv, rm, find, locate",
          "Viewing file content: less, head, tail, grep",
          "File permissions: chmod, chown, umask",
          "Creating and editing files: nano, vim, touch"
        ]
      },
      {
        title: "🗂️ File System Structure",
        items: [
          "/home, /etc, /bin, /var, /usr, /tmp",
          "Understanding symbolic links vs hard links",
          "Mounting/unmounting drives and USBs"
        ]
      },
      {
        title: "🧰 Basic Utilities",
        items: [
          "tar, zip, scp, rsync, curl, wget",
          "du, df, top, htop, free, ps, kill"
        ]
      },
      {
        title: "⚙️ Shell Basics",
        items: [
          "Bash vs Zsh vs Fish",
          "Understanding shell history, aliases, and environment variables",
          "Command piping (|) and redirection (>, >>, <)"
        ]
      },
      {
        title: "🎯 Mini Projects",
        items: [
          "✅ Create a personal CLI shortcut library (alias)",
          "✅ Write a backup script for /home using tar and rsync"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate System Admin",
    subtitle: "Phase 2 (2-4 Months)",
    description: "Understand the system internals, services, users, and automation.",
    color: "bg-green-500",
    sections: [
      {
        title: "👥 User & Group Management",
        items: [
          "useradd, passwd, usermod, groupadd, su, sudo",
          "Understanding /etc/passwd, /etc/shadow, /etc/group",
          "Access control with chmod and chown"
        ]
      },
      {
        title: "🧩 Process & Job Management",
        items: [
          "Foreground vs background jobs",
          "ps, top, nice, renice, kill, systemctl",
          "Cron jobs (crontab -e) and at scheduling"
        ]
      },
      {
        title: "📦 Package Management",
        items: [
          "Debian (APT): apt-get, dpkg",
          "Red Hat (YUM/DNF): yum, rpm",
          "Compile from source (make, gcc, ./configure)"
        ]
      },
      {
        title: "🔧 System Services & Boot Process",
        items: [
          "systemd, journalctl, systemctl",
          "Runlevels and targets",
          "Logs: /var/log, dmesg, rsyslog"
        ]
      },
      {
        title: "🧾 Filesystem Management",
        items: [
          "fdisk, lsblk, mount, umount, blkid",
          "Partitioning & formatting drives (mkfs, parted)",
          "LVM basics (Logical Volume Manager)"
        ]
      },
      {
        title: "🎯 Mini Projects",
        items: [
          "✅ Automate daily system updates using cron",
          "✅ Configure and manage a simple Apache/Nginx web server"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Administration",
    subtitle: "Phase 3 (4-6 Months)",
    description: "Master networking, security, system optimization, and troubleshooting.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🌐 Networking Essentials",
        items: [
          "IP addressing, subnetting, DNS, routing",
          "Commands: ifconfig, ip, netstat, ss, ping, traceroute, nslookup",
          "Configure static IP, hostname, and DNS resolver",
          "ufw, firewalld, iptables basics"
        ]
      },
      {
        title: "🔒 Linux Security",
        items: [
          "SSH hardening (/etc/ssh/sshd_config)",
          "Key-based authentication",
          "File permissions deep dive (setuid, setgid, sticky bit)",
          "sudo policies & /etc/sudoers",
          "SELinux and AppArmor overview"
        ]
      },
      {
        title: "🧱 System Monitoring & Logs",
        items: [
          "journalctl, /var/log/messages, logrotate",
          "System performance tools: iostat, vmstat, sar",
          "Resource monitoring with htop, glances, nmon"
        ]
      },
      {
        title: "🧩 Kernel & System Performance",
        items: [
          "Kernel modules: lsmod, modprobe",
          "Tuning sysctl parameters (/etc/sysctl.conf)",
          "Swappiness, memory management, CPU load averages"
        ]
      },
      {
        title: "💾 Backup & Disaster Recovery",
        items: [
          "Full vs incremental backups",
          "Automating with rsync, cron, tar",
          "Snapshot tools (e.g., Timeshift, LVM snapshots)"
        ]
      },
      {
        title: "🎯 Mini Projects",
        items: [
          "✅ Secure SSH-only server setup with disabled root login",
          "✅ Create automated backup & restore scripts"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Industry & Cloud Readiness",
    subtitle: "Phase 4 (6-9 Months)",
    description: "Become production-ready — automation, scripting, cloud, and CI/CD.",
    color: "bg-orange-500",
    sections: [
      {
        title: "⚙️ Bash Scripting Mastery",
        items: [
          "Variables, loops, conditionals",
          "Functions, exit codes, input/output",
          "Script arguments ($1, $@), case statements",
          "Parsing logs, text processing with awk, sed, grep, cut"
        ]
      },
      {
        title: "🚀 Bash Scripting Projects",
        items: [
          "✅ Log parser for error alerts",
          "✅ System resource usage reporter",
          "✅ Automated deployment script"
        ]
      },
      {
        title: "🐳 Linux for DevOps",
        items: [
          "Docker basics (containers vs VMs)",
          "Kubernetes fundamentals (kubectl, pods, services)",
          "CI/CD on Linux (GitHub Actions, Jenkins agents)",
          "Config management: Ansible, Terraform basics"
        ]
      },
      {
        title: "☁️ Linux in Cloud Environments",
        items: [
          "Managing Linux on AWS EC2, GCP, Azure",
          "Cloud-init and user-data scripts",
          "SSH access & key management",
          "Monitoring with CloudWatch, Grafana, Prometheus"
        ]
      },
      {
        title: "🛠️ Troubleshooting & Incident Response",
        items: [
          "Memory leaks, disk space, zombie processes",
          "Network debugging (tcpdump, nmap)",
          "Emergency recovery (rescue mode, chroot repair)"
        ]
      },
      {
        title: "🧩 Certification Prep (Optional)",
        items: [
          "LPIC-1 / CompTIA Linux+ / RHCSA / LFCS",
          "Infrastructure-as-Code (Ansible + Terraform)"
        ]
      },
      {
        title: "🏆 Final Projects",
        items: [
          "✅ Secure web server stack (Nginx + SSL + UFW + Fail2ban)",
          "✅ Automate server provisioning with Bash + Ansible",
          "✅ Monitoring stack (Prometheus + Grafana) on Linux VM"
        ]
      }
    ]
  }
];
