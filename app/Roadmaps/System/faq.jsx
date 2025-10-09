import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is system design, and why is it important?",
    answer:
      "System design is the process of defining the architecture, components, and data flow of a software system to meet specific requirements. It ensures scalability, reliability, and maintainability in large-scale applications.",
  },
  {
    question: "How do you design a scalable system?",
    answer:
      "To design a scalable system, identify potential bottlenecks and use techniques like load balancing, caching, database sharding, asynchronous processing, and horizontal scaling to handle increasing traffic efficiently.",
  },
  {
    question: "What is the difference between horizontal and vertical scaling?",
    answer:
      "Vertical scaling means upgrading existing machines (more CPU, RAM), while horizontal scaling means adding more machines or instances. Horizontal scaling is generally preferred for distributed, high-availability systems.",
  },
  {
    question: "What is a load balancer and how does it work?",
    answer:
      "A load balancer distributes incoming traffic across multiple servers to ensure no single server becomes a bottleneck. It improves performance and reliability by monitoring health and rerouting traffic automatically.",
  },
  {
    question: "How do databases handle large-scale data efficiently?",
    answer:
      "Databases use indexing, replication, partitioning, and caching to handle massive amounts of data efficiently. Distributed databases like Cassandra or MongoDB are designed to scale horizontally across multiple nodes.",
  },
  {
    question: "What is caching and why is it important?",
    answer:
      "Caching stores frequently accessed data in memory (e.g., Redis, Memcached) to reduce database load and improve response times. It’s crucial for performance in high-traffic applications.",
  },
  {
    question: "What is the CAP theorem?",
    answer:
      "The CAP theorem states that a distributed system can only guarantee two of the following three: Consistency, Availability, and Partition Tolerance. For example, systems like MongoDB prioritize availability and partition tolerance (AP).",
  },
  {
    question: "How do you design a URL shortening service like bit.ly?",
    answer:
      "A URL shortener involves generating unique short keys using hashing or base62 encoding, storing them in a database, and redirecting users from short URLs to the original URLs. Scalability involves caching and database sharding.",
  },
  {
    question: "What is the difference between monolithic and microservices architecture?",
    answer:
      "A monolithic architecture keeps all components in a single codebase, making deployment simpler but scaling harder. Microservices break the system into small, independent services, enabling flexibility and independent scaling.",
  },
  {
    question: "How do you ensure high availability in a distributed system?",
    answer:
      "High availability is achieved using redundancy, failover mechanisms, replication, and health checks. Load balancers and multi-region deployments also help ensure uptime during failures.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-12 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        System Design FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 dark:text-gray-300 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
