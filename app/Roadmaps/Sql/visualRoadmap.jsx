import React from 'react';

export default function SQLRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "SQL Fundamentals",
      steps: [
        { 
          step: "Step - 1", 
          topic: "SQL Basics & Database Concepts", 
          category: "Core Concepts",
          details: "What SQL is, Database vs DBMS vs RDBMS, SQL vs NoSQL overview, ACID properties understanding"
        },
        { 
          step: "Step - 2", 
          topic: "Database Structure", 
          category: "Schema Design",
          details: "Creating & Dropping Databases/Tables, Data Types (INT, VARCHAR, DATE, BOOLEAN, JSON), Constraints"
        },
        { 
          step: "Step - 3", 
          topic: "CRUD Operations", 
          category: "Basic Operations",
          details: "SELECT, INSERT, UPDATE, DELETE statements, Primary Key, Foreign Key, Unique constraints"
        },
        { 
          step: "Step - 4", 
          topic: "Data Filtering & Selection", 
          category: "Query Fundamentals",
          details: "WHERE clause, BETWEEN, IN, LIKE, IS NULL, DISTINCT for precise data retrieval"
        },
      ],
    },
    {
      title: "Intermediate",
      subtitle: "Query Mastery",
      steps: [
        { 
          step: "Step - 5", 
          topic: "Aggregate Functions", 
          category: "Data Analysis",
          details: "COUNT, SUM, AVG, MIN, MAX functions for statistical analysis and reporting"
        },
        { 
          step: "Step - 6", 
          topic: "Grouping & Sorting", 
          category: "Data Organization",
          details: "GROUP BY for categorization, HAVING for group filtering, ORDER BY for result ordering"
        },
        { 
          step: "Step - 7", 
          topic: "Table Relationships", 
          category: "Join Operations",
          details: "INNER, LEFT, RIGHT, FULL OUTER, CROSS JOIN, SELF JOIN for multi-table queries"
        },
        { 
          step: "Step - 8", 
          topic: "Advanced Querying", 
          category: "Complex Operations",
          details: "Subqueries (Nested, Correlated), Set Operators (UNION, INTERSECT, EXCEPT)"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Professional SQL",
      steps: [
        { 
          step: "Step - 9", 
          topic: "Database Objects", 
          category: "Advanced Structures",
          details: "Views & Materialized Views, Stored Procedures & Functions, Triggers for automation"
        },
        { 
          step: "Step - 10", 
          topic: "Transaction Management", 
          category: "Data Integrity",
          details: "BEGIN, COMMIT, ROLLBACK, SAVEPOINT for maintaining data consistency"
        },
        { 
          step: "Step - 11", 
          topic: "Window Functions", 
          category: "Analytical SQL",
          details: "ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), FIRST_VALUE(), LAST_VALUE()"
        },
        { 
          step: "Step - 12", 
          topic: "Performance Features", 
          category: "Optimization",
          details: "Indexes (Clustered, Non-Clustered, Composite), CTEs, Pivot & Unpivot operations"
        },
      ],
    },
    {
      title: "Mastery",
      subtitle: "Expert Level",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Performance Optimization", 
          category: "Query Tuning",
          details: "Execution Plans, Indexing Strategies, N+1 query prevention, Normalization strategies"
        },
        { 
          step: "Step - 14", 
          topic: "Database Design", 
          category: "Architecture",
          details: "ER Diagrams, Normal Forms (1NF-BCNF), Schema Design Best Practices, Relationships"
        },
        { 
          step: "Step - 15", 
          topic: "Security & Best Practices", 
          category: "Production Ready",
          details: "SQL Injection prevention, User Roles & Permissions, Encryption, Backup & Recovery"
        },
        { 
          step: "Step - 16", 
          topic: "Enterprise Integration", 
          category: "Real-World Applications",
          details: "ETL processes, Big Data SQL (Presto, Hive, BigQuery), API integration, Data Pipelines"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Personal Library System" },
    { level: "Intermediate", project: "E-commerce Database" },
    { level: "Advanced", project: "Banking System Database" },
    { level: "Mastery", project: "Data Warehouse & Analytics" },
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
              <span className="text-sm font-medium text-gray-700">🗃️ 16 Essential Steps • 🚀 4 Skill Levels • 💼 Career Ready</span>
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
            🗃️ SQL Practice Projects
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

        {/* Popular SQL Databases */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🗃️ Popular SQL Databases & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">SQL Databases</div>
              <div className="text-purple-100">PostgreSQL, MySQL, SQL Server, Oracle DB</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">SQL Clients</div>
              <div className="text-purple-100">DBeaver, DataGrip, pgAdmin, MySQL Workbench</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">ORMs</div>
              <div className="text-purple-100">SQLAlchemy, Sequelize, Hibernate, Django ORM</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Data Tools</div>
              <div className="text-purple-100">Airflow, dbt, Kafka, ETL Pipelines</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Big Data SQL</div>
              <div className="text-purple-100">Presto, Hive, BigQuery, Snowflake</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">BI Tools</div>
              <div className="text-purple-100">Tableau, Power BI, Looker, Grafana</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Version Control</div>
              <div className="text-purple-100">Flyway, Liquibase, Git, Schema Migration</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud Databases</div>
              <div className="text-purple-100">AWS RDS, Azure SQL, GCP Cloud SQL</div>
            </div>
          </div>
        </section>

        {/* Industry-Level Projects */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level SQL Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📚 Library Management System</h3>
              <p className="text-sm text-gray-600 mb-3">Design complete library database with books, members, transactions, and fine management.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">MySQL/PostgreSQL • CRUD • Relationships</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏦 Banking System Database</h3>
              <p className="text-sm text-gray-600 mb-3">Build banking database with accounts, transactions, loans, and security features.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Transactions • Security • ACID Properties</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Database</h3>
              <p className="text-sm text-gray-600 mb-3">Create online store database with products, orders, payments, and user management.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Complex Joins • Performance • Indexing</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Analytics Dashboard</h3>
              <p className="text-sm text-gray-600 mb-3">Build data warehouse with ETL processes and reporting queries for business intelligence.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">Data Warehouse • ETL • Reporting</div>
            </div>
          </div>
        </section>

        {/* Career Roles */}
        <section className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">💼 Career Roles with SQL</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-sm">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">SQL Developer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Database Administrator</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Data Engineer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">BI Developer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Backend Developer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Data Analyst</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Remember: SQL is the foundation of data work. Master the fundamentals, practice with real projects, and focus on performance!
          </p>
        </div>
      </div>
    </main>
  );
}