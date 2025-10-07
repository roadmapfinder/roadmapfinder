// components/NetworkingDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "IETF RFC Editor",
    description:
      "The official source for Internet standards and protocol specifications including TCP/IP, BGP, OSPF, and more.",
    url: "https://www.rfc-editor.org/",
    citation: "IETF RFC Editor",
  },
  {
    title: "IETF — Internet Engineering Task Force",
    description:
      "Official home of IETF, the community responsible for developing and maintaining Internet standards.",
    url: "https://www.ietf.org/",
    citation: "IETF",
  },
  {
    title: "TCP/IP Protocol Suite Documentation",
    description:
      "Comprehensive guide to the TCP/IP model, IP addressing, and core transport layer protocols.",
    url: "https://datatracker.ietf.org/doc/html/rfc791",
    citation: "RFC 791 — IPv4 Specification",
  },
  {
    title: "Cisco Networking Technologies",
    description:
      "Cisco’s official documentation hub covering switching, routing, VLANs, OSPF, BGP, and network design.",
    url: "https://www.cisco.com/c/en/us/tech/index.html",
    citation: "Cisco Docs",
  },
  {
    title: "Juniper Networks Documentation Portal",
    description:
      "Authoritative Juniper documentation including routing, security, and automation (Junos OS).",
    url: "https://www.juniper.net/documentation/",
    citation: "Juniper Docs",
  },
  {
    title: "Aruba (HPE) Networking Documentation",
    description:
      "Official guide for Aruba wired and wireless networking, SD-Branch, and security solutions.",
    url: "https://arubanetworking.hpe.com/techdocs/ArubaDocPortal/content/docportal.htm",
    citation: "Aruba Docs",
  },
  {
    title: "Fortinet Documentation Library",
    description:
      "Official documentation for FortiGate firewalls, VPNs, SD-WAN, and network security configurations.",
    url: "https://docs.fortinet.com/",
    citation: "Fortinet Docs",
  },
  {
    title: "Palo Alto Networks Documentation",
    description:
      "Comprehensive official guides for firewall configuration, network security, and threat prevention.",
    url: "https://docs.paloaltonetworks.com/",
    citation: "Palo Alto Docs",
  },
  {
    title: "AWS Networking & Content Delivery Docs",
    description:
      "Official AWS documentation for VPC, Route 53, CloudFront, and hybrid networking solutions.",
    url: "https://docs.aws.amazon.com/networking/",
    citation: "AWS Docs",
  },
  {
    title: "Microsoft Azure Networking Documentation",
    description:
      "Official Azure guide for VNets, NSGs, Peering, VPN Gateway, and ExpressRoute configurations.",
    url: "https://learn.microsoft.com/en-us/azure/networking/",
    citation: "Azure Docs",
  },
  {
    title: "Google Cloud Networking Documentation",
    description:
      "Authoritative Google Cloud networking guide covering VPC, peering, firewalls, and hybrid connectivity.",
    url: "https://cloud.google.com/docs/networking",
    citation: "GCP Docs",
  },
  {
    title: "Ansible for Network Automation",
    description:
      "Official documentation for using Ansible to automate network device configurations.",
    url: "https://docs.ansible.com/ansible/latest/network/",
    citation: "Ansible Docs",
  },
  {
    title: "Terraform Network Provider Docs",
    description:
      "Official Terraform documentation for managing network infrastructure as code.",
    url: "https://developer.hashicorp.com/terraform/docs",
    citation: "Terraform Docs",
  },
  {
    title: "Wireshark User Guide",
    description:
      "Official documentation for packet capture, analysis, and troubleshooting network issues.",
    url: "https://www.wireshark.org/docs/",
    citation: "Wireshark Docs",
  },
  {
    title: "Network+ (CompTIA) Official Exam Objectives",
    description:
      "Official CompTIA documentation outlining foundational networking concepts and practical skills.",
    url: "https://www.comptia.org/certifications/network",
    citation: "CompTIA Docs",
  },
];

export default function NetworkingDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🌐 Official Networking Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          The most trusted official documentation sources for core networking technologies — including standards, routing, switching, cloud networking, automation, and security.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>

              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
