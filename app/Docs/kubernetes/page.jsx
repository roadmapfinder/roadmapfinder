import React from 'react';

const KubernetesTutorial = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Kubernetes Tutorial: Deploying a Full-Stack MERN App
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This tutorial provides a hands-on approach to learning Kubernetes by deploying a full-stack 
          application with MongoDB and MongoDB Express. Instead of theoretical explanations, this guide 
          focuses on practical implementation using official Docker images.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Docker installed and running</li>
          <li>Basic understanding of containerization concepts</li>
          <li>Familiarity with YAML syntax (recommended)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Core Kubernetes Concepts
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          What is Kubernetes?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Kubernetes (K8s) is an open-source system for automatically deploying, scaling, and managing 
          containerized applications. It serves as an orchestration tool that manages thousands of 
          containers across multiple nodes.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Key Components
        </h3>

        <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">
          kubectl
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Command-line interface to interact with Kubernetes clusters. This is your primary tool for 
          managing Kubernetes resources.
        </p>

        <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">
          Minikube
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          A lightweight Kubernetes implementation that creates a local cluster for learning and development. 
          It runs the entire Kubernetes ecosystem in a single container.
        </p>

        <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">
          Architecture Overview
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong>Control Plane:</strong> The master node that manages the entire cluster</li>
          <li><strong>Worker Nodes:</strong> Nodes that run your actual applications</li>
          <li><strong>Pods:</strong> The smallest deployable units that wrap your containers</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Essential Kubernetes Objects
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          1. Secrets
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Store sensitive data like passwords and API keys in base64-encoded format.
        </p>
        <p className="text-sm font-medium text-gray-600 mb-2">
          <strong>File: secret.yaml</strong>
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>{`apiVersion: v1
kind: Secret
metadata:
  name: mongodb-secret
type: Opaque
data:
  mongo-user: <base64-encoded-username>
  mongo-password: <base64-encoded-password>`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          2. ConfigMap
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Store non-confidential configuration data that can be referenced by other components.
        </p>
        <p className="text-sm font-medium text-gray-600 mb-2">
          <strong>File: mongo-config.yaml</strong>
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>{`apiVersion: v1
kind: ConfigMap
metadata:
  name: mongo-config
data:
  mongo-url: mongodb-service`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          3. Deployment
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Defines how your application should be deployed and managed.
        </p>
        <p className="text-sm font-medium text-gray-600 mb-2">
          <strong>File: mongo-app.yaml</strong>
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongodb-deployment
  labels:
    app: mongodb
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongodb
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
      - name: mongodb
        image: mongo:6.0
        ports:
        - containerPort: 27017
        env:
        - name: MONGO_INITDB_ROOT_USERNAME
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-user
        - name: MONGO_INITDB_ROOT_PASSWORD
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-password`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          4. Service
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Exposes your deployment to other components or external traffic.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>{`---
apiVersion: v1
kind: Service
metadata:
  name: mongodb-service
spec:
  selector:
    app: mongodb
  ports:
  - protocol: TCP
    port: 27017
    targetPort: 27017`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          5. NodePort Service
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Exposes your application to external traffic on a specific port range (30000-32767).
        </p>
        <p className="text-sm font-medium text-gray-600 mb-2">
          <strong>File: web-app.yaml</strong>
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>{`apiVersion: v1
kind: Service
metadata:
  name: web-app-service
spec:
  type: NodePort
  selector:
    app: web-app
  ports:
  - protocol: TCP
    port: 8081
    targetPort: 8081
    nodePort: 30100`}</code>
        </pre>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Installation Steps
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          1. Install kubectl
        </h3>
        <p className="text-gray-700 font-medium mb-2">macOS (Homebrew):</p>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-4">
          <code>brew install kubectl</code>
        </pre>
        <p className="text-gray-700 font-medium mb-2">Windows (Chocolatey):</p>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>choco install kubernetes-cli</code>
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          2. Install Minikube
        </h3>
        <p className="text-gray-700 font-medium mb-2">macOS (Homebrew):</p>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-4">
          <code>brew install minikube</code>
        </pre>
        <p className="text-gray-700 font-medium mb-2">Windows (Chocolatey):</p>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>choco install minikube</code>
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          3. Start Minikube
        </h3>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>minikube start</code>
        </pre>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Deployment Process
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Step 1: Deploy Secrets and ConfigMaps
        </h3>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>{`kubectl apply -f secret.yaml
kubectl apply -f mongo-config.yaml`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Step 2: Deploy MongoDB
        </h3>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>kubectl apply -f mongo-app.yaml</code>
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Step 3: Deploy Web Application
        </h3>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>kubectl apply -f web-app.yaml</code>
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Step 4: Access Your Application
        </h3>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>{`# Get Minikube IP
minikube ip

# Expose service (for recent Minikube versions)
minikube service web-app-service`}</code>
        </pre>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Useful Commands
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Monitoring Resources
        </h3>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>{`# View all pods
kubectl get pods

# View pods with detailed information
kubectl get pods -o wide

# View all services
kubectl get svc

# View secrets
kubectl get secrets

# View config maps
kubectl get configmap`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Cleanup Commands
        </h3>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>{`# Delete all deployments
kubectl delete deployment --all

# Delete all services
kubectl delete service --all

# Delete all secrets
kubectl delete secret --all

# Delete all config maps
kubectl delete configmap --all`}</code>
        </pre>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Common Issues and Solutions
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Issue: Service Connection Problems
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Solution:</strong> Ensure metadata names in your configuration files match the references 
          in other files. For example, if your secret metadata is named mongodb-secret, reference it as 
          mongodb-secret in your deployment files.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Issue: NodePort Not Accessible
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          <strong>Solution:</strong> Use the minikube service command instead of direct IP access:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg border text-sm overflow-x-auto mb-6">
          <code>minikube service web-app-service</code>
        </pre>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Application Architecture
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          The deployed application consists of:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>MongoDB Database:</strong> Stores application data</li>
          <li><strong>MongoDB Express:</strong> Web-based admin interface for MongoDB</li>
          <li><strong>Internal Communication:</strong> Web app connects to database via Kubernetes services</li>
          <li><strong>External Access:</strong> Users access the application through NodePort service</li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Key Benefits of This Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Scalability:</strong> Easily increase replicas by changing the replicas field</li>
          <li><strong>Portability:</strong> Same configuration works across different environments</li>
          <li><strong>Service Discovery:</strong> Applications find each other using service names</li>
          <li><strong>Configuration Management:</strong> Centralized secrets and config management</li>
          <li><strong>Zero Downtime:</strong> Rolling updates without application interruption</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Next Steps
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          This tutorial covers the basics of Kubernetes deployment. To advance further, explore:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Persistent Volumes for database storage</li>
          <li>Ingress controllers for advanced routing</li>
          <li>Helm charts for package management</li>
          <li>Monitoring and logging solutions</li>
          <li>Production-ready cluster setup on cloud providers</li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Document Version:</strong> 1.0</p>
          <p className="mb-1"><strong>Last Updated:</strong> August 28, 2025</p>
          <p><strong>Format:</strong> React Component</p>
        </div>
      </article>
    </div>
  );
};

export default KubernetesTutorial;