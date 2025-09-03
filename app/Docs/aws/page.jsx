"use client";
import React from "react";

const AWSCoursePiyushGarg = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-yellow-500 pb-4">
          AWS Essentials — by Piyush Garg
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A <strong>practical YouTube playlist</strong> by{" "}
          <strong>Piyush Garg</strong>, introducing and exploring{" "}
          <em>Amazon Web Services (AWS)</em> with a focus on{" "}
          <strong>backend development, serverless architectures, and cloud
          deployment</strong>. The series emphasizes{" "}
          <em>hands-on learning</em> with services like{" "}
          <strong>S3, EC2, Lambda, and ECS</strong>, making it highly suitable
          for developers looking to integrate cloud services into real-world
          projects.
        </p>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Modules Covered
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
          <li>
            <strong>AWS S3 with Node.js</strong>
            <ul className="list-disc list-inside ml-6">
              <li>File uploads/downloads in applications</li>
              <li>IAM roles and permissions for S3 buckets</li>
              <li>Integrating S3 storage with Node.js apps</li>
            </ul>
          </li>
          <li>
            <strong>EC2 Basics</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Launching and configuring EC2 instances</li>
              <li>SSH setup and instance management</li>
              <li>Deploying Node.js apps on EC2</li>
            </ul>
          </li>
          <li>
            <strong>Security Groups</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Firewall rules for inbound/outbound traffic</li>
              <li>Access control for applications</li>
            </ul>
          </li>
          <li>
            <strong>Serverless & AWS Lambda</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Monolithic vs Serverless architectures</li>
              <li>Building and deploying AWS Lambda functions</li>
              <li>Using Lambda for event-driven development</li>
            </ul>
          </li>
          <li>
            <strong>Container Deployment (ECS)</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Deploying Docker containers to AWS ECS</li>
              <li>Node.js container integration</li>
              <li>Scaling applications with ECS</li>
            </ul>
          </li>
        </ol>

        {/* Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Follow the playlist sequentially to grasp AWS concepts.</li>
          <li>
            Practice hands-on using the <strong>AWS Free Tier</strong> to
            replicate setups (S3 buckets, EC2 instances, Lambda functions).
          </li>
          <li>
            Combine modules — for example,{" "}
            <em>store files in S3 from a Node.js app deployed on EC2 or Lambda</em>.
          </li>
          <li>
            Experiment with real-world projects by integrating multiple AWS
            services.
          </li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Understand and work with <strong>core AWS services</strong> (S3,
            EC2, Lambda, ECS).
          </li>
          <li>
            Gain confidence in deploying apps on{" "}
            <strong>server-based and serverless infrastructures</strong>.
          </li>
          <li>
            Build <strong>cloud-ready applications</strong> that follow AWS best
            practices.
          </li>
          <li>
            Strengthen your portfolio with projects demonstrating{" "}
            <strong>cloud integration</strong>.
          </li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Piyush Garg’s <strong>AWS Playlist</strong> is a{" "}
          <em>beginner-to-intermediate friendly</em> learning resource that
          balances <strong>concepts and practical application</strong>. Covering
          essential AWS services, it equips learners to{" "}
          <strong>deploy, scale, and manage modern cloud applications</strong>.
          Perfect for developers aiming to{" "}
          <em>level up their backend and cloud skills</em>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> Piyush Garg
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube (Playlist: Amazon Web Services – AWS)
          </p>
          <p className="mb-1">
            <strong>Format:</strong> Module-based video tutorials
          </p>
          <p>
            <strong>Focus:</strong> Practical AWS usage for backend development,
            serverless, and container deployments
          </p>
        </div>
      </article>
    </div>
  );
};

export default AWSCoursePiyushGarg;
