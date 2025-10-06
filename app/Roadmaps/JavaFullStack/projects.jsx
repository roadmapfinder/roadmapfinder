
const projects = [
  // ---------- BEGINNER PROJECTS ----------
  {
    id: "java-employee-system",
    level: "Java — Beginner",
    title: "Employee Management System",
    description:
      "Build a CRUD-based employee management app using Spring Boot and MySQL. Learn REST APIs, data validation, and pagination. Great first fullstack backend project.",
    url: "https://youtu.be/9Zvy8i73g-A?si=SmQhOaMEyNEX2rVF",
  },
  {
    id: "java-blogging-platform",
    level: "Java — Beginner",
    title: "Blogging Platform (Spring Boot + React)",
    description:
      "Create a blogging system with user authentication, CRUD posts, and comments. Learn relational mapping, DTOs, and frontend integration with Axios.",
    url: "https://youtu.be/EWd3_I4X32g?si=WPbJqPa19AQnak4J",
  },

  // ---------- INTERMEDIATE PROJECTS ----------
  {
    id: "java-job-portal",
    level: "Java — Intermediate",
    title: "Job Portal System",
    description:
      "Develop a job posting and application system with JWT authentication and role-based access (admin, recruiter, candidate). Add search, filters, and resume upload.",
    url: "https://youtu.be/pvy2Xe38fr4?si=ES0Z6JJfuOYrjtM5",
  },
  {
    id: "java-ecommerce-app",
    level: "Java — Intermediate",
    title: "E-Commerce Web App",
    description:
      "Build a complete e-commerce backend with Spring Boot, JWT, and PostgreSQL. Add user authentication, product catalog, cart, checkout, and Stripe integration.",
    url: "https://youtu.be/APPoN1s2gTM?si=Ovd3McwO65KJXOSY",
  },
  {
    id: "java-event-booking",
    level: "Java — Intermediate",
    title: "Event Booking System",
    description:
      "Develop an event management app to create, list, and book events. Integrate payment gateway and email confirmations. Learn validation, transactions, and RESTful design.",
    url: "https://youtu.be/BQXjF7tw_MQ?si=Do8gdUtH0PsfkKql",
  },

  // ---------- ADVANCED PROJECTS ----------
  {
    id: "java-lms",
    level: "Java — Advanced",
    title: "Learning Management System (LMS)",
    description:
      "Create a full LMS where instructors upload courses and students enroll. Learn JWT, file uploads (S3), role-based dashboards, and video streaming integration.",
    url: "https://youtu.be/KtDcPQkHU7o?si=sBcDUVdklw0v2WjN",
  },
  {
    id: "java-project-manager",
    level: "Java — Advanced",
    title: "Project Management Tool (Trello Clone)",
    description:
      "Build a collaborative task board app with drag-and-drop UI. Implement real-time updates with WebSocket, notifications, and microservices for scalability.",
    url: "https://youtu.be/Zr0E2VP24w8?si=FyxT0yQfkPe1RU-y",
  },
  {
    id: "java-chat-app",
    level: "Java — Advanced",
    title: "Chat Application (WebSocket + Spring Boot)",
    description:
      "Create a real-time chat app using Spring Boot WebSocket and React. Implement user authentication, message persistence, and Redis for scalability.",
    url: "https://youtu.be/sqYqyr6EpAU?si=Er2_O1psXVUEg29v",
  },
  {
    id: "java-url-shortener",
    level: "Java — Advanced",
    title: "URL Shortener & Analytics",
    description:
      "Develop a short-link generator with Spring Boot, MongoDB, and caching using Redis. Track analytics like clicks, devices, and referrers. Add frontend charts with Recharts.",
    url: "https://youtu.be/YbSC1OsLp20?si=RM_2wnEYgy-nJOYN",
  },

  // ---------- INDUSTRY-READY PROJECT ----------
  {
    id: "java-finance-tracker",
    level: "Java — Industry Ready",
    title: "Online Banking / Finance Tracker",
    description:
      "Build a cloud-ready finance app with Spring Boot microservices, Kafka for transactions, PostgreSQL, Docker, and React frontend. Add JWT, charts, and reporting.",
    url: "https://youtu.be/ZOq1chI2jEc",
  },
];


export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ☕ Java Fullstack Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            10 must-build projects to become an industry-ready Java Fullstack
            Engineer — from Spring Boot REST APIs to microservices and real-world
            fullstack apps.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-yellow-700"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-yellow-700 font-medium hover:underline"
              >
                Learn More ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Build these 10 projects — master Java Fullstack development and
          deploy production-grade apps 🚀
        </footer>
      </div>
    </section>
  );
}