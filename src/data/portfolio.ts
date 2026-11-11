import angular from "../assets/angular.svg";
import api from "../assets/api.webp";
import arduino from "../assets/arduino.svg";
import aws from "../assets/aws.svg";
import cpp from "../assets/cpp.svg";
import css from "../assets/css.svg";
import docker from "../assets/docker.svg";
import figma from "../assets/figma.svg";
import gitLab from "../assets/git-lab.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import linux from "../assets/linux.svg";
import location from "../assets/location.svg";
import mail from "../assets/mail.svg";
import mongoDB from "../assets/mongo-db.svg";
import mySql from "../assets/my-sql.svg";
import nestJs from "../assets/nest-js.svg";
import nextJs from "../assets/next-js.svg";
import nodeJs from "../assets/node-js.svg";
import postgreSql from "../assets/postgre-sql.svg";
import prisma from "../assets/prisma.svg";
import projectEatable from "../assets/project-eatable.gif";
import python from "../assets/python.svg";
import rails from "../assets/rails.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import ruby from "../assets/ruby.svg";
import sqLite from "../assets/sq-lite.svg";
import typescript from "../assets/type-script.svg";
import windows from "../assets/windows.svg";

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
      title: "Production Experience",
      description: "Building web applications, backend services, and software solutions",
    },
    knowledge: [
      // Programming Languages / BI Tools:
      typescript,
      js,
      ruby,
      cpp,
      python,
      html,
      css,

      // Frameworks / Libraries:
      react,
      redux,
      nextJs,
      angular,
      nestJs,
      rails,

      //environments
      nodeJs,

      // tools
      postgreSql,
      mongoDB,
      sqLite,
      mySql,
      prisma,
      docker,
      aws,
      linux,
      git,
      github,
      gitLab,
      figma,
      arduino,
    ],
  },
  experience: {
    work: [
      {
        title: "Software Engineer I",
        company: "Tekton Labs",
        date: "MAY 2024 - Present",
        technologies: [
          react,
          nextJs,
          angular,
          nestJs,
          typescript,
          postgreSql,
          mongoDB,
          aws,
        ],
        description:
          "Currently, I work as a developer at Tekton Labs, where I contribute to the design and development of web applications using modern technologies. My role involves creating intuitive user interfaces and developing robust and scalable backend infrastructures, ensuring optimal performance and a high-quality user experience. I am also continuously learning and staying updated with the latest industry trends and best practices to enhance my skills and deliver better solutions.",
      },
      {
        title: "Software Developer",
        company: "{c} Labs",
        date: "DEC 2023 - MAY 2024",
        technologies: [typescript, react, nextJs],
        description:
          "Cooperated in the development of a web and mobile app designed to provide access control services for condominiums and businesses. Actively contributed to product development using React Native for mobile and Next.js for web, and continuously learning about emerging technologies to ensure the delivery of high-quality products.",
      },
      {
        title: "Junior Web Developer",
        company: "Freelance",
        date: "JUL 2023 - DEC 2023",
        technologies: [js, react],
        description:
          "Contributed to the Anki.pe project development using ReactJS for hidden kitchen management. Implemented features, collaborated, and closely participated with the team to ensure consistency in project design and functionality.",
      },
      {
        title: "IT Support Specialist",
        company: "X-Laser",
        date: "JUN 2017 - MAY 2024",
        technologies: [windows, linux],
        description:
          "Responsible for managing the printer server, maintaining the database, also helping with IT support of PCs, networks, and printers. Have helped reduce customer complaints for repetitive requests, and have provided timely service.",
      },
      {
        title: "Support Engineer",
        company: "Cescorp",
        date: "MAY 2015 - MAY 2017",
        technologies: [windows, linux],
        description:
          "Resolved customer (IBM, Xerox, Lenovo, Mapfre) service complaints and provided timely customer service. Achieved being the second support engineer with more tickets resolved.",
      },
    ],
    education: [
      {
        title: "Full-Stack Web Dev",
        company: "Codeable",
        date: "NOV 2022 - JUN 2023",
        technologies: [html, css, js, ruby, react, rails],
        description:
          "Codeable is an intensive 6-month full-time coding Bootcamp aimed at developing Full-Stack Web Developers. Additionally, the program strengthens skills in Technical English and Soft Skills such as leadership, teamwork, assertive communication, and effective presentations.",
      },
      {
        title: "Web Development (Self-Taught)",
        company: "Platzi",
        date: "2021 - 2022",
        technologies: [html, css, js],
        description:
          "During nearly one year of self-directed learning, I followed Platzi's Web Development career, which provided a solid foundation in web development, front-end technologies, and practical project work, enhancing my problem-solving skills and ability to build dynamic websites.",
      },
      {
        title: "Electronic Engineer",
        company: "UCSM",
        date: "2006 - 2012",
        technologies: [windows, linux, cpp, html, css, arduino],
        description: "Bachelor's degree in electronic engineer.",
      },
    ],
  },
  projects: [
    {
      title: "Uni Enrollment Simulation API",
      description:
        "This is an API designed for the registration and maintenance of student enrollments at a university, developed using NestJS.",
      image: api,
      link: "https://github.com/dav31rg/uniMatricula-API",
      technologies: [typescript, nestJs],
      backgroundColor: "#57564F",
      textColor: "#f8fafc",
    },
    {
      title: "Check-In Simulation API",
      description:
        "This API is designed to simulate the check-in process for airlines",
      image: api,
      link: "https://github.com/dav31rg/simulacionCheckInAerolinea-API",
      technologies: [ruby, rails],
      backgroundColor: "#DDDAD0",
      textColor: "#232323",
    },
    {
      title: "Eatable",
      description:
        "App to empower home cooks. You can see, create, and update recipes and cooking tips. Developed on React JS managing an API.",
      image: projectEatable,
      link: "https://github.com/dav31rg/eatable",
      technologies: [js, react],
      backgroundColor: "#232323",
      textColor: "#f8fafc",
    },
  ],
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
      description: "Desarrollo de aplicaciones web, servicios backend y soluciones de software",
    }
  },
  experience: {
    work: [
      {
        ...englishInfo.experience.work[0],
        title: "Ingeniero de software I",
        date: "MAY 2024 - ACTUALIDAD",
        description:
          "Trabajo como desarrollador en Tekton Labs, donde contribuyo al diseño y desarrollo de aplicaciones web con tecnologías modernas. Creo interfaces intuitivas y soluciones backend robustas y escalables, cuidando el rendimiento y la experiencia de usuario. También me mantengo al día con las tendencias y buenas prácticas de la industria.",
      },
      {
        ...englishInfo.experience.work[1],
        title: "Desarrollador de software",
        date: "DIC 2023 - MAY 2024",
        description:
          "Colaboré en el desarrollo de una aplicación web y móvil para brindar servicios de control de acceso a condominios y empresas. Contribuí al producto usando React Native para móviles y Next.js para la web, y aprendí sobre tecnologías emergentes para ofrecer soluciones de calidad.",
      },
      {
        ...englishInfo.experience.work[2],
        title: "Desarrollador web junior",
        date: "JUL 2023 - DIC 2023",
        description:
          "Contribuí al desarrollo de Anki.pe, un proyecto para la gestión de cocinas ocultas. Implementé funcionalidades y colaboré con el equipo para mantener la coherencia del diseño y el funcionamiento del producto.",
      },
      {
        ...englishInfo.experience.work[3],
        title: "Especialista de soporte TI",
        date: "JUN 2017 - MAY 2024",
        description:
          "Administré el servidor de impresión y la base de datos, y brindé soporte técnico para computadoras, redes e impresoras. Ayudé a reducir las consultas repetitivas de clientes y a ofrecer una atención oportuna.",
      },
      {
        ...englishInfo.experience.work[4],
        title: "Ingeniero de soporte",
        date: "MAY 2015 - MAY 2017",
        description:
          "Resolví incidencias de servicio para clientes como IBM, Xerox, Lenovo y Mapfre, brindando atención oportuna. Llegué a ser el segundo ingeniero de soporte con más tickets resueltos.",
      },
    ],
    education: [
      {
        ...englishInfo.experience.education[0],
        title: "Desarrollo web Full Stack",
        date: "NOV 2022 - JUN 2023",
        description:
          "Codeable es un bootcamp intensivo de programación a tiempo completo de seis meses, enfocado en formar desarrolladores web Full Stack. El programa también fortalece el inglés técnico y habilidades blandas como liderazgo, trabajo en equipo, comunicación asertiva y presentaciones efectivas.",
      },
      {
        ...englishInfo.experience.education[1],
        title: "Desarrollo web (autodidacta)",
        description:
          "Durante casi un año de aprendizaje autónomo, seguí la carrera de Desarrollo Web de Platzi. Fortalecí mis bases de desarrollo web y tecnologías frontend mediante ejercicios y proyectos prácticos.",
      },
      {
        ...englishInfo.experience.education[2],
        title: "Ingeniería electrónica",
        description: "Título profesional de Ingeniería Electrónica.",
      },
    ],
  },
  projects: [
    {
      ...englishInfo.projects[0],
      title: "API de simulación de matrícula universitaria",
      description:
        "API para registrar y administrar matrículas de estudiantes universitarios, desarrollada con NestJS.",
    },
    {
      ...englishInfo.projects[1],
      title: "API de simulación de check-in",
      description: "API que simula el proceso de check-in de una aerolínea.",
    },
    {
      ...englishInfo.projects[2],
      description:
        "Aplicación para impulsar a cocineros independientes. Permite consultar, crear y actualizar recetas y consejos de cocina. Desarrollada con React y conectada a una API.",
    },
  ],
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
