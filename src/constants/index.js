import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  docker,
  bikcraft,
  python,
  go
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Sof",
    icon: web,
  },
  {
    title: "DevOps",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Automation Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "golang",
    icon: go,
  },
];

const experiences = [
  {
    title: "Software Engineering",
    company_name: "AB InBev",
    date: "October 2023 - Today",
    points: [
      "Using Nest JS, K8s, implemented Alitheon artificial intelligence (AI) for image verification.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Created Complete Dashboard for better data visualization using integration with ChapGpt 4o API.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "IT TECH",
    date: "August 2023 - Today",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Back-end Developer",
    company_name: "Elo Fiscal",
    date: "March 2022 - August 2023",
    points: [
      "Experience in developing microservices and APIs using FastAPI and RabbitMQ, adopting the clean code principles and test implementation units to guarantee the quality of the final result.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented task automations with Python (Selenium, PyWinAuto, PyAutoGui) and JavaScript",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bikcraft",
    description:
      "Web-based platform that allows users to search, book, and manage bicycles rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bikcraft,
    source_code_link: "https://biel-lopes.github.io/Venda_bicicleta/",
  },
];

export { services, technologies, experiences, testimonials, projects };
