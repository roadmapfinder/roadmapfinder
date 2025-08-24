import React from 'react';

export default function DatabaseEngineerRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Computer Science Basics", 
          category: "Fundamentals",
          details: "Data structures (arrays, hash maps, trees, graphs), algorithms, operating systems (processes, memory, concurrency)"
        },
        { 
          step: "Step - 2", 
          topic: "Networking & Math", 
          category: "Core Knowledge",
          details: "TCP/IP, HTTP, DNS basics, set theory, relations, probability & statistics, Boolean algebra"
        },
        { 
          step: "Step - 3", 
          topic: "Programming Language", 
          category: "Development",
          details: "Master Python (widely used in DB tools), Java, Go, or C++ for database development and automation"
        },
        { 
          step: "Step - 4", 
          topic: "Database Concepts", 
          category: "DB Fundamentals",
          details: "DBMS vs RDBMS vs NoSQL, relational model, keys (Primary, Foreign, Candidate, Composite)"
        },
        { 
          step: "Step - 5", 
          topic: "Indexing & Transactions", 
          category: "Core DB Features",
          details: "B-trees, Hash indexes, Bitmap indexes, ACID properties, normalization (1NF to 5NF)"
        },
        { 
          step: "Step - 6", 
          topic: "SQL Mastery", 
          category: "Query Language",
          details: "DDL, DML, DQL, joins, subqueries, CTEs, window functions, views, triggers, stored procedures"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Deep Database Knowledge",
      steps: [
        { 
          step: "Step - 7", 
          topic: "NoSQL Databases", 
          category: "Database Types",
          details: "Document DB (MongoDB), Key-Value (Redis, DynamoDB), Column-oriented (Cassandra), Graph DB (Neo4j)"
        },
        { 
          step: "Step - 8", 
          topic: "Database Internals", 
          category: "Engine Architecture",
          details: "Storage engines (InnoDB, RocksDB), Write-ahead logging (WAL), buffer pool, query optimizers"
        },
        { 
          step: "Step - 9", 
          topic: "Concurrency & Transactions", 
          category: "Advanced Concepts",
          details: "MVCC, locking mechanisms, deadlock prevention, isolation levels (Read Uncommitted to Serializable)"
        },
        { 
          step: "Step - 10", 
          topic: "Sharding & Replication", 
          category: "Scaling Techniques",
          details: "Master-slave, master-master replication, horizontal vs vertical partitioning, CAP theorem"
        },
        { 
          step: "Step - 11", 
          topic: "Performance Optimization", 
          category: "Tuning",
          details: "Query optimization, EXPLAIN plans, indexing strategies, caching (Redis, Memcached), database tuning"
        },
        { 
          step: "Step - 12", 
          topic: "Database Scaling", 
          category: "High Performance",
          details: "Read replicas, connection pooling, load balancing, distributed databases (CockroachDB, TiDB)"
        },
      ],
    },
    {
      title: "Specialization",
      subtitle: "Data Engineering & Cloud",
      steps: [
        { 
          step: "Step - 13", 
          topic: "ETL Pipelines", 
          category: "Data Processing",
          details: "Extract, Transform, Load workflows, Apache Airflow, dbt, Luigi for data pipeline orchestration"
        },
        { 
          step: "Step - 14", 
          topic: "Data Warehousing", 
          category: "Analytics",
          details: "OLTP vs OLAP, Snowflake, BigQuery, Redshift, star & snowflake schema design"
        },
        { 
          step: "Step - 15", 
          topic: "Data Lakes & Streaming", 
          category: "Big Data",
          details: "Hadoop ecosystem, Apache Kafka for streaming, Spark and Flink for processing"
        },
        { 
          step: "Step - 16", 
          topic: "Cloud Databases", 
          category: "Cloud Platforms",
          details: "AWS (RDS, Aurora, DynamoDB), GCP (Cloud SQL, BigQuery, Spanner), Azure (CosmosDB)"
        },
        { 
          step: "Step - 17", 
          topic: "Monitoring & Observability", 
          category: "Operations",
          details: "Prometheus, Grafana, Datadog for monitoring, query performance tracking, logs & metrics"
        },
        { 
          step: "Step - 18", 
          topic: "Security & Recovery", 
          category: "Data Protection",
          details: "Authentication, authorization, RBAC, encryption, backup strategies, disaster recovery"
        },
      ],
    },
    {
      title: "Professional",
      subtitle: "Industry Excellence",
      steps: [
        { 
          step: "Step - 19", 
          topic: "Real-World Projects", 
          category: "Hands-on Experience",
          details: "Banking system with ACID guarantees, e-commerce DB with sharding, social media analytics system"
        },
        { 
          step: "Step - 20", 
          topic: "Advanced Architecture", 
          category: "System Design",
          details: "Distributed database implementation, real-time logging systems, microservices data patterns"
        },
        { 
          step: "Step - 21", 
          topic: "DevOps Integration", 
          category: "Modern Practices",
          details: "CI/CD for database migrations, Kubernetes database operators, infrastructure as code"
        },
        { 
          step: "Step - 22", 
          topic: "Career & Certification", 
          category: "Professional Growth",
          details: "AWS Database Specialty, Google Cloud Data Engineer, Azure Database Admin certifications"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Personal Finance Tracker Database" },
    { level: "Advanced", project: "E-commerce Platform with Sharding" },
    { level: "Specialization", project: "Real-time Analytics Pipeline" },
    { level: "Professional", project: "Distributed Banking System" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-green-500 to-green-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🗄️ 22 Essential Steps • 📊 4 Skill Levels • 💼 Industry Ready</span>
            </div>
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-12 sm:space-y-16">
          {roadmap.map((section, sectionIdx) => (
            <section key={sectionIdx} className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex items-start space-x-8 max-w-6xl mx-auto">
                  {/* Section Title */}
                  <div className="flex-shrink-0">
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
                      <div className="font-bold">{section.title}</div>
                      <div className="text-sm font-normal opacity-90 mt-1">{section.subtitle}</div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col space-y-6 flex-grow">
                    {section.steps.map((item, stepIdx) => (
                      <div key={stepIdx} className="group">
                        <div className="flex items-center space-x-6">
                          {/* Step Number */}
                          <div className="w-20 text-right text-sm font-medium text-gray-500">
                            {item.step}
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 100 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id={`gradient-${sectionIdx}-${stepIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#06B6D4" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="12" x2="70" y2="12" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                            <polyline points="60,6 70,12 60,18" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                          </svg>

                          {/* Topic Box */}
                          <div className="bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <div className="text-base font-semibold text-gray-800 mb-1">
                              {item.topic}
                            </div>
                            <div className="text-xs text-gray-500 mb-2">
                              {item.category}
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                              {item.details}
                            </div>
                          </div>

                          {/* Connecting line */}
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"></div>

                          {/* Progress Indicator */}
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-purple-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden">
                {/* Section Header */}
                <div className="flex items-center mb-6">
                  <div className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`}>
                    <div className="font-bold">{section.title}</div>
                    <div className="text-xs sm:text-sm font-normal opacity-90">{section.subtitle}</div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                </div>

                {/* Steps Grid */}
                <div className="space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8">
                  {section.steps.map((item, stepIdx) => (
                    <div key={stepIdx} className="relative group">
                      {/* Connection Point */}
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-purple-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-purple-50 px-2 py-1 rounded">
                            {item.category}
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                          {item.topic}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Project Suggestions */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🗄️ Suggested Projects for Each Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">📊 Essential Database Tools & Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">SQL Databases</div>
              <div className="text-purple-100">PostgreSQL, MySQL, SQL Server, Oracle</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">NoSQL Databases</div>
              <div className="text-purple-100">MongoDB, Redis, Cassandra, Neo4j</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud Databases</div>
              <div className="text-purple-100">AWS RDS, Azure SQL, Google Cloud SQL</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Data Warehouses</div>
              <div className="text-purple-100">Snowflake, BigQuery, Redshift</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">ETL Tools</div>
              <div className="text-purple-100">Apache Airflow, dbt, Talend, Informatica</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Big Data</div>
              <div className="text-purple-100">Apache Kafka, Spark, Hadoop, Flink</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Monitoring</div>
              <div className="text-purple-100">Prometheus, Grafana, Datadog, New Relic</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Learning</div>
              <div className="text-purple-100">SQLBolt, PostgreSQL Tutorial, MongoDB Docs</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            📊 Remember: Database engineering is about performance, reliability, and scalability. Master the fundamentals first!
          </p>
        </div>
      </div>
    </main>
  );
}