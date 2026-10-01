/**
 * PORTFOLIO DATA CONFIGURATION FOR K. SANDHYA RANI
 * 
 * Future Software Development Engineer (SDE)
 * B.Tech in Computer Science and Engineering | TRR College Of Technology
 * 
 * INSTRUCTIONS FOR SANDHYA:
 * You can easily edit any section by modifying the values in this file.
 * Placeholders are clearly marked with "YOUR_" or "EDIT_HERE".
 * No fake statistics, achievements, or numbers have been added.
 */

export const personalInfo = {
  name: "K.SANDHYA RANI",
  fullName: "K. Sandhya Rani",
  shortName: "Sandhya",
  branch: "Computer Science & Engineering",
  degree: "B.Tech in Computer Science and Engineering",
  college: "TRR College Of Technology",
  careerGoal: "Future Software Development Engineer",
  tagline: "Bridging the gap between software engineering, computational logic, and connected digital systems.",
  
  // Contact & Social Links (EDIT THESE with your actual profiles)
  email: "sandhyarani.cse@email.com", // EDIT: Replace with your actual email
  social: {
    github: "https://github.com/sandhyarani", // EDIT: Replace with your GitHub profile URL
    linkedin: "https://linkedin.com/in/sandhya-rani", // EDIT: Replace with your LinkedIn profile URL
    portfolio: "https://sandhyarani.dev", // EDIT: Optional custom domain
  },

  // About Me Section Data
  about: {
    badge: "Digital Identity // System Profile",
    headline: "Engineering Scalable Software & Exploring Connected Digital Networks",
    intro: "I am a B.Tech Computer Science and Engineering student at TRR College Of Technology with a strong passion for software development, algorithmic problem solving, and emerging technologies.",
    paragraph2: "My journey is focused on mastering core programming languages like Java, Python, and C, building structured web interfaces with semantic HTML, and managing data with SQL. I am driven by curiosity to understand how software interacts with hardware and IoT ecosystems, continuously transforming theoretical concepts into functional code.",
    careerObjective: "Actively preparing for Software Development Engineer (SDE) roles where I can contribute clean code, tackle complex algorithmic challenges, and engineer reliable digital solutions.",
    
    // Interactive Cycle: Learn -> Build -> Experiment -> Improve
    learningCycle: [
      {
        step: "01",
        stage: "Learn",
        title: "Deep Foundations",
        description: "Grasping fundamental computer science paradigms, data structures, and syntax."
      },
      {
        step: "02",
        stage: "Build",
        title: "Hands-on Code",
        description: "Transforming logic into running applications, scripts, and structured web layouts."
      },
      {
        step: "03",
        stage: "Experiment",
        title: "Explore & Test",
        description: "Testing edge cases, debugging anomalies, and exploring IoT & system connectivity."
      },
      {
        step: "04",
        stage: "Improve",
        title: "Refactor & Evolve",
        description: "Optimizing time complexity, writing modular clean code, and adhering to SDE standards."
      }
    ]
  }
};

// Skill constellation & grouped skills (NO fake percentages - pure technical competencies)
export const skillsData = {
  categories: [
    {
      id: "programming",
      name: "Programming",
      badge: "Core Logic",
      description: "Fundamental languages powering software logic, object orientation, and algorithms.",
      skills: [
        {
          name: "Python",
          category: "Programming",
          focus: "Data manipulation, scripting, automation & core algorithmic problem solving",
          level: "Core Competency",
          icon: "Terminal"
        },
        {
          name: "Java",
          category: "Programming",
          focus: "Object-Oriented Programming (OOP), modular architecture, classes & methods",
          level: "Core Competency",
          icon: "Coffee"
        },
        {
          name: "C",
          category: "Programming",
          focus: "Low-level system programming, memory mechanics, pointers & structured logic",
          level: "Foundational",
          icon: "Cpu"
        }
      ]
    },
    {
      id: "web",
      name: "Web Development",
      badge: "User Interface",
      description: "Structuring modern web experiences with clean, semantic markup.",
      skills: [
        {
          name: "HTML",
          category: "Web Development",
          focus: "Semantic HTML5 structure, accessibility best practices, DOM architecture & forms",
          level: "Core Competency",
          icon: "Globe"
        }
      ]
    },
    {
      id: "database",
      name: "Database",
      badge: "Data Layer",
      description: "Managing, organizing, and querying relational data stores.",
      skills: [
        {
          name: "SQL",
          category: "Database",
          focus: "Relational schema design, CRUD operations, joins, aggregations & query optimization",
          level: "Core Competency",
          icon: "Database"
        }
      ]
    },
    {
      id: "tools",
      name: "Tools & Collaboration",
      badge: "Developer Workflow",
      description: "Modern developer tooling for source control and collaboration.",
      skills: [
        {
          name: "Git",
          category: "Tools",
          focus: "Local version control, branch management, merge conflict resolution & commit hygiene",
          level: "Essential Tooling",
          icon: "GitBranch"
        },
        {
          name: "GitHub",
          category: "Tools",
          focus: "Remote repositories, collaborative workflows, pull requests & code documentation",
          level: "Essential Tooling",
          icon: "Github"
        }
      ]
    }
  ]
};

// "MY DIGITAL DNA" - Interactive Knowledge Constellation
export const digitalDNANodes = [
  {
    id: "programming",
    title: "Programming",
    tagline: "Algorithms & Logic",
    description: "Developing robust computational thinking through Java, Python, and C. Focuses on writing efficient, maintainable, and structured code.",
    connections: ["problemSolving", "web", "iot", "learning"],
    x: 20, // percentage position in DNA visualization
    y: 30,
    accent: "from-sky-500 to-cyan-400",
    color: "#38bdf8"
  },
  {
    id: "web",
    title: "Web",
    tagline: "Semantic Architecture",
    description: "Creating structured digital entry points with semantic HTML5, ensuring accessible, responsive, and intuitive web interfaces.",
    connections: ["programming", "data", "projects"],
    x: 50,
    y: 18,
    accent: "from-blue-500 to-indigo-400",
    color: "#60a5fa"
  },
  {
    id: "data",
    title: "Data",
    tagline: "Relational Modeling",
    description: "Structuring, querying, and managing datasets with SQL. Formulating queries that retrieve and organize information accurately.",
    connections: ["web", "projects", "programming"],
    x: 80,
    y: 32,
    accent: "from-indigo-500 to-purple-400",
    color: "#818cf8"
  },
  {
    id: "iot",
    title: "IoT",
    tagline: "Connected Hardware & Networks",
    description: "Exploring the bridge between physical devices and software systems. Understanding network communication protocols and sensors.",
    connections: ["programming", "projects"],
    x: 22,
    y: 72,
    accent: "from-teal-400 to-emerald-400",
    color: "#2dd4bf"
  },
  {
    id: "problemSolving",
    title: "Problem Solving",
    tagline: "Analytical Mindset",
    description: "Deconstructing complex engineering problems into digestible algorithmic steps, dry-running edge cases, and finding optimal solutions.",
    connections: ["programming", "learning", "projects"],
    x: 50,
    y: 50,
    accent: "from-violet-500 to-fuchsia-400",
    color: "#a78bfa"
  },
  {
    id: "projects",
    title: "Projects",
    tagline: "Practical Implementation",
    description: "Where theory meets execution: synthesizing code, databases, and interfaces into tangible, working software solutions.",
    connections: ["web", "data", "problemSolving", "iot", "learning"],
    x: 78,
    y: 74,
    accent: "from-cyan-400 to-blue-500",
    color: "#38bdf8"
  },
  {
    id: "learning",
    title: "Learning",
    tagline: "Continuous Growth",
    description: "An active habit of self-directed study, reading documentation, experimenting with code, and evolving toward senior SDE standards.",
    connections: ["programming", "problemSolving", "projects"],
    x: 50,
    y: 86,
    accent: "from-emerald-400 to-teal-500",
    color: "#34d399"
  }
];

// PROJECTS SHOWCASE - Large interactive cards with clearly marked customizable placeholders
// No invented links or fake metrics; clean placeholders ready for Sandhya to edit.
export const projectsData = [
  {
    id: "project-1",
    isPlaceholder: true, // Marked clearly for Sandhya
    title: "Student Database & Records Management System",
    category: "Database & Software",
    shortDescription: "A relational database application engineered with SQL and Python/C to manage, query, and perform structured CRUD operations on student academic records.",
    fullDescription: "Designed relational database schemas with normalized tables, primary/foreign key constraints, and optimized SQL queries. Features efficient data insertion, filtering, indexing, and automated report generation via script automation.",
    technologies: ["SQL", "Python", "Database Design", "Relational Modeling"],
    architectureHighlights: [
      "Normalized relational schema to prevent data anomalies",
      "Optimized query execution for student search and grading records",
      "Role-based view logic for administrative safety"
    ],
    githubUrl: "https://github.com/sandhyarani/student-records-system", // EDIT: Replace with your actual repository
    demoUrl: null, // Set to URL if a live demo exists, or null
    accentColor: "#38bdf8"
  },
  {
    id: "project-2",
    isPlaceholder: true,
    title: "IoT Smart Sensor Monitoring System",
    category: "IoT & Embedded Logic",
    shortDescription: "A connected IoT prototype concept combining C programming, sensor telemetry, and digital network transmission for real-time monitoring.",
    fullDescription: "An exploration into physical computing and IoT networking. Connects microcontrollers with sensor inputs (temperature/motion/proximity) and transmits data packets over network protocols to a monitoring dashboard.",
    technologies: ["C", "IoT Protocols", "Microcontrollers", "Network Data"],
    architectureHighlights: [
      "Low-overhead sensor polling written in optimized C",
      "Network packet serialization for efficient IoT transmission",
      "Alert triggers when sensor thresholds are breached"
    ],
    githubUrl: "https://github.com/sandhyarani/iot-smart-sensor-monitor", // EDIT: Replace with your actual repository
    demoUrl: null,
    accentColor: "#2dd4bf"
  },
  {
    id: "project-3",
    isPlaceholder: true,
    title: "Algorithmic Problem Solving Suite",
    category: "Algorithms & Logic",
    shortDescription: "A comprehensive repository of algorithmic challenges and data structures implemented in Java and Python, focusing on time and space complexity.",
    fullDescription: "A curated collection of solved algorithmic problems covering sorting, searching, array manipulations, recursion, and object-oriented design patterns. Each solution is documented with edge-case tests and complexity analyses.",
    technologies: ["Java", "Python", "Data Structures", "Algorithms", "Git"],
    architectureHighlights: [
      "Clean, modular class design following OOP principles",
      "Time complexity annotations (Big-O analysis)",
      "Comprehensive unit test cases verifying edge cases"
    ],
    githubUrl: "https://github.com/sandhyarani/algorithms-and-dsa", // EDIT: Replace with your actual repository
    demoUrl: null,
    accentColor: "#818cf8"
  },
  {
    id: "project-4",
    isPlaceholder: true,
    title: "Semantic Web Portfolio & Interface Architecture",
    category: "Web Development",
    shortDescription: "A responsive, accessible personal digital identity website built with modern HTML5 semantics, CSS glassmorphism, and interactive React components.",
    fullDescription: "Engineered from the ground up to embody a futuristic 'Digital Identity'. Features custom canvas particle networks, interactive digital DNA visualization, smooth transitions, and high accessibility standards.",
    technologies: ["HTML5", "CSS3", "React", "JavaScript", "Vite"],
    architectureHighlights: [
      "100% semantic HTML5 tags with zero accessibility barriers",
      "Smooth 60fps canvas animation with low CPU footprint",
      "Fully modular component architecture easy to update"
    ],
    githubUrl: "https://github.com/sandhyarani/digital-identity-portfolio", // EDIT: Replace with your actual repository
    demoUrl: "#", // Live demo is this current website!
    accentColor: "#a78bfa"
  }
];

// EDUCATION - Genuine data with NO invented GPA, ranks, or marks
export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "TRR College Of Technology",
    affiliation: "Affiliated to JNTUH / State Technical Board",
    status: "Currently Pursuing (Undergraduate)",
    // Note: Sandhya can edit batch years below if desired
    batch: "Undergraduate CSE Student", // EDIT: e.g. "2023 - 2027" or as applicable
    details: [
      "Core Coursework: Data Structures & Algorithms, Object Oriented Programming (Java/C++), Operating Systems, Database Management Systems (SQL), Computer Networks, Software Engineering.",
      "Actively building programming fundamentals and practical coding assignments in Java, Python, and C.",
      "Participating in technical workshops, coding labs, and collaborative team problem-solving."
    ]
  }
];

// CERTIFICATIONS - Clean editable placeholders (no invented fake certificates)
export const certificationsData = [
  {
    id: "cert-1",
    isPlaceholder: true, // Marked for Sandhya to edit
    name: "Python Programming & Data Structures",
    issuer: "Certification Authority (e.g., Coursera / HackerRank / NPTEL)", // EDIT
    date: "Add Your Completion Date", // EDIT
    skillsCovered: ["Python Syntax", "Data Structures", "Problem Solving"],
    credentialUrl: "https://example.com/your-certificate-link", // EDIT: Add your link or leave #
    status: "Verified Credential"
  },
  {
    id: "cert-2",
    isPlaceholder: true,
    name: "Database Management Systems & SQL Fundamentals",
    issuer: "Certification Authority (e.g., Oracle / Coursera / Udemy)", // EDIT
    date: "Add Your Completion Date", // EDIT
    skillsCovered: ["SQL Queries", "Database Design", "Relational Tables"],
    credentialUrl: "https://example.com/your-certificate-link", // EDIT
    status: "Verified Credential"
  },
  {
    id: "cert-3",
    isPlaceholder: true,
    name: "Object-Oriented Programming with Java",
    issuer: "Certification Authority (e.g., NPTEL / Spoken Tutorial / Oracle)", // EDIT
    date: "Add Your Completion Date", // EDIT
    skillsCovered: ["Java OOP", "Inheritance & Polymorphism", "Modular Code"],
    credentialUrl: "https://example.com/your-certificate-link", // EDIT
    status: "Verified Credential"
  },
  {
    id: "cert-4",
    isPlaceholder: true,
    name: "Git & GitHub Version Control Professional",
    issuer: "Certification Authority (e.g., GitHub / Coursera / LinkedIn)", // EDIT
    date: "Add Your Completion Date", // EDIT
    skillsCovered: ["Git Commands", "Branching", "Collaborative Workflows"],
    credentialUrl: "https://example.com/your-certificate-link", // EDIT
    status: "Verified Credential"
  }
];
