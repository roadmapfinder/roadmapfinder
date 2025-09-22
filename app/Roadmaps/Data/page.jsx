"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Database, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const DataEngineeringRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 0,
      title: "Essentials",
      subtitle: "Foundation Stage (0–6 weeks)",
      description: "Remove friction so you can focus on data tools",
      color: "bg-gray-600",
      sections: [
        {
          title: "Python Fundamentals",
          items: [
            "Python basics → Variables, data types, control structures, functions",
            "Idiomatic code → List comprehensions, generators, decorators",
            "Environment management → virtualenv, poetry, pip package management",
            "Practice project → Write scripts to parse CSV/JSON and produce summaries",
            "Libraries → pandas, numpy for data manipulation"
          ]
        },
        {
          title: "SQL Mastery",
          items: [
            "Core queries → SELECT, WHERE, GROUP BY, ORDER BY",
            "Advanced joins → INNER, LEFT, RIGHT, FULL OUTER joins",
            "Window functions → ROW_NUMBER(), RANK(), LAG(), LEAD()",
            "CTEs → Common Table Expressions for complex queries",
            "Aggregation → SUM, COUNT, AVG, advanced grouping",
            "Indexes → Understanding performance optimization",
            "Practice → Solve 100 SQL problems (LeetCode/Mode Analytics/Strata)"
          ]
        },
        {
          title: "Linux & Development Tools",
          items: [
            "Linux navigation → cd, ls, find, grep command mastery",
            "Text processing → awk, sed for data manipulation",
            "Automation → cron jobs, shell scripting",
            "Remote access → SSH, secure file transfer",
            "Git + GitHub → branching, pull requests, CI basics",
            "Practice project → Schedule a daily ETL script"
          ]
        },
        {
          title: "Data Mathematics",
          items: [
            "Probability basics → Distributions, sampling methods",
            "Statistics fundamentals → Mean, median, standard deviation",
            "Error metrics → MSE, RMSE, MAE for model evaluation",
            "Precision and recall → Classification metrics understanding",
            "Data quality concepts → Completeness, accuracy, consistency"
          ]
        }
      ]
    },
    {
      id: 1,
      title: "Core Data Engineering",
      subtitle: "Intermediate Level (1–3 months)",
      description: "Build reliable batch pipelines and data stores",
      color: "bg-blue-500",
      sections: [
        {
          title: "Apache Spark Mastery",
          items: [
            "Spark architecture → Driver, executors, cluster managers",
            "DataFrame API → Transformations, actions, lazy evaluation",
            "PySpark → Python API for Spark programming",
            "Spark SQL → SQL queries on distributed data",
            "Performance → Partitioning strategies, caching, broadcast joins",
            "Deployment → Local, Databricks, EMR, Dataproc environments"
          ]
        },
        {
          title: "Storage & File Formats",
          items: [
            "Columnar formats → Parquet, Avro, ORC advantages",
            "Compression benefits → Storage efficiency, query performance",
            "Predicate pushdown → Query optimization techniques",
            "Schema evolution → Handling changing data structures",
            "Partitioning strategies → Time-based, value-based partitioning"
          ]
        },
        {
          title: "Lakehouse Architecture",
          items: [
            "Delta Lake → ACID transactions, time travel, schema enforcement",
            "Apache Iceberg → Table format for large analytic datasets",
            "Apache Hudi → Incremental data processing, upserts",
            "Metadata management → Table statistics, optimization",
            "ACID properties → Atomicity, Consistency, Isolation, Durability"
          ]
        },
        {
          title: "Data Modeling",
          items: [
            "Star schema → Fact tables, dimension tables design",
            "Dimensional modeling → Kimball methodology, data warehousing",
            "OLTP vs OLAP → Transaction vs analytical processing",
            "Slowly changing dimensions → SCD Type 1, 2, 3 strategies",
            "Data vault modeling → Hub, link, satellite architecture"
          ]
        },
        {
          title: "Hands-on Projects",
          items: [
            "Batch ETL pipeline → S3/GCS ingestion to processed Parquet tables",
            "PySpark transformations → Data cleaning, aggregations, joins",
            "Partitioned data lakes → Organized storage for analytics",
            "Performance optimization → Measure time/cost improvements",
            "Documentation → GitHub repos with clear READMEs"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Orchestration & CI/CD",
      subtitle: "Production Ready (1–2 months)",
      description: "Make pipelines production-grade and maintainable",
      color: "bg-green-500",
      sections: [
        {
          title: "Workflow Orchestration",
          items: [
            "Apache Airflow → DAGs, operators, sensors, XComs",
            "Dagster → Asset-aware orchestration, better local development",
            "Dependencies management → Task scheduling, failure handling",
            "Backfills → Historical data processing strategies",
            "Monitoring → Pipeline health, SLA tracking, alerting"
          ]
        },
        {
          title: "Testing & Quality",
          items: [
            "Unit tests → SQL and Python code validation",
            "Integration tests → End-to-end pipeline testing",
            "Data quality → Great Expectations for validation checkpoints",
            "Schema validation → Data contract enforcement",
            "Regression testing → Preventing data pipeline breaks"
          ]
        },
        {
          title: "CI/CD for Data",
          items: [
            "GitHub Actions → Automated testing and deployment",
            "GitLab CI → Pipeline automation, code quality checks",
            "Deployment strategies → Blue-green, rolling deployments",
            "Environment management → Dev, staging, production pipelines",
            "Code reviews → Data engineering best practices"
          ]
        },
        {
          title: "Infrastructure as Code",
          items: [
            "Terraform → Cloud infrastructure provisioning",
            "Cloud resources → Buckets, clusters, IAM management",
            "Version control → Infrastructure versioning and rollbacks",
            "Resource optimization → Cost management, scaling strategies",
            "Security → Access controls, encryption, compliance"
          ]
        },
        {
          title: "Advanced Projects",
          items: [
            "Production pipeline → Airflow/Dagster DAG with Spark ETL",
            "Quality validation → Great Expectations integration",
            "Cloud deployment → Terraform-provisioned infrastructure",
            "CI/CD implementation → Automated testing and deployment",
            "Monitoring dashboard → Pipeline health visualization"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Streaming & Real-time",
      subtitle: "Advanced Skills (2–3 months)",
      description: "Build low-latency pipelines and streaming architectures",
      color: "bg-purple-500",
      sections: [
        {
          title: "Event Architecture",
          items: [
            "Event-driven design → Producers, consumers, topics",
            "Message queues → Event ordering, partitioning strategies",
            "Delivery semantics → At-most-once, at-least-once, exactly-once",
            "Event sourcing → Immutable event logs, state reconstruction",
            "CQRS patterns → Command Query Responsibility Segregation"
          ]
        },
        {
          title: "Apache Kafka",
          items: [
            "Kafka fundamentals → Brokers, topics, partitions, replicas",
            "Producer/Consumer APIs → Message publishing and consumption",
            "Kafka Connect → Source and sink connectors",
            "Schema Registry → Avro, Protobuf schema management",
            "Stream processing → Kafka Streams, ksqlDB for SQL on streams"
          ]
        },
        {
          title: "Stream Processing Engines",
          items: [
            "Apache Flink → Stateful stream processing, event time",
            "Windowing → Tumbling, sliding, session windows",
            "State management → Checkpoints, savepoints, fault tolerance",
            "Watermarks → Late data handling, event time processing",
            "Materialize → Streaming database, incremental views"
          ]
        },
        {
          title: "Architecture Patterns",
          items: [
            "Lambda architecture → Batch and speed layer combination",
            "Kappa architecture → Stream-only processing approach",
            "Microservices → Event-driven service communication",
            "Data mesh → Decentralized data ownership",
            "Real-time analytics → Low-latency dashboard updates"
          ]
        },
        {
          title: "Streaming Projects",
          items: [
            "End-to-end streaming → Producer to consumer with transformations",
            "Real-time analytics → Kafka + Flink + warehouse integration",
            "Event sourcing system → Immutable event log implementation",
            "Stream joins → Multiple data stream correlation",
            "Real-time dashboard → Live data visualization"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Cloud Data Platforms",
      subtitle: "Enterprise Scale (1–2 months)",
      description: "Master managed services and cloud-native solutions",
      color: "bg-red-500",
      sections: [
        {
          title: "Google Cloud Platform",
          items: [
            "BigQuery → Serverless data warehouse, SQL analytics",
            "Cloud Storage → Data lake storage, lifecycle policies",
            "Dataflow → Apache Beam for batch and stream processing",
            "Cloud Composer → Managed Apache Airflow service",
            "Pub/Sub → Real-time messaging service"
          ]
        },
        {
          title: "Amazon Web Services",
          items: [
            "Amazon Redshift → Columnar data warehouse service",
            "AWS Glue → ETL service with data catalog",
            "Amazon Athena → Serverless query service",
            "EMR → Managed Hadoop/Spark clusters",
            "Kinesis → Real-time data streaming platform"
          ]
        },
        {
          title: "Snowflake Platform",
          items: [
            "Architecture → Separation of storage and compute",
            "Virtual warehouses → Scalable compute resources",
            "Data sharing → Secure multi-tenant data exchange",
            "Time travel → Historical data access and recovery",
            "Zero-copy cloning → Instant data environment creation"
          ]
        },
        {
          title: "Platform Integration",
          items: [
            "Multi-cloud strategy → Vendor lock-in avoidance",
            "Cost optimization → Resource scheduling, auto-scaling",
            "Security → IAM, encryption, compliance frameworks",
            "Monitoring → Cloud-native observability tools",
            "Disaster recovery → Backup and recovery strategies"
          ]
        },
        {
          title: "Certification Prep",
          items: [
            "Google Cloud Professional Data Engineer → GCP data expertise",
            "AWS Certified Big Data → AWS data services mastery",
            "Databricks Certified Data Engineer → Lakehouse specialist",
            "SnowPro Core → Snowflake platform certification",
            "Practice exams → Hands-on preparation and study guides"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Governance & Advanced Topics",
      subtitle: "Expert Level (Ongoing)",
      description: "Data governance, observability, security, and system design",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Data Governance",
          items: [
            "Data lineage → OpenLineage, Marquez, automated tracking",
            "Data catalogs → Metadata management, data discovery",
            "Data quality → Automated validation, anomaly detection",
            "Privacy compliance → GDPR, CCPA, data anonymization",
            "Access controls → RBAC, attribute-based access control"
          ]
        },
        {
          title: "Observability & Monitoring",
          items: [
            "Pipeline monitoring → Metrics, logs, distributed tracing",
            "SLA/SLI management → Service level objectives",
            "Alerting systems → PagerDuty, Slack integration",
            "Cost monitoring → FinOps for data platforms",
            "Performance optimization → Query tuning, resource allocation"
          ]
        },
        {
          title: "Advanced Architecture",
          items: [
            "System design → Scalability, fault tolerance, consistency",
            "Capacity planning → Growth forecasting, resource scaling",
            "Multi-region deployment → Global data distribution",
            "Disaster recovery → RTO/RPO planning, backup strategies",
            "Performance tuning → Spark optimization, query acceleration"
          ]
        },
        {
          title: "Security & Compliance",
          items: [
            "Data encryption → At-rest and in-transit protection",
            "Identity management → SSO, MFA, service accounts",
            "Audit logging → Compliance reporting, access tracking",
            "Data masking → PII protection, synthetic data generation",
            "Regulatory frameworks → SOX, HIPAA, industry standards"
          ]
        },
        {
          title: "Master Projects",
          items: [
            "Complete data platform → Ingestion to visualization",
            "Real-time ML pipeline → Feature store, model serving",
            "Data mesh implementation → Domain-driven architecture",
            "Compliance framework → End-to-end governance solution",
            "Cost optimization study → 40%+ cost reduction demonstration"
          ]
        }
      ]
    }
  ];

  // Handle PDF download with loading state
  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      const result = await downloadRoadmapPDF(phases);
      if (result.success) {
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
      }
    } catch (error) {
      console.error('PDF download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'documentation':
        return <Docs />;
      case 'projects':
        return <Projects />;
      default:
        return (
          <div className="relative">
            {/* Timeline */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"></div>
                  )}

                  {/* Phase Card */}
                  <div className="flex flex-col items-center">
                    {/* Phase Header */}
                    <div className="text-center mb-4 md:mb-6 px-4">
                      <div className={`inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`}>
                        Stage {phase.id}: {phase.title}
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
                    </div>

                    {/* Phase Content */}
                    <div className="w-full max-w-5xl px-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                        {phase.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                              {section.title}
                            </h3>
                            <ol className="space-y-2">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                  <span className="font-medium text-gray-900">{itemIndex + 1}.</span> {item}
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicators */}
                    {index < phases.length - 1 && (
                      <div className="mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4">
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform -rotate-12">
                          Stage {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Stage {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Timeline */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                📊 Suggested Learning Timeline
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">🏃‍♂️ Full-Time Learning (12 months)</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 0–2 months: Foundations + SQL + Python + small batch project</li>
                    <li>• 2–5 months: Spark + lakehouse tables + Airflow/Dagster + dbt</li>
                    <li>• 5–8 months: Streaming (Kafka + Flink) + cloud DW integrations</li>
                    <li>• 8–12 months: Advanced system design + governance + portfolio</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">🚶‍♂️ Part-Time Learning (18-24 months)</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Extend each stage by 50-75% additional time</li>
                    <li>• Focus on one major project per 3-month period</li>
                    <li>• Join data engineering communities for support</li>
                    <li>• Practice coding challenges on weekends</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Portfolio Requirements */}
            <div className="text-center mt-8 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🏆 Must-Have Portfolio Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-600 mb-2">End-to-end Lakehouse</h3>
                  <p className="text-sm text-gray-600">Ingest → Delta/Iceberg → dbt → BigQuery/Snowflake → BI dashboard</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">Real-time Analytics</h3>
                  <p className="text-sm text-gray-600">Kafka → Flink transforms → Materialize → live dashboard</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">Data Quality & Lineage</h3>
                  <p className="text-sm text-gray-600">Great Expectations validations + lineage metadata + alerting</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <h3 className="font-semibold text-red-600 mb-2">Cost Optimization</h3>
                  <p className="text-sm text-gray-600">Query tuning with before/after performance & cost metrics</p>
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🚀 Congratulations! You're Data Engineering Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the Data Engineering Mastery Roadmap and are now ready to build enterprise-scale data platforms and work at top tech companies.
              </p>
              <div className="bg-white p-4 rounded-lg border border-purple-300 mt-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎯 Interview & Hiring Checklist</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ 1-3 public projects with runnable code + clear READMEs</li>
                  <li>• ✅ Architecture diagrams + demo videos for each project</li>
                  <li>• ✅ At least one pipeline with automated tests + monitoring</li>
                  <li>• ✅ CV with quantified impact (runtime improvements, cost savings)</li>
                  <li>• ✅ Prepare to whiteboard system designs and explain failure modes</li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Database className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Data Engineering <span className="text-blue-600">Mastery Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`}>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit">
            <button
              onClick={() => {
                setActiveTab('roadmap');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Database size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText size={18} className="mr-2" />
              Documentation
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'projects'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen size={18} className="mr-2" />
              Projects
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default DataEngineeringRoadmap;