import location from "../assets/location.svg";
import mail from "../assets/mail.svg";

// Icons from:
// https://github.com/tandpfun/skill-icons?tab=readme-ov-file#icons-list

const englishInfo = {
  logo: {
    initials: "DR",
    name: "Davel Reymundo",
    role: "Full-Stack Developer",
  },

  header: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],

  personal: {
    name: "Davel Reymundo Gobea",
    greeting:
      "Focused on building scalable software solutions and modern web applications. Combining an Electronic Engineering background with full-stack development experience to create efficient, reliable, and user-centered solutions.",
    role: [
      "Full-Stack Developer",
      "Electronics Engineer",
      "Technical Support Specialist",
    ],
    actions: [
      { id: "projects", label: "View Projects" },
      { id: "contact", label: "Get in Touch" },
    ],
    contact: [
      {
        icon: mail,
        value: "davel.reymundo@gmail.com",
      },
      {
        icon: location,
        value: "Perú",
      },
    ],
    socialMedia: [
      {
        icon: "github",
        value: "github.com/dav31rg",
      },
      {
        icon: "linkedin",
        value: "linkedin.com/in/davelrgobea",
      },
    ],
  },

  about: {
    label: "About me",
    title: "Engineering Foundations. Building Modern Software Solutions.",
    subtitle:
      "Built on engineering principles and analytical thinking. Evolved from electronics and microcontrollers to modern web development and scalable software solutions.",
    description: [
      {
        icon: "electronics",
        title: "Engineering Foundation",
        description:
          "Bachelor's background in Electronic Engineering, with a strong foundation in analytical thinking, technical problem-solving, and the integration of hardware and software.",
      },
      {
        icon: "code",
        title: "Full-Stack Development",
        description:
          "Building modern web applications and backend services with React, Next.js, Node.js, and NestJS. Focused on maintainable code, modular design, and reliable API integrations.",
      },
      {
        icon: "teamwork",
        title: "Teamwork & Continuous Learning",
        description:
          "Committed to collaborative work, clear communication, and continuous improvement. Adaptable to new technologies, challenges, and evolving development practices.",
      },
    ],
    timeExperience: {
      time: "2024-01-01",
      years: "Years",
      buttonLabel: "Get in Touch",
      buttonLink: "contact",
      title: "Production Experience",
      description:
        "Building web applications, backend services, and software solutions",
    },
  },

  skills: {
    label: "Skills",
    title: "Technical skills across modern software development.",
    subtitle:
      "Focused on practical experience, clean code, and reliable software solutions. A technology stack built through hands-on projects and continuous learning.",
    knowledge: [
      {
        Frontend: [
          "React",
          "Next.js",
          "Angular",
          "Vue.js",
          "Responsive Web Development",
        ],
        "Backend & Architecture": [
          "Node.js",
          "NestJS",
          "Ruby on Rails",
          "Python",
          "REST APIs",
          "Microservices",
          "BFF",
          "Microservices Architecture",
        ],
        "Data & Integrations": [
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Prisma",
          "GraphQL",
          "Apollo Client",
          "RabbitMQ",
          "Strapi",
        ],
        "Cloud & Dev Tools": [
          "Docker",
          "AWS",
          "Vercel",
          "Git",
          "GitHub",
          "GitLab",
          "Postman",
        ],
      },
    ],
  },

  experience: {
    label: "Experience",
    title: "Professional experience building software solutions.",
    subtitle:
      "A look at my roles, the sectors I have supported, and the technologies used to deliver reliable software.",
    leadRecommendation: "https://linkedin.com",
    work: [
      {
        title: "Software Engineer",
        company: "TEKTON LABS",
        initialDate: "09/05/2024",
        endDate: "",
        description: [
          {
            subtitle: "Airline Project | Backend Engineer",
            contributions: [
              "Developed and maintained backend microservices using Node.js, TypeScript, and NestJS, implementing business logic, validations, and improvements across distributed services.",
              "Designed and implemented automation scripts using Python and Node.js to streamline bulk user account deletion, data migration, and synchronization across internal databases and external services.",
              "Improved application workflows by fixing authentication and password recovery processes, optimizing data handling, and implementing database operations using MongoDB.",
            ],
            technologies: ["typescript", "react", "nextJs"],
          },
          {
            subtitle: "Banking sector",
            contributions: [
              "Contribution 1",
              "Contribution 2",
              "Contribution 3",
            ],

            technologies: ["typescript", "react", "nextJs"],
          },
        ],
      },
      {
        title: "Software Developer",
        company: "{c} Lasdasd",
        initialDate: "01/01/2022",
        endDate: "01/01/2023",
        description: [
          {
            subtitle: "Airline sector",
            contributions: [
              "Contribution 1",
              "Contribution 2",
              "Contribution 3",
            ],
            technologies: ["typescript", "react", "nextJs"],
          },
          {
            subtitle: "Banking sector",
            contributions: [
              "Contribution 1",
              "Contribution 2",
              "Contribution 3",
            ],
            technologies: ["typescript", "react", "nextJs"],
          },
        ],
      },
    ],
  },

  education: {
    label: "Education & Certifications",
    title:
      "Engineering background and hands-on software development experience.",
    subtitle:
      "A foundation in electronic engineering, complemented by focused training in full-stack and web development.",
    educationDetail: [
      {
        title: "Academic Education",
        company: "Bachelor's Degree in Electronic Engineering",
        date: "Universidad Católica de Santa María (2006 - 2012)",
        description: [
          {
            title: "Academic Focus",
            description:
              "Focused on electronics, telecommunications, digital systems, programming, and hardware-software integration.",
            border: false,
          },
        ],
      },
      {
        title: "Specialized Training",
        company: "Specialized Programs & Bootcamps",
        date: "Accredited Industry Certifications",
        description: [
          {
            title: "Tecsup – CodiGo | Software Architecture Bootcamp",
            description:
              "180-hour specialized training program. Average grade: 18/20.",
            border: true,
          },
          {
            title: "Codeable | Full-Stack Web Development Bootcamp",
            description:
              "Six-month intensive training program focused on modern web development.",
            border: true,
          },
        ],
      },
      {
        title: "Continuous Learning",
        company: "Online Courses & Technical Training",
        date: "Expanding my technical knowledge through online courses, specialized training, and continuous learning.",
        description: [
          {
            title: "Artificial Intelligence – Coursera",
            description:
              "Google AI Essentials\nGenerative AI for Everyone\nEngineering for ChatGPT\nTrustworthy Generative AI",
            border: true,
          },
          {
            title: "SCADA Systems Training – Siemens",
            description:
              "Specialized training in SCADA systems.\nDuration: 1 week.",
            border: true,
          },
          {
            title: "Information Security – Udemy",
            description:
              "Information Security Awareness: An Introduction for UK SMEs (2 hours).",
            border: true,
          },
          {
            title: "Web Development & JavaScript – Platzi",
            description:
              "avaScript fundamentals, ECMAScript 6+, closures, scope, asynchronous programming, and array manipulation.\nDependency management with NPM and REST API integration.",
            border: true,
          },
        ],
      },
    ],
  },

  contact: {
    label: "Contact",
    title: "Let's collaborate on scalable software solutions.",
    subtitle:
      "Open to Full-Stack Developer and Backend Developer opportunities, contributing to modern web applications and reliable software solutions.",
    titleCard: "Direct Communication",
    subtitlecard: "Get in Touch",
    availabilityLabel: "Available for Engagements",
    emailLabel: "Email address",
    email: "davel.reymundo@gmail.com",
    locationLabel: "Location & timezone",
    location: "Perú",
    timezone: "America/Lima (UTC−5)",
    networksLabel: "Verified networks",
    github: "https://github.com/dav31rg",
    linkedin: "https://linkedin.com/in/davelrgobea",
  },

  footer: {
    credit: "Built by",
    description: "Software Engineering & Development Portfolio",
    backToTop: "Back to top",
    navigationLabel: "Footer links",
  },

  projects: {
    label: "Featured Projects",
    title: "Selected personal projects and software solutions.",
    subtitle:
      "A collection of projects I build in my spare time to explore new technologies, strengthen my skills, and turn ideas into practical software solutions.",
    projectsDetail: [
      {
        title: "Uni Enrollment Simulation API",
        description:
          "This is an API designed for the registration and maintenance of student enrollments at a university, developed using NestJS.",
        github: "https://github.com/dav31rg/uniMatricula-API",
        demo: "https://github.com/dav31rg/uniMatricula-API",
        technologies: ["typescript", "nestJs"],
      },
      {
        title: "Check-In Simulation API",
        description:
          "This API is designed to simulate the check-in process for airlines",
        github: "https://github.com/dav31rg/simulacionCheckInAerolinea-API",
        demo: "",
        technologies: ["ruby", "ruby on rails"],
      },
      {
        title: "Eatable",
        description:
          "App to empower home cooks. You can see, create, and update recipes and cooking tips. Developed on React JS managing an API.",
        github: "https://github.com/dav31rg/eatable",
        demo: "",
        technologies: ["js", "react"],
      },
    ],
  },
};

const spanishInfo = {
  ...englishInfo,
  logo: {
    initials: "DR",
    name: "Davel Reymundo",
    role: "Desarr. Full Stack",
  },

  header: [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Proyectos" },
    { id: "experience", label: "Experiencia" },
    { id: "education", label: "Educación" },
    { id: "contact", label: "Contacto" },
  ],

  personal: {
    ...englishInfo.personal,
    greeting:
      "Orientado al desarrollo de soluciones de software escalables y aplicaciones web modernas. Combino mi formación en Ingeniería Electrónica con experiencia en desarrollo full-stack para crear soluciones eficientes, confiables y centradas en las necesidades del usuario.",
    role: [
      "Desarrollador Full Stack",
      "Ingeniero Electrónico",
      "Especialista en Soporte Técnico",
    ],
    actions: [
      { id: "projects", label: "Ver Proyectos" },
      { id: "contact", label: "Contáctame" },
    ],
  },

  about: {
    ...englishInfo.about,
    label: "Quién soy",
    title:
      "Fundamentos de ingeniería. Creando soluciones de software modernas.",
    subtitle:
      "De la ingeniería al desarrollo web, aplicando pensamiento analítico para crear soluciones de software escalables y modernas.",
    description: [
      {
        icon: "electronics",
        title: "Formación en Ingeniería",
        description:
          "Formación universitaria en Ingeniería Electrónica, con bases sólidas en pensamiento analítico, resolución de problemas técnicos e integración de hardware y software.",
      },
      {
        icon: "code",
        title: "Desarrollo Full Stack",
        description:
          "Desarrollo de aplicaciones web modernas y servicios backend con React, Next.js, Node.js y NestJS. Enfocada en código mantenible, diseño modular e integraciones confiables de APIs.",
      },
      {
        icon: "teamwork",
        title: "Trabajo en Equipo y Aprendizaje Continuo",
        description:
          "Comprometido con el trabajo colaborativo, la comunicación efectiva y la mejora continua. Adaptable a nuevas tecnologías, desafíos y prácticas de desarrollo.",
      },
    ],
    timeExperience: {
      time: "2024-01-01",
      years: "Años",
      title: "Experiencia Profesional",
      buttonLabel: "Hablemos",
      buttonLink: "contact",
      description:
        "Desarrollo de aplicaciones web, servicios backend y soluciones de software",
    },
  },

  skills: {
    ...englishInfo.skills,
    label: "Habilidades",
    title: "Habilidades técnicas en el desarrollo de software moderno.",
    subtitle:
      "Enfocada en la experiencia práctica, el código limpio y las soluciones de software confiables. Un conjunto de tecnologías desarrollado a través de proyectos reales y aprendizaje continuo.",
  },

  experience: {
    label: "Experiencia",
    title: "Experiencia profesional creando soluciones de software.",
    subtitle:
      "Un recorrido por mis roles, los sectores en los que he trabajado y las tecnologías usadas para desarrollar soluciones confiables.",
    leadRecommendation: "https://linkedin.com",
    work: [
      {
        title: "Desarrollador de software",
        company: "{c} Labs",
        initialDate: "01/01/2023",
        endDate: "",
        description: [
          {
            subtitle: "Sector aerolíneas",
            contributions: [
              "Contribución 1",
              "Contribución 2",
              "Contribución 3",
            ],
            technologies: ["typescript", "react", "nextJs"],
          },
          {
            subtitle: "Sector bancario",
            contributions: [
              "Contribución 1",
              "Contribución 2",
              "Contribución 3",
            ],
            technologies: ["typescript", "react", "nextJs"],
          },
        ],
      },
      {
        title: "Desarrollador de software",
        company: "{c} Lasdasd",
        initialDate: "01/01/2022",
        endDate: "01/01/2023",
        description: [
          {
            subtitle: "Sector aerolíneas",
            contributions: [
              "Contribución 1",
              "Contribución 2",
              "Contribución 3",
            ],
            technologies: ["typescript", "react", "nextJs"],
          },
          {
            subtitle: "Sector bancario",
            contributions: [
              "Contribución 1",
              "Contribución 2",
              "Contribución 3",
            ],
            technologies: ["typescript", "react", "nextJs"],
          },
        ],
      },
    ],
  },

  education: {
    label: "Educación y desarrollo profesional",
    title:
      "Formación en ingeniería y experiencia práctica en desarrollo de software.",
    subtitle:
      "Una base en ingeniería electrónica, complementada con formación especializada y aprendizaje continuo en desarrollo de software.",
    educationDetail: [
      {
        title: "Formación académica",
        company: "Título en Ingeniería Electrónica",
        date: "Universidad Católica de Santa María (2006 - 2012)",
        description: [
          {
            title: "Enfoque académico",
            description:
              "Formación en electrónica, telecomunicaciones, sistemas digitales, programación e integración de hardware y software.",
            border: false,
          },
        ],
      },
      {
        title: "Formación especializada",
        company: "Programas especializados y bootcamps",
        date: "Certificaciones profesionales",
        description: [
          {
            title: "Tecsup – CodiGo | Bootcamp de Arquitectura de Software",
            description:
              "Programa de formación especializada de 180 horas. Promedio: 18/20.",
            border: true,
          },
          {
            title: "Codeable | Bootcamp de Desarrollo Web Full Stack",
            description:
              "Programa intensivo de seis meses enfocado en el desarrollo web moderno.",
            border: true,
          },
        ],
      },
      {
        title: "Aprendizaje continuo",
        company: "Cursos en línea y formación técnica",
        date: "Ampliando mis conocimientos técnicos mediante cursos en línea, formación especializada y aprendizaje continuo.",
        description: [
          {
            title: "Inteligencia Artificial – Coursera",
            description:
              "Google AI Essentials\nIA generativa para todos\nIngeniería para ChatGPT\nIA generativa confiable",
            border: true,
          },
          {
            title: "Formación en sistemas SCADA – Siemens",
            description:
              "Formación especializada en sistemas SCADA.\nDuración: 1 semana.",
            border: true,
          },
          {
            title: "Seguridad de la información – Udemy",
            description:
              "Concientización sobre seguridad de la información: introducción para pequeñas y medianas empresas del Reino Unido (2 horas).",
            border: true,
          },
          {
            title: "Desarrollo web y JavaScript – Platzi",
            description:
              "Fundamentos de JavaScript, ECMAScript 6+, closures, scope, programación asíncrona y manipulación de arreglos.\nGestión de dependencias con NPM e integración de API REST.",
            border: true,
          },
        ],
      },
    ],
  },

  contact: {
    label: "Contacto",
    title: "Colaboremos en soluciones de software escalables.",
    subtitle:
      "Abierto a oportunidades como desarrollador Full Stack y Backend, contribuyendo a aplicaciones web modernas y soluciones de software confiables.",
    titleCard: "Comunicación directa",
    subtitlecard: "Ponte en contacto",
    availabilityLabel: "Disponible para nuevos proyectos",
    emailLabel: "Correo electrónico",
    email: "davel.reymundo@gmail.com",
    locationLabel: "Ubicación y zona horaria",
    location: "Perú",
    timezone: "America/Lima (UTC−5)",
    networksLabel: "Redes verificadas",
    github: "https://github.com/dav31rg",
    linkedin: "https://linkedin.com/in/davelrgobea",
  },

  footer: {
    credit: "Desarrollado por",
    description: "Portafolio de Ingeniería de Software y Desarrollo",
    backToTop: "Volver al inicio",
    navigationLabel: "Enlaces del pie de página",
  },

  projects: {
    label: "Proyectos personales",
    title: "Proyectos personales y exploración tecnológica.",
    subtitle:
      "Una colección de proyectos que desarrollo en mi tiempo libre para explorar nuevas tecnologías, fortalecer mis habilidades y transformar ideas en soluciones de software.",
    projectsDetail: [
      {
        title: "Uni Enrollment Simulation API",
        description:
          "This is an API designed for the registration and maintenance of student enrollments at a university, developed using NestJS.",
        github: "https://github.com/dav31rg/uniMatricula-API",
        demo: "",
        technologies: ["typescript", "nestJs"],
      },
      {
        title: "Check-In Simulation API",
        description:
          "This API is designed to simulate the check-in process for airlines",
        github: "https://github.com/dav31rg/simulacionCheckInAerolinea-API",
        demo: "",
        technologies: ["ruby", "rails"],
      },
      {
        title: "Eatable",
        description:
          "App to empower home cooks. You can see, create, and update recipes and cooking tips. Developed on React JS managing an API.",
        github: "https://github.com/dav31rg/eatable",
        demo: "",
        technologies: ["js", "react"],
      },
    ],
  },
};

export const portfolioContent = {
  en: {
    ...englishInfo,
    labels: {
      greeting: "Hello, I'm",
      about: "About me",
      downloadCv: "Download CV",
      education: "Education",
      workExperience: "Work Experience",
      projects: "Recent Projects",
      notFoundTitle: "404 - Page Not Found",
      notFoundMessage: "Sorry, the page you are looking for does not exist.",
      home: "Home",
      changeLanguage: "Change language to Spanish",
      navigation: "Main navigation",
      toggleMenu: "Toggle menu",
      darkTheme: "Switch to dark mode",
      lightTheme: "Switch to light mode",
    },
  },
  es: {
    ...spanishInfo,
    labels: {
      greeting: "Hola, soy",
      about: "Sobre mí",
      downloadCv: "Descargar CV",
      education: "Educación",
      workExperience: "Experiencia laboral",
      projects: "Proyectos recientes",
      notFoundTitle: "404 - Página no encontrada",
      notFoundMessage: "Lo sentimos, la página que buscas no existe.",
      home: "Inicio",
      changeLanguage: "Cambiar idioma a inglés",
      navigation: "Navegación principal",
      toggleMenu: "Abrir o cerrar el menú",
      darkTheme: "Cambiar al modo oscuro",
      lightTheme: "Cambiar al modo claro",
    },
  },
};

export type Locale = keyof typeof portfolioContent;
