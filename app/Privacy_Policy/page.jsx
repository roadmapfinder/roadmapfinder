'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

 const metadata = {
  title: 'Privacy Policy - RoadmapFinder.tech',
  description: 'Privacy Policy for RoadmapFinder.tech - Your trusted edtech platform for learning tech roadmaps, AI tools, and YouTube resources.',
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function PrivacyPolicy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  const sections = [
    {
      title: 'Introduction',
      content: `RoadmapFinder.tech ("we," "us," or "our") operates as an educational platform dedicated to helping learners discover and explore tech roadmaps, discover AI tools, and find curated YouTube resources. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this policy carefully. If you do not agree with our policies and practices, please do not use our services.`,
    },
    {
      title: 'Information We Collect',
      content: `We collect information in the following ways: (1) Information you provide directly, including account registration data, contact information, and communication preferences; (2) Automatically collected information through cookies, log files, and tracking technologies, including device type, browser information, IP address, and browsing behavior; (3) Information from third-party integrations such as Google Analytics and Google AdSense; (4) Aggregated and anonymized data to improve our services and user experience.`,
    },
    {
      title: 'How We Use Information',
      content: `Your information is used to: (1) Provide, maintain, and improve our platform and services; (2) Personalize your learning experience and recommend relevant roadmaps and resources; (3) Send educational updates, newsletters, and service-related announcements; (4) Monitor and analyze usage patterns to enhance functionality; (5) Comply with legal obligations and protect against fraud; (6) Communicate with you regarding inquiries, support requests, and feedback.`,
    },
    {
      title: 'Google AdSense & Analytics',
      content: `Our website uses Google AdSense to display contextual advertisements and Google Analytics to track user behavior and platform performance. Google may use cookies to serve ads based on your prior visits to our site and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and other sites on the Internet. You can opt out of personalized advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads. Additionally, we comply with the Google AdSense policies to ensure a safe and transparent advertising experience.`,
    },
    {
      title: 'Data Security & Protection',
      content: `We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These include secure socket layer (SSL) encryption, firewalls, and regular security audits. However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of any login credentials.`,
    },
    {
      title: 'Third-Party Links Disclaimer',
      content: `Our platform may contain links to third-party websites, including YouTube, educational resources, and AI tool repositories. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites before providing personal information or using their services. Your use of third-party platforms is governed by their respective terms and privacy policies.`,
    },
    {
      title: "Children's Privacy",
      content: `RoadmapFinder.tech is intended for users aged 13 and above. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information and terminate the child's account. Parents or guardians who believe their child has provided information to our platform should contact us immediately at roadmapfinder25@gmail.com.`,
    },
    {
      title: 'Your Data Rights',
      content: `Depending on your location, you may have the following rights: (1) Right to access your personal data; (2) Right to rectify or correct inaccurate information; (3) Right to request deletion of your data; (4) Right to restrict processing; (5) Right to data portability; (6) Right to opt-out of marketing communications. To exercise any of these rights, please contact us at roadmapfinder25@gmail.com with your request and relevant identification.`,
    },
    {
      title: 'Updates to This Policy',
      content: `We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date below. Your continued use of RoadmapFinder.tech following the posting of revised Privacy Policy means that you accept and agree to the changes. We encourage you to review this policy regularly to stay informed.`,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          custom={0}
          variants={fadeInVariants}
        >
          <h1 className="mb-3 text-4xl font-bold text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            RoadmapFinder.tech
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last Updated: October 2025
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="rounded-2xl bg-white shadow-lg"
          custom={1}
          variants={fadeInVariants}
        >
          <div className="space-y-12 p-8 sm:p-12">
            {/* Sections */}
            {sections.map((section, index) => (
              <motion.section
                key={index}
                custom={index + 2}
                variants={fadeInVariants}
                className="border-l-4 border-blue-400 pl-6 py-4"
              >
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
                  {section.title}
                </h2>
                <p className="text-base leading-7 text-gray-700 sm:text-lg">
                  {section.content}
                </p>
              </motion.section>
            ))}

            {/* Contact Section */}
            <motion.section
              custom={sections.length + 2}
              variants={fadeInVariants}
              className="rounded-lg bg-blue-50 p-8"
            >
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
                Contact Us
              </h2>
              <p className="mb-6 text-base leading-7 text-gray-700 sm:text-lg">
                If you have questions about this Privacy Policy, wish to exercise your data rights, or need to report a privacy concern, please contact us:
              </p>
              <div className="space-y-3 text-base text-gray-700 sm:text-lg">
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:roadmapfinder25@gmail.com"
                    className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    roadmapfinder25@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Platform:</strong> RoadmapFinder.tech
                </p>
              </div>
            </motion.section>

            {/* Acknowledgment Section */}
            <motion.section
              custom={sections.length + 3}
              variants={fadeInVariants}
              className="border-t-2 border-gray-200 pt-8"
            >
              <p className="text-center text-sm leading-7 text-gray-600 sm:text-base">
                By using RoadmapFinder.tech, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of our services immediately.
              </p>
            </motion.section>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-12 text-center"
          custom={sections.length + 4}
          variants={fadeInVariants}
        >
          <p className="text-sm text-gray-500">
            © 2025 RoadmapFinder.tech — All Rights Reserved.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            This Privacy Policy is effective as of October 2025 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on the website.
          </p>
        </motion.footer>
      </motion.div>
    </main>
  );
}