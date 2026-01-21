// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "ISTQB Official Documentation",
    description:
      "Global software testing certification body providing testing standards, glossary, syllabus, and best practices.",
    url: "https://www.istqb.org/",
    citation: "ISTQB",
  },
  {
    title: "Selenium Official Documentation",
    description:
      "Official Selenium WebDriver documentation covering setup, locators, waits, frameworks, and best practices.",
    url: "https://www.selenium.dev/documentation/",
    citation: "Selenium Docs",
  },
  {
    title: "Playwright Documentation",
    description:
      "Modern end-to-end testing framework documentation for Chromium, Firefox, and WebKit automation.",
    url: "https://playwright.dev/docs/intro",
    citation: "Playwright Docs",
  },
  {
    title: "Cypress Documentation",
    description:
      "JavaScript-based end-to-end testing framework documentation for frontend automation.",
    url: "https://docs.cypress.io/",
    citation: "Cypress Docs",
  },
  {
    title: "Appium Documentation",
    description:
      "Official Appium documentation for Android and iOS mobile automation testing.",
    url: "https://appium.io/docs/en/latest/",
    citation: "Appium Docs",
  },
  {
    title: "Postman API Testing Docs",
    description:
      "Official Postman learning center for API testing, automation, collections, and environments.",
    url: "https://learning.postman.com/docs/",
    citation: "Postman Docs",
  },
  {
    title: "Swagger / OpenAPI Documentation",
    description:
      "Official OpenAPI specification and Swagger documentation for API design and testing.",
    url: "https://swagger.io/docs/",
    citation: "Swagger Docs",
  },
  {
    title: "REST Assured Documentation",
    description:
      "Java-based REST API testing framework official documentation.",
    url: "https://rest-assured.io/",
    citation: "REST Assured",
  },
  {
    title: "Apache JMeter Documentation",
    description:
      "Official Apache JMeter user manual for performance and load testing.",
    url: "https://jmeter.apache.org/usermanual/index.html",
    citation: "JMeter Docs",
  },
  {
    title: "k6 Performance Testing Docs",
    description:
      "Modern performance testing tool documentation for API and load testing.",
    url: "https://k6.io/docs/",
    citation: "k6 Docs",
  },
  {
    title: "OWASP Official Documentation",
    description:
      "Security testing guidelines including OWASP Top 10 vulnerabilities.",
    url: "https://owasp.org/",
    citation: "OWASP",
  },
  {
    title: "Git Official Documentation",
    description:
      "Official Git version control documentation for source code management.",
    url: "https://git-scm.com/doc",
    citation: "Git Docs",
  },
  {
    title: "GitHub Documentation",
    description:
      "GitHub platform documentation for repositories, CI/CD, and collaboration.",
    url: "https://docs.github.com/",
    citation: "GitHub Docs",
  },
  {
    title: "Jenkins Documentation",
    description:
      "Official Jenkins CI/CD automation server documentation.",
    url: "https://www.jenkins.io/doc/",
    citation: "Jenkins Docs",
  },
  {
    title: "Docker Documentation",
    description:
      "Official Docker documentation for containerization and test environment setup.",
    url: "https://docs.docker.com/",
    citation: "Docker Docs",
  },
  {
    title: "TestNG Documentation",
    description:
      "Java testing framework documentation for Selenium automation.",
    url: "https://testng.org/doc/",
    citation: "TestNG Docs",
  },
  {
    title: "JUnit 5 Documentation",
    description:
      "JUnit testing framework documentation for Java-based test automation.",
    url: "https://junit.org/junit5/docs/current/user-guide/",
    citation: "JUnit Docs",
  },
  {
    title: "Allure Reporting Docs",
    description:
      "Official Allure reporting framework documentation for test reporting.",
    url: "https://docs.qameta.io/allure/",
    citation: "Allure Docs",
  },
  {
    title: "Jira Software Documentation",
    description:
      "Official Jira documentation for bug tracking and Agile project management.",
    url: "https://support.atlassian.com/jira-software/",
    citation: "Jira Docs",
  },
  {
    title: "TestRail Documentation",
    description:
      "Official TestRail documentation for test case management.",
    url: "https://www.gurock.com/testrail/docs",
    citation: "TestRail Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🧪 Software Testing Official Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation resources every Software Tester and QA Engineer
          must know — covering manual testing, automation, API, performance,
          security, and DevOps tools.
        </p>

        {/* Cards Grid */}
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
