// components/FAQ.jsx
import React from "react";

const faqs = [
  {
    question: "What is the difference between TCP and UDP?",
    answer:
      "TCP (Transmission Control Protocol) is connection-oriented, ensuring reliable data delivery with error checking and retransmission. UDP (User Datagram Protocol) is connectionless, faster, and used for applications like streaming where occasional packet loss is acceptable.",
  },
  {
    question: "What is a VLAN and why is it used?",
    answer:
      "A VLAN (Virtual LAN) is a logical partition of a network that groups devices together, regardless of their physical location. It improves security, reduces broadcast traffic, and simplifies network management.",
  },
  {
    question: "What is the difference between a router and a switch?",
    answer:
      "A switch operates at Layer 2 (Data Link) and forwards frames based on MAC addresses within the same network. A router operates at Layer 3 (Network) and routes packets between different networks using IP addresses.",
  },
  {
    question: "What is the purpose of subnetting?",
    answer:
      "Subnetting divides a larger network into smaller subnets, improving network performance, enhancing security, and enabling efficient IP address allocation.",
  },
  {
    question: "What is the difference between public and private IP addresses?",
    answer:
      "Public IPs are globally routable on the Internet, while private IPs are used within local networks and cannot be routed on the Internet. NAT is used to map private IPs to public IPs.",
  },
  {
    question: "What is an ACL in networking?",
    answer:
      "An ACL (Access Control List) is a set of rules applied on routers or switches to permit or deny network traffic based on IP addresses, protocols, or ports. It is used to enhance network security.",
  },
  {
    question: "What is the difference between OSPF and BGP?",
    answer:
      "OSPF is an interior gateway protocol (IGP) used within a single organization or autonomous system, providing fast convergence. BGP is an exterior gateway protocol (EGP) used to exchange routing information between different autonomous systems on the Internet.",
  },
  {
    question: "What is NAT and why is it important?",
    answer:
      "NAT (Network Address Translation) translates private IP addresses to public IP addresses for Internet communication. It conserves public IP addresses and adds a layer of security by hiding internal network structure.",
  },
  {
    question: "What is the difference between SDN and traditional networking?",
    answer:
      "SDN (Software-Defined Networking) decouples the control plane from the data plane, allowing centralized management and programmability. Traditional networking has control and data planes integrated in each device, making configuration manual and device-specific.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Answers to common questions for learners aiming to become industry-ready network engineers.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
