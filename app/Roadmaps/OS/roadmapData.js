// Operating System Development Roadmap
export const phases = [
  {
    id: 0,
    title: "Foundations of Computer Science",
    subtitle: "Phase 0",
    description: "Build a solid foundation in computer architecture, algorithms, and low-level concepts.",
    color: "bg-blue-500",
    sections: [
      {
        title: "📘 Core CS Concepts",
        items: [
          "Computer Architecture: CPU, ALU, registers, instruction cycle, caches, memory hierarchy",
          "Number Systems & Binary: Binary, Hex, bitwise operations, signed/unsigned integers",
          "Compilation Pipeline: Source → Preprocessing → Compilation → Linking → Loading",
          "Algorithms & Data Structures: Arrays, linked lists, stacks, trees, heaps, scheduling queues"
        ]
      },
      {
        title: "🧩 Practice Projects",
        items: [
          "✅ Implement a simple virtual CPU simulator",
          "✅ Write a toy assembler that converts pseudo-assembly to bytecode"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Programming Mastery (C, C++, Rust)",
    subtitle: "Phase 1",
    description: "Master system programming languages essential for OS development.",
    color: "bg-green-500",
    sections: [
      {
        title: "💻 System Languages",
        items: [
          "C: Pointers, memory layout, stack vs heap, structs, headers, linking",
          "C++: RAII, templates, std::thread, synchronization primitives",
          "Rust: Ownership model, borrowing, lifetimes, safe concurrency"
        ]
      },
      {
        title: "🧠 Key Concepts",
        items: [
          "Manual memory management (malloc, free, smart pointers)",
          "Function call conventions, stack frames",
          "Inline assembly and calling syscalls manually",
          "File I/O, sockets, and signals"
        ]
      },
      {
        title: "🧩 Projects",
        items: [
          "✅ Write your own malloc() allocator",
          "✅ Implement a multi-threaded HTTP server in C",
          "✅ Build a tiny shell (command interpreter)"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Operating System Fundamentals",
    subtitle: "Phase 2",
    description: "Understand core OS concepts: processes, memory, file systems, and concurrency.",
    color: "bg-purple-500",
    sections: [
      {
        title: "📚 Key OS Modules",
        items: [
          "Boot Process: BIOS/UEFI, bootloaders (GRUB), kernel loading",
          "Processes: Process control block (PCB), context switching, fork/exec",
          "Memory Management: Paging, segmentation, virtual memory, swapping",
          "File Systems: Inodes, journaling, FAT32, ext4",
          "Device Drivers: Interrupts, I/O ports, DMA, kernel modules",
          "Concurrency: Mutexes, semaphores, condition variables, race conditions",
          "Scheduling: FCFS, SJF, Round Robin, Priority",
          "Networking Stack: TCP/IP layers, NIC drivers, socket interface"
        ]
      },
      {
        title: "🧩 Projects",
        items: [
          "✅ Build a toy OS kernel (with a bootloader)",
          "✅ Write your own scheduler simulation",
          "✅ Implement a filesystem in user-space (FUSE)",
          "✅ Create a process monitor (like top)"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Dive Into Kernel Development",
    subtitle: "Phase 3",
    description: "Deep dive into real kernel code and understand kernel internals.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🧱 Choose a Kernel",
        items: [
          "Linux (most popular for study & industry)",
          "XV6 (MIT's teaching OS — simpler for learning)",
          "Minix / Redox OS (for microkernel exploration)"
        ]
      },
      {
        title: "🔍 Kernel Internals",
        items: [
          "System Calls: How syscall instruction transfers to kernel mode",
          "Scheduler: CFS (Completely Fair Scheduler) in Linux",
          "Virtual Memory: Page tables, TLB, mmap, demand paging",
          "Device Drivers: char vs block drivers, kernel modules, sysfs",
          "Filesystem: VFS layer, buffer cache, journaling",
          "IPC: Pipes, signals, shared memory"
        ]
      },
      {
        title: "🧩 Kernel-Level Projects",
        items: [
          "✅ Write a Linux kernel module (hello_world.ko)",
          "✅ Modify a system call",
          "✅ Implement a custom scheduler policy",
          "✅ Create a virtual device driver"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Advanced Topics (Modern Systems)",
    subtitle: "Phase 4",
    description: "Explore virtualization, security, distributed systems, and high-performance computing.",
    color: "bg-pink-500",
    sections: [
      {
        title: "🧠 Advanced Domains",
        items: [
          "Virtualization: QEMU, KVM, Hypervisors, container namespaces",
          "OS Security: SELinux, capabilities, sandboxing",
          "Distributed OS: Cloud VM scheduling, resource orchestration",
          "High-Performance Computing: NUMA awareness, kernel bypass I/O",
          "Networking: eBPF, DPDK, kernel networking stack"
        ]
      },
      {
        title: "🧩 Projects",
        items: [
          "✅ Build a mini hypervisor using QEMU + KVM",
          "✅ Write an eBPF network monitor",
          "✅ Contribute to Linux kernel mailing list patches",
          "✅ Implement a bare-metal OS for ARM board"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Industry-Ready Skills",
    subtitle: "Phase 5",
    description: "Acquire professional debugging, tooling, and portfolio-building skills.",
    color: "bg-red-500",
    sections: [
      {
        title: "🧠 Core Professional Skills",
        items: [
          "Debugging with gdb, strace, perf, ftrace",
          "Kernel panic debugging and stack traces",
          "Build systems: Make, CMake, Bazel",
          "Version control & patch workflow (git format-patch, git bisect)",
          "Writing clean kernel documentation"
        ]
      },
      {
        title: "🧩 Career Project Portfolio",
        items: [
          "✅ Custom OS kernel (boot to shell)",
          "✅ Linux kernel module",
          "✅ File system or scheduler simulation",
          "✅ Virtualization project (mini hypervisor)",
          "✅ Driver for virtual hardware device"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Professional & Research Level",
    subtitle: "Phase 6",
    description: "Engage with cutting-edge research and contribute to open source OS projects.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "📈 Deep Topics",
        items: [
          "Kernel tracing and instrumentation",
          "Memory model verification (RCU, lock-free correctness)",
          "Hardware-software co-design",
          "Compiler-OS optimization interfaces (LLVM passes)",
          "OS for accelerators (GPU, FPGA)",
          "Cloud-native kernels (unikernels, lightweight VMs)"
        ]
      },
      {
        title: "🌍 Open Source Contributions",
        items: [
          "Submit patches to: Linux kernel, Redox, FreeBSD, or Zephyr",
          "Join discussions on LKML (Linux Kernel Mailing List)",
          "Participate in open source OS research projects on GitHub"
        ]
      },
      {
        title: "📚 Additional Resources",
        items: [
          "Books: Operating System Concepts (Silberschatz), Modern Operating Systems (Tanenbaum)",
          "Online: OSDev Wiki, Linux Kernel Documentation, MIT 6.828 course",
          "Practice: Contribute to open source kernels, build your own OS from scratch",
          "Communities: r/osdev, LKML, kernel newbies mailing list"
        ]
      }
    ]
  }
];